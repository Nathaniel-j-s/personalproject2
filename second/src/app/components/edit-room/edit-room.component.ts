import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {RoomAuthService} from '../../services/room-auth.service';


@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  id;
  prop;
  title;
  price;
  beds;
  occupants;
  smoking;
  pets;
  additional;

  constructor(
    private roomAuthService: RoomAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.roomAuthService.getRoomDetails(this.id).subscribe(room => {
      this.id = room._id;
      this.prop = room.prop;
      this.title = room.title;
      this.price = room.price;
      this.beds = room.beds;
      this.occupants = room.occupants;
      this.smoking = room.smoking;
      this.pets = room.pets;
      this.additional = room.additional;
    });
  }

  onEditRoomSubmit() {
    let room = {
      prop: this.prop,
      title: this.title,
      price: this.price,
      beds: this.beds,
      occupants: this.occupants,
      smoking: this.smoking,
      pets: this.pets,
      additional: this.additional
    }

    this.roomAuthService.updateRoom(this.id, room);
    this.router.navigate(['/account']);
  }

}
