(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "all"
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <app-header></app-header>\n        </div>\n        <div class=\"col-12 mt-sm-5 mt-lg-3 border-bottom pb-3\">\n            <a class=\"navigator p-3\"routerLink=\"all\" routerLinkActive=\"active-link\">All</a>\n            <a class=\"navigator p-3\" routerLink=\"board\" routerLinkActive=\"active-link\">Board</a>\n            <a class=\"navigator p-3\"routerLink=\"graph\" routerLinkActive=\"active-link\">Graph</a>\n            <a class=\"navigator p-3\" routerLink=\"recent\" routerLinkActive=\"active-link\">Recent</a>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigator {\n  text-decoration: none;\n  color: #000; }\n\n.navigator:hover {\n  text-decoration: none;\n  color: #000; }\n\n.active-link {\n  border-bottom: 3px solid #ff4363; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW5pbC9lY2xpcHNlLXdvcmtzcGFjZS9lZGl0b3Ivc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUVmO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRvcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG4ubmF2aWdhdG9yOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5hY3RpdmUtbGlua3tcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmNDM2Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'editor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _menus_menus_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/menus.module */ "./src/app/menus/menus.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TypeaheadModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _menus_menus_module__WEBPACK_IMPORTED_MODULE_9__["MenusModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_headerwraper\">\n <div class=\"row h-100 align-items-center\">\n    <!--Menu dropdown start-->\n    <div class=\"col-3 col-sm-2 col-md-1 order-1\">\n        <i class=\"fa fa-bars _cp\" tooltip=\"Under implementation\" position=\"top\"></i>\n    </div>\n    <!--Menu dropdown end-->\n\n    <!--Search start-->\n    <div class=\"col-12 col-sm-12 col-md-6 order-md-2 order-3\">\n      <div class=\"form-group position-relative mb-0\">\n        \n        <i class=\"fa fa-search position-absolute _search-icon-position\"></i>\n          <input type=\"text\" class=\"form-control border-0 pl-4\" \n              [(ngModel)]=\"selectedValue\"\n              [typeahead]=\"headerSuggestion\"\n              typeaheadOptionField=\"name\"\n              [typeaheadScrollable]=\"true\"\n              (typeaheadNoResults)=\"typeaheadNoResults($event)\"\n              (typeaheadOnSelect)=\"onTypeAheadSelect($event)\"\n              id=\"searchQuery\" aria-describedby=\"searchQuery\" placeholder=\"Search your query here ex : alab\">\n        <div class=\"alert-danger position-absolute p-2 rounded w-100 noresult\" *ngIf=\"noResult\">No Results Found</div>\n      </div>\n    </div>\n    <!--Search end-->\n\n    <!--Invite and notification start-->\n    <div class=\"col-9 col-sm-10 col-md-5 order-md-3 order-2 text-right\">\n        <!--Invite icon-->\n        <div class=\"d-inline-block mr-3\">\n            <i class=\"fa fa-user-plus\"></i>\n            <span class=\"text-uppercase\"> Invite team member</span>\n        </div>\n        <!--Invite icon end -->\n\n        <!--Notification icon-->\n        <div class=\"d-inline-block mr-3\">\n          <i class=\"fa  fa-bell\"></i>\n        </div>\n        <!--Notification icon-->  \n\n        <!--User dropdown start-->\n        <div class=\"d-inline-block _ht-35 _wd-35 rounded-circle text-center _userdropdown mr-2 position-relative\">\n          <span dropdown (onShown)=\"onShown()\" (onHidden)=\"onHidden()\" (isOpenChange)=\"isOpenChange()\" placement=\"bottom left\">\n              <a href id=\"basic-link\" class=\"_menua\" dropdownToggle (click)=\"false\"\n                 aria-controls=\"basic-link-dropdown\"> <span>FL</span></a>\n              <ul id=\"basic-link-dropdown\" *dropdownMenu class=\"dropdown-menu\"\n                  role=\"menu\" aria-labelledby=\"basic-link\">\n                <li>\n                  <a class=\"dropdown-item pl-2\" href=\"#\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-8\">\n                            Dark mode\n                        </div>\n                        <div class=\"col-4 text-right\">\n                          <label class=\"switch\">\n                            <input type=\"checkbox\">\n                            <span class=\"slider round\"></span>\n                          </label>\n                        </div>\n                    </div>  \n                  </a>\n                </li>\n                <li>\n                    <a class=\"dropdown-item pl-2\" href=\"#\">\n                      Profile\n                    </a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li>\n                  <a class=\"dropdown-item pl-2\" href=\"#\">\n                      <div class=\"row align-items-center\">\n                          <div class=\"col-8\">\n                            What's new\n                          </div>\n                          <div class=\"col-4 text-right\">\n                           <div class=\"_greendotnew\"></div>\n                          </div>\n                      </div> \n                    </a>\n                </li>\n                <li>\n                    <a class=\"dropdown-item pl-2\" href=\"#\">Help</a>\n                </li>\n                <li>\n                  <a class=\"dropdown-item pl-2\" href=\"#\">Send feedback</a>\n                </li>\n                <li>\n                    <a class=\"dropdown-item pl-2\" href=\"#\">Hints and dhortcuts</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li>\n                    <a class=\"dropdown-item pl-2\" href=\"#\">Logout</a>\n                </li>\n              </ul>\n            </span>\n          <div class=\"_new text-white text-uppercase\">\n            New\n          </div>\n          <div class=\"_greendot\"></div>\n        </div>\n        <!--User dropdown end-->\n\n    </div>\n    <!--Invite and notification end-->\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._headerwraper {\n  height: 45px; }\n\n.form-control:focus {\n  box-shadow: 0px 0px 0px 0px !important; }\n\n._search-icon-position {\n  top: 12px; }\n\n._ht-35 {\n  height: 35px; }\n\n._wd-35 {\n  width: 35px; }\n\n._userdropdown {\n  line-height: 35px;\n  background: #893f94;\n  color: #fff !important; }\n\n._menua {\n  color: #fff !important; }\n\n._menua:hover {\n  text-decoration: none; }\n\n.noresult {\n  z-index: 2;\n  box-shadow: 0px 2px 1px 1px #8080804d; }\n\n._new {\n  height: 13px;\n  width: 32px;\n  line-height: 1;\n  border: 1px solid #fff;\n  position: absolute;\n  background: red;\n  font-size: 10px;\n  padding-left: 2px;\n  border-radius: 4px;\n  top: -1px;\n  left: 22px; }\n\n._greendot {\n  height: 8px;\n  width: 8px;\n  border: 1px solid #fff;\n  position: absolute;\n  background: green;\n  border-radius: 50%;\n  right: 0;\n  top: 24px; }\n\n._greendotnew {\n  height: 12px;\n  width: 12px;\n  border: 1px solid #fff;\n  background: green;\n  border-radius: 50%; }\n\n._userdropdown .dropdown-menu {\n  right: 0 !important;\n  left: auto !important;\n  width: 200px; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 25px; }\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #893f94; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #893f94; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(16px);\n  transform: translateX(16px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW5pbC9lY2xpcHNlLXdvcmtzcGFjZS9lZGl0b3Ivc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNDQUFzQyxFQUFBOztBQUUxQztFQUNJLFNBQVEsRUFBQTs7QUFFWjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNFLFVBQVU7RUFDVixxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVkO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0Isb0JBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuX2hlYWRlcndyYXBlcntcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG4uZm9ybS1jb250cm9sOmZvY3Vze1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuLl9zZWFyY2gtaWNvbi1wb3NpdGlvbntcbiAgICB0b3A6MTJweDtcbn1cbi5faHQtMzV7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuLl93ZC0zNXtcbiAgICB3aWR0aDogMzVweDtcbn1cbi5fdXNlcmRyb3Bkb3due1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQ6ICM4OTNmOTQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5fbWVudWF7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5fbWVudWE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXG59XG4ubm9yZXN1bHR7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDFweCAjODA4MDgwNGQ7XG5cbn1cbi5fbmV3eyAgICBcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IDIycHg7IFxufVxuLl9ncmVlbmRvdHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDI0cHg7XG5cbn1cbi5fZ3JlZW5kb3RuZXd7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLl91c2VyZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxuICBcbiAgLnN3aXRjaCBpbnB1dCB7IFxuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5M2Y5NDtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICM4OTNmOTQ7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gIH1cbiAgXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAuc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.noResult = false;
        this.headerSuggestion = [
            { id: 1, name: 'Alabama', region: 'South' },
            { id: 2, name: 'Alaska', region: 'West' },
            { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' },
            { id: 5, name: 'California', region: 'West' },
        ];
        this.userMenus = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.typeaheadNoResults = function (event) {
        this.noResult = event;
    };
    HeaderComponent.prototype.onTypeAheadSelect = function ($event) {
        var valueSelected = $event['value'];
        alert("You have selected, " + valueSelected);
        this.selectedValue = "";
    };
    HeaderComponent.prototype.onHidden = function () {
        console.log('Dropdown is hidden');
    };
    HeaderComponent.prototype.onShown = function () {
        console.log('Dropdown is shown');
    };
    HeaderComponent.prototype.isOpenChange = function () {
        console.log('Dropdown state is changed');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menus/all/all.component.html":
/*!**********************************************!*\
  !*** ./src/app/menus/all/all.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_wdc-100 pr-3 pl-3\">\n  <div class=\"row\">\n    <!--Left panel of all -->\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-right _htc-100 _leftpanel\">\n      <div class=\"row\">\n        <div class=\"col-3 border-bottom pt-1 pb-1\">\n            <small> DFIN </small>\n        </div>\n        <div class=\"col-9 text-right border-bottom pt-1 pb-1\">\n          <small> \n            <i class=\"fa fa-plus pr-3 _cp\" tooltip=\"Add new\" position=\"top\" (click)=\"openNewCollectionModal(saveNewCollection)\"></i>\n            <i class=\"fa fa-expand _cp pr-3\" tooltip=\"Under implementation\" position=\"top\"></i>\n            <i class=\"fa fa-angle-double-left _cp\" tooltip=\"Under implementation\" position=\"top\"></i>\n          </small>\n        </div>\n        <!--Saved collection list start here-->\n\n        <div class=\"col-12\">\n           <div *ngIf=\"(savedCollectionInDB | json) != '{}' ;else noCollectionFound\" class=\"row\">\n              <!--Collection name - Parent-->\n              <div *ngFor=\"let collection of savedCollectionInDB | keyvalue\" class=\"col-12\">\n                  <div class=\"row align-items-center _collection pt-1 pb-1\">\n                      <div class=\"col-8\">\n                        <div class=\"_fs-12\">\n                            {{collection.key}}\n                        </div>\n                      </div>\n                      <div class=\"col-4 text-right\">\n                          <i class=\"fa fa-trash pr-3 _cp _fs-12\" tooltip=\"Delete\" position=\"top\" (click)=\"deleteCollection(collection)\"></i>\n                          <i class=\"fa fa-plus _cp _fs-12\" tooltip=\"Add new\" position=\"top\" (click)=\"openNewChildModal(collection,saveNewChild)\"></i>\n                      </div>\n                  </div>\n\n                  <!--Collection childs start here-->\n                  <div *ngFor=\"let child of collection.value | keyvalue\" class=\"_fs-12\">\n                      <div class=\"row _collection pt-1 pb-1\">\n                          <div class=\"col-8\">\n                            <div class=\"_fs-12 pl-2\">\n                                {{child.key}}\n                            </div>\n                          </div>\n                          <div class=\"col-4 text-right\">\n                              <i class=\"fa fa-plus _cp _fs-12\" tooltip=\"Add new\" position=\"top\" (click)=\"openNewGrandChildModal(collection,child,saveNewGrandChild)\"></i>\n                          </div>\n                      </div>\n\n                      <!--Collection grand childs start here-->\n                      <div *ngFor=\"let grandchild of child.value | keyvalue\" class=\"_fs-12\">\n                        <div class=\"row _collection pt-1 pb-1\">\n                          <div class=\"col-12\">\n                            <div class=\"_fs-12\">\n                                <div *ngIf=\"grandchild.value.addEditor == true\">\n                                    <a routerLink=\"/all/content/we\" class=\"d-inline-block w-100 position-relative _content pl-3\" routerLinkActive=\"active-link\">{{grandchild.key}}\n                                      <div class=\"activecontent\"></div>\n                                    </a>\n                                </div>\n                                <div *ngIf=\"grandchild.value.addEditor == false\">\n                                    <a routerLink=\"/all/content/woe\" class=\"d-inline-block w-100 position-relative _content pl-3\" routerLinkActive=\"active-link\">{{grandchild.key}}\n                                      <div class=\"activecontent\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!--Collection grand childs end here-->\n                  </div>\n                  <!--Collection childs end here-->\n              </div>\n           </div>\n        </div>\n        <!--Saved collection list end here-->\n      </div>\n    </div>\n    <!--Left panel of all end -->\n\n    <!--Right panel of all -->\n    <div class=\"col-12 col-sm-6 col-md-8 col-lg-9 col-xl-10 _htc-100\">\n        <router-outlet></router-outlet>\n    </div>\n    <!--Right panel of all end-->\n  </div>\n</div>\n\n<!--Save new collection modal template-->\n<ng-template #saveNewCollection>\n  <form [formGroup]=\"saveNewCollectionForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Add Parent</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"saveNewCollectionModal.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputCollection\" class=\"m-0 p-0 _fs-12\">Enter Collection Name</label>\n        <small id=\"collectionSizeHelp\" class=\"form-text text-muted pl-1 mb-1 mt-0\">Min size 5 , Max size 15</small>\n        <input formControlName=\"name\" autocomplete=\"off\" type=\"text\" max=\"15\" class=\"form-control\" id=\"exampleInputCollection\" aria-describedby=\"collectionSizeHelp\" placeholder=\"Enter name\">\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"text-right\">\n        <button class=\"btn btn-primary\" (click)=\"saveNewCollectionInLocalStorage()\" [disabled]=!saveNewCollectionForm.valid>Add</button>\n      </div>\n    </div>\n  </form>\n  </ng-template>\n<!--Save new collection modal template end-->\n\n<!--Save new child modal template-->\n<ng-template #saveNewChild>\n    <form [formGroup]=\"saveNewChildForm\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Child</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"saveNewChildModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputChild\" class=\"m-0 p-0 _fs-12\">Enter Child Name</label>\n          <small class=\"form-text text-muted pl-1 mb-1 mt-0\">Min size 5 , Max size 15</small>\n          <input formControlName=\"name\" autocomplete=\"off\" type=\"text\" max=\"15\" class=\"form-control\" id=\"exampleInputChild\" placeholder=\"Enter name\">\n          <input hidden formControlName=\"collection\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"text-right\">\n          <button class=\"btn btn-primary\" (click)=\"saveNewChildInLocalStorage()\" [disabled]=!saveNewChildForm.valid>Add</button>\n        </div>\n      </div>\n    </form>\n    </ng-template>\n  <!--Save new child modal template end-->\n\n\n  <!--Save new grand child modal template-->\n<ng-template #saveNewGrandChild>\n    <form [formGroup]=\"saveNewGrandChildForm\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Grand Child</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"saveNewGrandChildModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" formControlName=\"addEditor\"> \n                  <span class=\"pl-2 _fs-12\">Add Editor</span>\n                </label>\n              </div>\n          <label for=\"exampleInputGrandChild\" class=\"m-0 p-0 _fs-12\">Enter Grand Child Name</label>\n          <small class=\"form-text text-muted pl-1 mb-1 mt-0\">Min size 5 , Max size 15</small>\n          <input formControlName=\"name\" autocomplete=\"off\" type=\"text\" max=\"15\" class=\"form-control\" id=\"exampleInputGrandChild\" placeholder=\"Enter name\">\n          <input hidden formControlName=\"collection\">\n          <input hidden formControlName=\"child\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"text-right\">\n          <button class=\"btn btn-primary\" (click)=\"saveNewGrandChildInLocalStorage()\" [disabled]=!saveNewGrandChildForm.valid>Add</button>\n        </div>\n      </div>\n    </form>\n    </ng-template>\n  <!--Save new grand child modal template end-->\n\n\n<!--No Collection found Template-->\n<ng-template #noCollectionFound>\n  <div class=\"text-muted pl-2 _fs-8 mt-5\">\n    No collection added yet, <br>\n    Once added will start appering here..!\n  </div>\n</ng-template>\n<!--No Collection found Template-->\n"

/***/ }),

/***/ "./src/app/menus/all/all.component.scss":
/*!**********************************************!*\
  !*** ./src/app/menus/all/all.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._wdc-100 {\n  width: calc(100vw); }\n\n._htc-100 {\n  height: calc(100vh - 85px); }\n\n._leftpanel {\n  background: #f5f5f5; }\n\n._fs-8 {\n  font-size: 8px; }\n\n._fs-12 {\n  font-size: 12px; }\n\n._collection:hover {\n  background: #d6d6d6;\n  cursor: pointer; }\n\n.active-link .activecontent {\n  position: absolute;\n  background: #ff4363;\n  height: 26px;\n  width: 4px;\n  left: -16px;\n  top: -4px; }\n\n._content {\n  color: #000; }\n\n._content:hover {\n  color: #000;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW5pbC9lY2xpcHNlLXdvcmtzcGFjZS9lZGl0b3Ivc3JjL2FwcC9tZW51cy9hbGwvYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksMEJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUViO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudXMvYWxsL2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5fd2RjLTEwMHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyk7XG59XG4uX2h0Yy0xMDB7XG4gICAgaGVpZ2h0OmNhbGMoMTAwdmggLSA4NXB4KTtcbn1cbi5fbGVmdHBhbmVse1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG4uX2ZzLTh7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG4uX2ZzLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5fY29sbGVjdGlvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZDZkNmQ2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3RpdmUtbGluayAuYWN0aXZlY29udGVudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2ZmNDM2MztcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgd2lkdGg6IDRweDtcbiAgICBsZWZ0OiAtMTZweDtcbiAgICB0b3A6IC00cHg7XG59XG4uX2NvbnRlbnR7XG4gICAgY29sb3I6ICMwMDA7XG59XG4uX2NvbnRlbnQ6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menus/all/all.component.ts":
/*!********************************************!*\
  !*** ./src/app/menus/all/all.component.ts ***!
  \********************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AllComponent = /** @class */ (function () {
    function AllComponent(modalService, formBuilder) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
    }
    AllComponent.prototype.ngOnInit = function () {
        this.saveNewCollectionForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
        });
        this.saveNewChildForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            collection: ['']
        });
        this.saveNewGrandChildForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            addEditor: [''],
            collection: [''],
            child: ['']
        });
        this.savedCollectionInDB = JSON.parse(localStorage.getItem("editor"));
        if (this.savedCollectionInDB == null) {
            this.savedCollectionInDB = {};
        }
    };
    /**
     * On click of add new Collection new method will be called <br>
     * Will be used to Open modal which will be used to get details for new Collection <br>
     * All collections are saved in local storage <br>
     */
    AllComponent.prototype.openNewCollectionModal = function (template) {
        this.saveNewCollectionForm.reset();
        this.saveNewCollectionModal = this.modalService.show(template);
    };
    /**
     * To open child modal and set collection value into form
     * @param collection
     * @param template
     */
    AllComponent.prototype.openNewChildModal = function (collection, template) {
        this.saveNewChildForm.reset();
        this.saveNewChildForm.setValue({
            collection: collection,
            name: ''
        });
        this.saveNewChildModal = this.modalService.show(template);
    };
    /**
     * To open grand child modal and set collection and child values into form
     * @param collection
     * @param child
     * @param template
     */
    AllComponent.prototype.openNewGrandChildModal = function (collection, child, template) {
        this.saveNewGrandChildForm.reset();
        this.saveNewGrandChildForm.setValue({
            collection: collection,
            child: child,
            name: '',
            addEditor: false,
        });
        this.saveNewGrandChildModal = this.modalService.show(template);
    };
    /**
     * This method will be used to create new collection in local DB <br>
     * First method will check form is valid or not <br>
     * If valied than
     * It will check is there any object exist in local storage name by editor <br>
     * If editor is not found in DB, this method will first create a Object editor in DB <br>
     * //TODO : Do not allow duplicate name for collection and there child
     */
    AllComponent.prototype.saveNewCollectionInLocalStorage = function () {
        var isFormValid = this.saveNewCollectionForm.valid;
        if (isFormValid) {
            var editor = JSON.parse(localStorage.getItem("editor"));
            if (editor == null || typeof editor == undefined) {
                editor = {};
                localStorage.setItem("editor", JSON.stringify(editor));
            }
            editor[this.saveNewCollectionForm.value['name']] = {};
            localStorage.setItem("editor", JSON.stringify(editor));
            this.savedCollectionInDB = editor;
            this.saveNewCollectionModal.hide();
        }
    };
    /**
     * To delete existing collection in DB  <br>
     * Will Delete Collection and Update in var this.savedCollectionInDB
     * @param collection
     */
    AllComponent.prototype.deleteCollection = function (collection) {
        if (collection != null && typeof collection != undefined) {
            var editor = JSON.parse(localStorage.getItem("editor"));
            if (editor != null) {
                delete editor[collection['key']];
                localStorage.setItem("editor", JSON.stringify(editor));
                this.savedCollectionInDB = editor;
                window.location.href = "/";
            }
        }
        else {
            console.warn("Can't delete collection, it is empty");
        }
    };
    /**
     * This method is used to save new child in DB <br>
     * Based on saveNewChildForm this method will feched saved collection in DB <br>
     * For that collection method will store new child for collection
     */
    AllComponent.prototype.saveNewChildInLocalStorage = function () {
        var isFormValid = this.saveNewChildForm.valid;
        if (isFormValid) {
            var editor = JSON.parse(localStorage.getItem("editor"));
            if (editor != null) {
                var collection = this.saveNewChildForm.value['collection'];
                var newChildName = this.saveNewChildForm.value['name'];
                collection['value'][newChildName] = {};
                editor[collection['key']] = collection['value'];
                localStorage.setItem("editor", JSON.stringify(editor));
                this.savedCollectionInDB = editor;
                this.saveNewChildModal.hide();
            }
            else {
                console.warn("Can't add child, editor it is empty");
            }
        }
    };
    /**
     * This method is will be used to save grand child for a collection <br>
     * Based on collection all child will be fetched <br>
     * Among the childs one child will be fetched for wich grand child will going to be stored <br>
     */
    AllComponent.prototype.saveNewGrandChildInLocalStorage = function () {
        var isFormValid = this.saveNewGrandChildForm.valid;
        if (isFormValid) {
            var editor = JSON.parse(localStorage.getItem("editor"));
            if (editor != null) {
                var collection = this.saveNewGrandChildForm.value['collection'];
                var child = this.saveNewGrandChildForm.value['child'];
                var grandChildName = this.saveNewGrandChildForm.value['name'];
                var addEditor = this.saveNewGrandChildForm.value['addEditor'];
                collection['value'][child['key']][grandChildName] = {
                    addEditor: addEditor
                };
                editor[collection['key']] = collection['value'];
                localStorage.setItem("editor", JSON.stringify(editor));
                this.savedCollectionInDB = editor;
                this.saveNewGrandChildModal.hide();
            }
            else {
                console.warn("Can't add grand child, editor it is empty");
            }
        }
    };
    AllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/menus/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.scss */ "./src/app/menus/all/all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/menus/board/board.component.html":
