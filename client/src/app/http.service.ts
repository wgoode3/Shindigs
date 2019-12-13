import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient) { 
    this._httpClient = httpClient;
  }

  getPartying() : Observable<any> {
    return this._httpClient.get("/parties");
  }

  getOneParty(_id : string) : Observable<any> {
    return this._httpClient.get(`/parties/${_id}`);
  }

  getPlanning(party : any) : Observable<any> {
    return this._httpClient.post("/parties", party);
  }

  unParty(_id : string) : Observable<any> {
    return this._httpClient.delete(`/parties/${_id}`);
  }

  rsvp(_id : string, person : string) : Observable<any> {
    return this._httpClient.put(`/parties/${_id}`, person);
  }

}
