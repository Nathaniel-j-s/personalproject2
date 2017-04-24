webpackJsonp([1,4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var config = __webpack_require__(252);
var RoomAuthService = (function () {
    function RoomAuthService(http) {
        this.http = http;
    }
    RoomAuthService.prototype.registerRoom = function (room) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + config.ip + ':3000/rooms/add-room', room, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    RoomAuthService.prototype.getRooms = function () {
        return this.http.get('http://' + config.ip + ':3000/rooms/account')
            .map(function (res) {
            return res.json();
        });
    };
    RoomAuthService.prototype.getRoomsByProp = function (prop) {
        return this.http.get('http://' + config.ip + ':3000/rooms/account?prop=' + prop)
            .map(function (res) {
            return res.json();
        });
    };
    RoomAuthService.prototype.getRoomDetails = function (id) {
        return this.http.get('http://' + config.ip + ':3000/rooms/room?_id=' + id)
            .map(function (res) {
            return res.json();
        });
    };
    RoomAuthService.prototype.updateRoom = function (id, room) {
        return this.http.put('http://' + config.ip + ':3000/rooms/edit-room?_id=' + id, room)
            .subscribe(function (res) {
            return res.json();
        });
    };
    RoomAuthService.prototype.deleteRoom = function (id) {
        return this.http.delete('http://' + config.ip + ':3000/rooms/room?_id=' + id)
            .subscribe(function (res) {
            return res.json();
        });
    };
    RoomAuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], RoomAuthService);
    return RoomAuthService;
    var _a;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/room-auth.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.prop == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateProp = function (prop) {
        if (prop.name == undefined || prop.street == undefined || prop.city == undefined || prop.state == undefined || prop.country == undefined || prop.type == undefined || prop.manager == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRoom = function (room) {
        if (room.title == undefined || room.price == undefined || room.beds == undefined || room.occupants == undefined || room.smoking == undefined || room.pets == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/validate.service.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = {
  database: 'mongodb://nathan:nathan@ds163010.mlab.com:63010/second',
  secret: 'yoursecret',
  ip: '138.68.243.80'
}


/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(695),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_account_account_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_prop_add_prop_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_edit_prop_edit_prop_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_prop_prop_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_room_room_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_add_room_add_room_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_edit_room_edit_room_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_prop_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_room_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__(523);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_10__components_account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-prop', component: __WEBPACK_IMPORTED_MODULE_11__components_add_prop_add_prop_component__["a" /* AddPropComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-prop/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_edit_prop_edit_prop_component__["a" /* EditPropComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'prop/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_prop_prop_component__["a" /* PropComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-room/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_add_room_add_room_component__["a" /* AddRoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-room/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_edit_room_edit_room_component__["a" /* EditRoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'room/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_room_room_component__["a" /* RoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_prop_add_prop_component__["a" /* AddPropComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_edit_prop_edit_prop_component__["a" /* EditPropComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_prop_prop_component__["a" /* PropComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_room_room_component__["a" /* RoomComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_add_room_add_room_component__["a" /* AddRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_edit_room_edit_room_component__["a" /* EditRoomComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__services_prop_auth_service__["a" /* PropAuthService */], __WEBPACK_IMPORTED_MODULE_20__services_room_auth_service__["a" /* RoomAuthService */], __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(authService, propAuthService, router) {
        this.authService = authService;
        this.propAuthService = propAuthService;
        this.router = router;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAccount().subscribe(function (account) {
            _this.user = account.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.propAuthService.getProps().subscribe(function (prop) {
            _this.props = prop;
        });
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(696),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/account.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPropComponent = (function () {
    function AddPropComponent(validateService, propAuthService, flashMessage, router) {
        this.validateService = validateService;
        this.propAuthService = propAuthService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AddPropComponent.prototype.ngOnInit = function () {
    };
    AddPropComponent.prototype.onPropSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var prop = {
            name: this.name,
            street: this.street,
            city: this.city,
            state: this.state,
            country: this.country,
            type: this.type,
            manager: this.manager,
            additional: this.additional
        };
        // Required fields
        if (!this.validateService.validateProp(prop)) {
            this.flashMessage.show('Please fill in all required fields.', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.propAuthService.registerProp(prop).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have successfully registered your property and may now enter unit information.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/account']);
            }
            else {
                _this.flashMessage.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/add-prop']);
            }
        });
    };
    AddPropComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-prop',
            template: __webpack_require__(697),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], AddPropComponent);
    return AddPropComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/add-prop.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_room_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddRoomComponent = (function () {
    function AddRoomComponent(validateService, roomAuthService, flashMessage, router, route) {
        this.validateService = validateService;
        this.roomAuthService = roomAuthService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    AddRoomComponent.prototype.ngOnInit = function () {
    };
    AddRoomComponent.prototype.onRoomSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var room = {
            prop: this.route.snapshot.params['id'],
            title: this.title,
            price: this.price,
            beds: this.beds,
            occupants: this.occupants,
            smoking: this.smoking,
            pets: this.pets,
            additional: this.additional
        };
        console.log(room);
        // Required fields
        if (!this.validateService.validateRoom(room)) {
            this.flashMessage.show('Please fill in all required fields.', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.roomAuthService.registerRoom(room).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have successfully registered a unit in your property, ' + _this.prop + '.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/account']);
            }
            else {
                _this.flashMessage.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/add-room']);
            }
        });
    };
    AddRoomComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-room',
            template: __webpack_require__(698),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_room_auth_service__["a" /* RoomAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_room_auth_service__["a" /* RoomAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], AddRoomComponent);
    return AddRoomComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/add-room.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPropComponent = (function () {
    function EditPropComponent(propAuthService, router, route) {
        this.propAuthService = propAuthService;
        this.router = router;
        this.route = route;
    }
    EditPropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.propAuthService.getPropDetails(this.id).subscribe(function (prop) {
            _this.id = prop._id;
            _this.name = prop.name;
            _this.street = prop.street;
            _this.city = prop.city;
            _this.state = prop.state;
            _this.country = prop.country;
            _this.type = prop.type;
            _this.manager = prop.manager;
            _this.additional = prop.additional;
        });
    };
    EditPropComponent.prototype.onEditPropSubmit = function () {
        var prop = {
            name: this.name,
            street: this.street,
            city: this.city,
            state: this.state,
            country: this.country,
            type: this.type,
            manager: this.manager,
            additional: this.additional
        };
        this.propAuthService.updateProp(this.id, prop);
        this.router.navigate(['/account']);
    };
    EditPropComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-prop',
            template: __webpack_require__(699),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditPropComponent);
    return EditPropComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/edit-prop.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_room_auth_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditRoomComponent = (function () {
    function EditRoomComponent(roomAuthService, router, route) {
        this.roomAuthService = roomAuthService;
        this.router = router;
        this.route = route;
    }
    EditRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.roomAuthService.getRoomDetails(this.id).subscribe(function (room) {
            _this.id = room._id;
            _this.prop = room.prop;
            _this.title = room.title;
            _this.price = room.price;
            _this.beds = room.beds;
            _this.occupants = room.occupants;
            _this.smoking = room.smoking;
            _this.pets = room.pets;
            _this.additional = room.additional;
        });
    };
    EditRoomComponent.prototype.onEditRoomSubmit = function () {
        var room = {
            prop: this.prop,
            title: this.title,
            price: this.price,
            beds: this.beds,
            occupants: this.occupants,
            smoking: this.smoking,
            pets: this.pets,
            additional: this.additional
        };
        this.roomAuthService.updateRoom(this.id, room);
        this.router.navigate(['/account']);
    };
    EditRoomComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-room',
            template: __webpack_require__(700),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_room_auth_service__["a" /* RoomAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_room_auth_service__["a" /* RoomAuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditRoomComponent);
    return EditRoomComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/edit-room.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(701),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/home.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['account']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(702),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/login.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out.', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(703),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/navbar.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_room_auth_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropComponent = (function () {
    function PropComponent(propAuthService, roomAuthService, router, route) {
        this.propAuthService = propAuthService;
        this.roomAuthService = roomAuthService;
        this.router = router;
        this.route = route;
    }
    PropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.params['id'];
        this.propAuthService.getPropDetails(this._id).subscribe(function (prop) {
            console.log(_this.prop);
            _this.prop = prop;
            console.log(_this.prop);
        }, function (err) {
            console.log(err);
            return false;
        });
        this.roomAuthService.getRoomsByProp(this._id).subscribe(function (room) {
            _this.rooms = room;
            _this.rooms = _this.rooms.filter(function (r) {
                return r.prop === _this._id;
            });
        });
    };
    PropComponent.prototype.onDeletePropClick = function () {
        this.propAuthService.deleteProp(this.prop._id);
        this.router.navigate(['/account']);
    };
    PropComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prop',
            template: __webpack_require__(704),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_room_auth_service__["a" /* RoomAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_room_auth_service__["a" /* RoomAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], PropComponent);
    return PropComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/prop.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            prop: this.prop
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email.', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in.', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(705),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/register.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_room_auth_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomComponent = (function () {
    function RoomComponent(propAuthService, roomAuthService, router, route) {
        this.propAuthService = propAuthService;
        this.roomAuthService = roomAuthService;
        this.router = router;
        this.route = route;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.route.snapshot.params['id'];
        this.roomAuthService.getRoomDetails(this._id).subscribe(function (room) {
            _this.room = room;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RoomComponent.prototype.onDeleteRoomClick = function () {
        this.roomAuthService.deleteRoom(this.room._id);
        this.router.navigate(['/account']);
    };
    RoomComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(706),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_prop_auth_service__["a" /* PropAuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_room_auth_service__["a" /* RoomAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_room_auth_service__["a" /* RoomAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], RoomComponent);
    return RoomComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/room.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/auth.guard.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/environment.js.map

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n<a class=\"btn btn-success\" [routerLink]=\"['/add-prop']\">Add Property</a>\n<div *ngIf=\"props\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item room\" *ngFor=\"let prop of props\">\n      <a [routerLink]=\"['/prop/'+prop._id]\">{{prop.name}}</a>\n      <ul class=\"list-group\">\n        <li>Address: {{prop.street}}, {{prop.city}}, {{prop.state}}, {{prop.country}}</li>\n        <li>Type: {{prop.type}}</li>\n        <li>Manager: {{prop.manager}}</li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/account']\">Back</a>\n<h2 class=\"page-header\">Add Property</h2>\n<form (submit)=\"onPropSubmit($event)\">\n  <div class=\"form-group\">\n    <label>Property Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <h4>Address</h4>\n    <label>Street</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"street\" name=\"street\">\n    <label>City</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"city\" name=\"city\">\n    <label>State</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"state\" name=\"state\">\n    <label>Country</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"country\" name=\"country\">\n  </div>\n  <div class=\"form-group\">\n    <label>Property Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\">\n      <option value=\"Condo\">Condo</option>\n      <option value=\"Hotel\">Hotel</option>\n      <option value=\"Resort\">Resort</option>\n      <option value=\"Apartment\">Apartment</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Manager</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"manager\" name=\"manager\">\n  </div>\n  <div class=\"form-group\">\n    <label>Additional Information</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"additional\" name=\"additional\">\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add Unit</h2>\n<form (submit)=\"onRoomSubmit($event)\">\n  <div class=\"form-group\">\n    <label>Unit Name/Number</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\">\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"price\" name=\"price\">\n  </div>\n  <div class=\"form-group\">\n    <label>Beds</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"beds\" name=\"beds\">\n  </div>\n  <div class=\"form-group\">\n    <label>Max Occupancy</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"occupants\" name=\"occupants\">\n  </div>\n  <div class=\"form-group\">\n    <label>Smoking Policy</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"smoking\" name=\"smoking\">\n      <option value=\"Allowed\">Allowed</option>\n      <option value=\"Not Allowed\">Not Allowed</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Pet Policy</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"pets\" name=\"pets\">\n      <option value=\"Allowed\">Allowed</option>\n      <option value=\"Not Allowed\">Not Allowed</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Additional Information</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"additional\" name=\"additional\">\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/account']\">Back</a>\n<h2 class=\"page-header\">Edit Property</h2>\n<form (submit)=\"onEditPropSubmit()\">\n  <div class=\"form-group\">\n    <label>Property Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <h4>Address</h4>\n    <label>Street</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"street\" name=\"street\">\n    <label>City</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"city\" name=\"city\">\n    <label>State</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"state\" name=\"state\">\n    <label>Country</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"country\" name=\"country\">\n  </div>\n  <div class=\"form-group\">\n    <label>Property Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"type\" name=\"type\">\n      <option value=\"Condo\">Condo</option>\n      <option value=\"Hotel\">Hotel</option>\n      <option value=\"Resort\">Resort</option>\n      <option value=\"Apartment\">Apartment</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Manager</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"manager\" name=\"manager\">\n  </div>\n  <div class=\"form-group\">\n    <label>Additional Information</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"additional\" name=\"additional\">\n  </div>\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/account']\">Back</a>\n<h2 class=\"page-header\">Edit Unit</h2>\n<form (submit)=\"onEditRoomSubmit()\">\n  <div class=\"form-group\">\n    <label>Title (Name/Number)</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\">\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"price\" name=\"price\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Beds</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"beds\" name=\"beds\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Max Occupants</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"occupants\" name=\"occupants\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Smoking</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"smoking\" name=\"smoking\" required>\n      <option value=\"Allowed\">Allowed</option>\n      <option value=\"Not Allowed\">Not Allowed</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Pet Policy</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"pets\" name=\"pets\" required>\n      <option value=\"Allowed\">Allowed</option>\n      <option value=\"Not Allowed\">Not Allowed</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Additional Information</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"additional\" name=\"additional\">\n  </div>\n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to my custom MEAN authentication application built from scratch.</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/account']\">Account</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"prop\">\n  <a [routerLink]=\"['/account']\">Go Back</a>\n  <h2 class=\"page-header\">{{prop.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Address: {{prop.street}}, {{prop.city}}, {{prop.state}}, {{prop.country}}</li>\n    <li class=\"list-group-item\">Type: {{prop.type}}</li>\n    <li class=\"list-group-item\">Manager: {{prop.manager}}</li>\n  </ul>\n  <div>\n    <p>Additional Information: {{prop.additional}}</p>\n  </div>\n  <a class=\"btn btn-default\" [routerLink]=\"['/edit-prop/'+prop._id]\">Edit</a>\n  <a class=\"btn btn-danger\" (click)=\"onDeletePropClick()\">Delete</a>\n</div>\n<a class=\"btn btn-success\" [routerLink]=\"['/add-room/'+this._id]\">Add Unit</a>\n<div *ngIf=\"rooms\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item room\" *ngFor=\"let room of rooms\">\n      <a [routerLink]=\"['/room/'+room._id]\">{{room.title}}</a>\n      <ul class=\"list-group\">\n        <li>Price: {{room.price}}</li>\n        <li>Beds: {{room.beds}}</li>\n        <li>Max Occupants: {{room.occupants}}</li>\n        <li>Smoking Policy: {{room.smoking}}</li>\n        <li>Pet Policy: {{room.pets}}</li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Initial Property</label>\n    <input type=\"text\" [(ngModel)]=\"prop\" name=\"prop\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n</form>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"room\">\n  <h2 class=\"page-header\">{{room.title}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Price: {{room.price}}</li>\n    <li class=\"list-group-item\">Beds: {{room.beds}}</li>\n    <li class=\"list-group-item\">Max Occupants: {{room.occupants}}</li>\n    <li class=\"list-group-item\">Smoking Policy: {{room.smoking}}</li>\n    <li class=\"list-group-item\">Pet Policy: {{room.pets}}</li>\n  </ul>\n  <p>Additional: {{room.additional}}</p>\n  <a class=\"btn btn-default\" [routerLink]=\"['/edit-room/'+room._id]\">Edit</a>\n  <a class=\"btn btn-danger\" (click)=\"onDeleteRoomClick()\">Delete</a>\n</div>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = __webpack_require__(252);
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + config.ip + ':3000/users/register', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + config.ip + ':3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAccount = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + config.ip + ':3000/users/account', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/auth.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var config = __webpack_require__(252);
var PropAuthService = (function () {
    function PropAuthService(http) {
        this.http = http;
    }
    PropAuthService.prototype.registerProp = function (prop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + config.ip + ':3000/props/add-prop', prop, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    PropAuthService.prototype.getProps = function () {
        return this.http.get('http://' + config.ip + ':3000/props/account')
            .map(function (res) {
            return res.json();
        });
    };
    PropAuthService.prototype.getPropDetails = function (id) {
        return this.http.get('http://' + config.ip + ':3000/props/prop?_id=' + id)
            .map(function (res) {
            return res.json();
        });
    };
    PropAuthService.prototype.updateProp = function (id, prop) {
        return this.http.put('http://' + config.ip + ':3000/props/edit-prop?_id=' + id, prop)
            .subscribe(function (res) {
            return res.json();
        });
    };
    PropAuthService.prototype.deleteProp = function (id) {
        return this.http.delete('http://' + config.ip + ':3000/props/prop?_id=' + id)
            .subscribe(function (res) {
            return res.json();
        });
    };
    PropAuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PropAuthService);
    return PropAuthService;
    var _a;
}());
//# sourceMappingURL=/Users/reno/Desktop/DevMountain/Personal/new/second/src/prop-auth.service.js.map

/***/ })

},[729]);
//# sourceMappingURL=main.bundle.map