/*!**************************************************!*\
  !*** ./src/app/menus/board/board.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_wdc-100 pr-3 pl-3\">\n  <div class=\"row\">\n      <div class=\"col-12 text-center mt-3\">\n          Under implementation\n      </div>\n      <div class=\"col-12 mt-3 text-center\">\n          <i class=\"fa fa-wrench _text-pink _fs-200\"></i>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/menus/board/board.component.scss":
/*!**************************************************!*\
  !*** ./src/app/menus/board/board.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menus/board/board.component.ts":
/*!************************************************!*\
  !*** ./src/app/menus/board/board.component.ts ***!
  \************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/menus/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/menus/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/menus/commonrightpanel/commonrightpanel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/menus/commonrightpanel/commonrightpanel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pr-3 pl-3\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center mt-3\">\n            Under implementation\n        </div>\n        <div class=\"col-12 mt-3 text-center\">\n            <i class=\"fa fa-wrench _text-pink _fs-200\"></i>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/menus/commonrightpanel/commonrightpanel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/menus/commonrightpanel/commonrightpanel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL2NvbW1vbnJpZ2h0cGFuZWwvY29tbW9ucmlnaHRwYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menus/commonrightpanel/commonrightpanel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/menus/commonrightpanel/commonrightpanel.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommonrightpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonrightpanelComponent", function() { return CommonrightpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonrightpanelComponent = /** @class */ (function () {
    function CommonrightpanelComponent() {
    }
    CommonrightpanelComponent.prototype.ngOnInit = function () {
    };
    CommonrightpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commonrightpanel',
            template: __webpack_require__(/*! ./commonrightpanel.component.html */ "./src/app/menus/commonrightpanel/commonrightpanel.component.html"),
            styles: [__webpack_require__(/*! ./commonrightpanel.component.scss */ "./src/app/menus/commonrightpanel/commonrightpanel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonrightpanelComponent);
    return CommonrightpanelComponent;
}());



/***/ }),

