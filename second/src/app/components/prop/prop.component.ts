import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PropAuthService} from '../../services/prop-auth.service';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {
  id: any;
  name: any;
  prop: any;

  constructor(
    private propAuthService:PropAuthService,
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
  }

}
