import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  private _http : HttpService;
  private _router : Router;
  public party : any = {};
  public errors : any = {};

  constructor(http : HttpService, router: Router) { 
    this._http = http;
    this._router = router;
  }

  ngOnInit() {
  }

  planParty() {
    const partyObservable : Observable<any> = this._http.getPlanning(this.party);
    partyObservable.subscribe( res => {
      if(res.errors) {
        this.errors = res.errors;
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
