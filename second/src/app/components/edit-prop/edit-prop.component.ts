import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PropAuthService} from '../../services/prop-auth.service';

@Component({
  selector: 'app-edit-prop',
  templateUrl: './edit-prop.component.html',
  styleUrls: ['./edit-prop.component.css']
})
export class EditPropComponent implements OnInit {
  id;
  name;
  street;
  city;
  state;
  country;
  type;
  manager;
  additional;

  constructor(
    private propAuthService: PropAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.propAuthService.getPropDetails(this.id).subscribe(prop => {
      this.name = prop.name;
      this.street = prop.street;
      this.city = prop.city;
      this.state = prop.state;
      this.country = prop.country;
      this.type = prop.type;
      this.manager = prop.manager;
      this.additional = prop.additional;
    });
  }

  // onEditPropSubmit() {
  //   let prop = {
  //     name: this.name,
  //     street: this.street,
  //     city: this.city,
  //     state: this.state,
  //     country: this.country,
  //     type: this.type,
  //     manager: this.manager,
  //     additional: this.additional
  //   }
  //
  //   this.propAuthService.updateProp(this.id, prop);
  //   this.router.navigate(['/account']);
  // }

}