/***/ "./src/app/menus/editor/editor.component.html":
/*!****************************************************!*\
  !*** ./src/app/menus/editor/editor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 mt-3 text-right\">\n        <button class=\"btn btn-primary _bg-pink border-0\" (click)=\"addNewEditor()\">\n             <i class=\"fa fa-plus pr-1 _cp\" tooltip=\"Add new editor\" position=\"left\"></i> Add New\n        </button>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div *ngFor=\"let len of totalEditorSize\" class=\"col-12 col-md-6 col-lg-4\">\n        <div class=\"sample mt-3\">\n            <h5>Editor</h5>\n            <div [froalaEditor]=\"options\"></div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/menus/editor/editor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/menus/editor/editor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/menus/editor/editor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menus/editor/editor.component.ts ***!
  \**************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
        this.totalEditorSize = [];
        this.editorNumber = 0;
        this.options = {
            charCounterCount: true,
            toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.addNewEditor = function () {
        this.editorNumber++;
        this.totalEditorSize.push(this.editorNumber);
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/menus/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/menus/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/menus/graph/graph.component.html":
/*!**************************************************!*\
  !*** ./src/app/menus/graph/graph.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_wdc-100 pr-3 pl-3\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center mt-3\">\n            Under implementation\n        </div>\n        <div class=\"col-12 mt-3 text-center\">\n            <i class=\"fa fa-wrench _text-pink _fs-200\"></i>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/menus/graph/graph.component.scss":
/*!**************************************************!*\
  !*** ./src/app/menus/graph/graph.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menus/graph/graph.component.ts":
/*!************************************************!*\
  !*** ./src/app/menus/graph/graph.component.ts ***!
  \************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphComponent = /** @class */ (function () {
    function GraphComponent() {
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/menus/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.scss */ "./src/app/menus/graph/graph.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/menus/menus-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menus/menus-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MenusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusRoutingModule", function() { return MenusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all/all.component */ "./src/app/menus/all/all.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ "./src/app/menus/board/board.component.ts");
/* harmony import */ var _commonrightpanel_commonrightpanel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commonrightpanel/commonrightpanel.component */ "./src/app/menus/commonrightpanel/commonrightpanel.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/menus/graph/graph.component.ts");
/* harmony import */ var _recent_recent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recent/recent.component */ "./src/app/menus/recent/recent.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/menus/editor/editor.component.ts");









var routes = [{
        path: "all",
        component: _all_all_component__WEBPACK_IMPORTED_MODULE_3__["AllComponent"],
        children: [{
                path: "content/we",
                component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"]
            },
            {
                path: "content/woe",
                component: _commonrightpanel_commonrightpanel_component__WEBPACK_IMPORTED_MODULE_5__["CommonrightpanelComponent"]
            }]
    },
    {
        path: "board",
        component: _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"],
    },
    {
        path: "graph",
        component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__["GraphComponent"],
    },
    {
        path: "recent",
        component: _recent_recent_component__WEBPACK_IMPORTED_MODULE_7__["RecentComponent"],
    }];
var MenusRoutingModule = /** @class */ (function () {
    function MenusRoutingModule() {
    }
    MenusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MenusRoutingModule);
    return MenusRoutingModule;
}());



/***/ }),

