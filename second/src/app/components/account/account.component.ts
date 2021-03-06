import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {PropAuthService} from '../../services/prop-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:Object;
  props:Object;

  constructor(
    private authService:AuthService,
    private propAuthService:PropAuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getAccount().subscribe(account => {
      this.user = account.user;
    },
    err => {
      console.log(err);
      return false;
    });

    this.propAuthService.getProps().subscribe(prop => {
      this.props = prop;
    });

  }

}
