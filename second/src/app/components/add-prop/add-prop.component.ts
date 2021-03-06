import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {PropAuthService} from '../../services/prop-auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-prop',
  templateUrl: './add-prop.component.html',
  styleUrls: ['./add-prop.component.css']
})
export class AddPropComponent implements OnInit {
  name: String;
  street: String;
  city: String;
  state: String;
  country: String;
  type: String;
  manager: String;
  additional: String;

  constructor(
    private validateService: ValidateService,
    private propAuthService: PropAuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onPropSubmit(event) {
    event.preventDefault();
    const prop = {
      name: this.name,
      street: this.street,
      city: this.city,
      state: this.state,
      country: this.country,
      type: this.type,
      manager: this.manager,
      additional: this.additional
    }

    // Required fields
    if(!this.validateService.validateProp(prop)) {
      this.flashMessage.show('Please fill in all required fields.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.propAuthService.registerProp(prop).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You have successfully registered your property and may now enter unit information.', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/account']);
      } else {
        this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/add-prop']);
      }
    });
  }

}
