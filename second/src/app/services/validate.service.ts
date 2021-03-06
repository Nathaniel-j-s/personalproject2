import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.prop == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateProp(prop){
    if(prop.name == undefined || prop.street == undefined || prop.city == undefined || prop.state == undefined || prop.country == undefined || prop.type == undefined || prop.manager == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateRoom(room){
    if(room.title == undefined || room.price == undefined || room.beds == undefined || room.occupants == undefined || room.smoking == undefined || room.pets == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
