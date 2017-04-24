import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PropAuthService {
  prop: any;
  name: String;
  id: any;

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

  getPropDetails(id) {
    return this.http.get('http://localhost:3000/props/prop?_id=' + id)
      .map(res => {
        return res.json()
    });
  }

  updateProp(id, prop) {
    return this.http.put('http://localhost:3000/props/edit-prop?_id=' + id, prop)
      .subscribe(res => {
        return res.json()
      });
  }

  deleteProp(id) {
    return this.http.delete('http://localhost:3000/props/prop?_id=' + id)
      .subscribe(res => {
        return res.json()
    });
  }

}
