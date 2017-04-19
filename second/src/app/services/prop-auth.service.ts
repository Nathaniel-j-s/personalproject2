import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PropAuthService {
  prop: any;

  constructor(private http:Http) { }

  registerProp(prop){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/props/register', prop, {headers: headers})
      .map(res => {
        return res.json()});
  }

}
