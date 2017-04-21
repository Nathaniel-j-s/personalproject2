import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomAuthService {
  room: any;
  name: String;

  constructor(private http:Http) { }

  registerRoom(room){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/rooms/add-room', room, {headers: headers})
      .map(res => {
        return res.json()});
  }

  getRooms() {
    return this.http.get('http://localhost:3000/rooms/account')
      .map(res => {
        return res.json()
      });
  }

  getRoomsByProp(prop) {
    return this.http.get('http://localhost:3000/rooms/account?prop=' + prop)
      .map(res => {
        console.log(res);
        return res.json()
      });
  }

  getRoomDetails(title) {
    return this.http.get('http://localhost:3000/rooms/room?title=' + title)
      .map(res => {
        return res.json()
      });
  }

}
