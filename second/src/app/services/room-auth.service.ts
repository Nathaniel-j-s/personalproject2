import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
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
        return res.json()
      });
  }

  getRoomDetails(id) {
    return this.http.get('http://localhost:3000/rooms/room?_id=' + id)
      .map(res => {
        return res.json()
      });
  }

  updateRoom(id, room) {
    return this.http.put('http://localhost:3000/rooms/edit-room?_id=' + id, room)
      .subscribe(res => {
        return res.json()
      });
  }

  deleteRoom(id) {
    return this.http.delete('http://localhost:3000/rooms/room?_id=' + id)
      .subscribe(res => {
        return res.json()
    });
  }

}
