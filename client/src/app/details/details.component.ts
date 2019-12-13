import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private _httpService : HttpService;
  private _route : ActivatedRoute;
  private _router : Router;
  public party : any = {};
  public joiner : any = {};

  constructor(httpService : HttpService, route : ActivatedRoute, router : Router) {
    this._httpService = httpService;
    this._route = route;
    this._router = router;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      const partyObservable : Observable<any> = this._httpService.getOneParty(params['_id']);
      partyObservable.subscribe( res => {
        this.party = res;
      });
    });
  }

  addParticipant() {
    const pObservable : Observable<any> = this._httpService.rsvp(this.party._id, this.joiner);
    pObservable.subscribe( res => {
      this.ngOnInit();
      this.joiner = {};
    })
  }

}
