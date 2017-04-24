import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PropAuthService} from '../../services/prop-auth.service';
import {RoomAuthService} from '../../services/room-auth.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  _id: any;
  room: any;

  constructor(
    private propAuthService:PropAuthService,
    private roomAuthService:RoomAuthService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];

    this.roomAuthService.getRoomDetails(this._id).subscribe(room => {
      this.room = room;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onDeleteRoomClick() {
    this.roomAuthService.deleteRoom(this.room._id);
    this.router.navigate(['/account']);
  }

}