/***/ "./src/app/menus/menus.module.ts":
/*!***************************************!*\
  !*** ./src/app/menus/menus.module.ts ***!
  \***************************************/
/*! exports provided: MenusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusModule", function() { return MenusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus-routing.module */ "./src/app/menus/menus-routing.module.ts");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all/all.component */ "./src/app/menus/all/all.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/menus/board/board.component.ts");
/* harmony import */ var _commonrightpanel_commonrightpanel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commonrightpanel/commonrightpanel.component */ "./src/app/menus/commonrightpanel/commonrightpanel.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/menus/graph/graph.component.ts");
/* harmony import */ var _recent_recent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recent/recent.component */ "./src/app/menus/recent/recent.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/menus/editor/editor.component.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");













var MenusModule = /** @class */ (function () {
    function MenusModule() {
    }
    MenusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _all_all_component__WEBPACK_IMPORTED_MODULE_4__["AllComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"], _commonrightpanel_commonrightpanel_component__WEBPACK_IMPORTED_MODULE_6__["CommonrightpanelComponent"],
                _graph_graph_component__WEBPACK_IMPORTED_MODULE_7__["GraphComponent"], _recent_recent_component__WEBPACK_IMPORTED_MODULE_8__["RecentComponent"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _menus_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenusRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaViewModule"].forRoot()
            ]
        })
    ], MenusModule);
    return MenusModule;
}());



/***/ }),

/***/ "./src/app/menus/recent/recent.component.html":
/*!****************************************************!*\
  !*** ./src/app/menus/recent/recent.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_wdc-100 pr-3 pl-3\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center mt-3\">\n            Under implementation\n        </div>\n        <div class=\"col-12 mt-3 text-center\">\n            <i class=\"fa fa-wrench _text-pink _fs-200\"></i>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/menus/recent/recent.component.scss":
/*!****************************************************!*\
  !*** ./src/app/menus/recent/recent.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL3JlY2VudC9yZWNlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/menus/recent/recent.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menus/recent/recent.component.ts ***!
  \**************************************************/
/*! exports provided: RecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function() { return RecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecentComponent = /** @class */ (function () {
    function RecentComponent() {
    }
    RecentComponent.prototype.ngOnInit = function () {
    };
    RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent',
            template: __webpack_require__(/*! ./recent.component.html */ "./src/app/menus/recent/recent.component.html"),
            styles: [__webpack_require__(/*! ./recent.component.scss */ "./src/app/menus/recent/recent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecentComponent);
    return RecentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sunil/eclipse-workspace/editor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map