import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _http : HttpService;
  public past_parties : Array<any> = [];
  public future_parties : Array<any> = [];
  public selection : String = "show past"; 

  constructor(http: HttpService) { 
    this._http = http;
  }

  ngOnInit() : void {
    const partyObservable : Observable<any> = this._http.getPartying();
    partyObservable.subscribe( res => {
      this.past_parties = res.filter( p => new Date(p.when) < new Date());
      this.future_parties = res.filter( p => new Date(p.when) > new Date());
    });
  }

  delete(_id : string) : void {
    const partyObservable : Observable<any> = this._http.unParty(_id);
    partyObservable.subscribe(res => this.ngOnInit());
  }

  toggle() {
    if(this.selection === "show future") {
      this.selection = "show past";
    } else {
      this.selection = "show future";
    }
  }

}
