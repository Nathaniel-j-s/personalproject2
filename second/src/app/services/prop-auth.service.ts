import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PropAuthService {
  prop: any;
  name: String;

  constructor(private http:Http) { }

  registerProp(prop){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/props/add-prop', prop, {headers: headers})
      .map(res => {
        return res.json()});
  }

  getProps() {
    return this.http.get('http://localhost:3000/props/account')
      .map(res => {
        return res.json()
      });
  }

  getPropDetails(name) {
    return this.http.get('http://localhost:3000/props/prop?name=' + name)
      .map(res => {
        return res.json()
      });
  }

}
