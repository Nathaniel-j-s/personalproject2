import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {RoomAuthService} from '../../services/room-auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PropComponent} from '../prop/prop.component';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  prop: String;
  title: String;
  price: String;
  beds: String;
  occupants: String;
  smoking: String;
  pets: String;
  additional: String;

  constructor(
    private validateService: ValidateService,
    private roomAuthService: RoomAuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onRoomSubmit(event) {
    event.preventDefault();
    const room = {
      prop: this.route.snapshot.params['id'],
      title: this.title,
      price: this.price,
      beds: this.beds,
      occupants: this.occupants,
      smoking: this.smoking,
      pets: this.pets,
      additional: this.additional
    }
    console.log(room);

    // Required fields
    if(!this.validateService.validateRoom(room)) {
      this.flashMessage.show('Please fill in all required fields.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.roomAuthService.registerRoom(room).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You have successfully registered a unit in your property, ' + this.prop + '.', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/account']);
      } else {
        this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/add-room']);
      }
    });
  }

}
