import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PropAuthService} from '../../services/prop-auth.service';
import {RoomAuthService} from '../../services/room-auth.service';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {
  id: any;
  prop: any;
  rooms: any;
  name: any;
  key: any;

  constructor(
    private propAuthService:PropAuthService,
    private roomAuthService:RoomAuthService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id'];

    this.propAuthService.getPropDetails(this.name).subscribe(prop => {
      this.prop = prop;
    },
    err => {
      console.log(err);
      return false;
    });

    this.roomAuthService.getRoomsByProp(this.name).subscribe(room => {
      this.rooms = room;
      this.rooms = this.rooms.filter(r => {
        return r.prop === this.name
      });
    });
  }

  onDeletePropClick() {
    this.propAuthService.deleteProp(this.name);
    this.router.navigate(['/account']);
  }

}
