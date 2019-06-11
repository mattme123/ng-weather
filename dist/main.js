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

/***/ "./src/app/_components/_pages/details-page/details-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/_components/_pages/details-page/details-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 d-flex justify-content-start\">\r\n      <div class=\"back\" [routerLink]=\"['/home']\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-2 d-flex justify-content-end\">\r\n      <div (click)='leftBig()' class='leftArrow big'></div>\r\n    </div>\r\n    <div class=\"col-8 d-flex justify-content-center\">\r\n      <weather-current-location></weather-current-location>\r\n    </div>\r\n    <div class=\"col-2 d-flex justify-content-start\">\r\n      <div (click)='rightBig()' class='rightArrow big'></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col d-flex justify-content-end\">\r\n      <div *ngIf='left' (click)='leftSmall()' class='leftArrow small'></div>\r\n    </div>\r\n    <div class=\"col-8 d-flex justify-content-center\">\r\n      <weather-day-details></weather-day-details>\r\n    </div>\r\n    <div class=\"col d-flex justify-content-start\">\r\n      <div *ngIf='right' (click)='rightSmall()' class='rightArrow small'></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_pages/details-page/details-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/_components/_pages/details-page/details-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftArrow.big, .rightArrow.big, .leftArrow.small, .rightArrow.small, .back {\n  cursor: pointer; }\n\n.leftArrow.big, .rightArrow.big {\n  background-size: 8em;\n  width: 8em;\n  height: 8em;\n  margin-top: 2em; }\n\n.leftArrow.small, .rightArrow.small, .back {\n  background-size: 5em;\n  width: 5em;\n  height: 5em;\n  margin-top: 1em;\n  margin-left: 1em; }\n\n.leftArrow {\n  background-image: url('keyboard-left-arrow-button.png');\n  background-repeat: no-repeat; }\n\n.leftArrow.small {\n    margin-top: 22vh; }\n\n.rightArrow {\n  background-image: url('keyboard-right-arrow-button.png');\n  background-repeat: no-repeat; }\n\n.rightArrow.small {\n    margin-top: 22vh; }\n\n.back {\n  background-image: url('back.svg');\n  background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3BhZ2VzL2RldGFpbHMtcGFnZS9DOlxcVXNlcnNcXE1hdHRoZXdcXERlc2t0b3BcXG5nLXdlYXRoZXIvc3JjXFxhcHBcXF9jb21wb25lbnRzXFxfcGFnZXNcXGRldGFpbHMtcGFnZVxcZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsdURBQThFO0VBQzlFLDRCQUE0QixFQUFBOztBQUY5QjtJQVNJLGdCQUFnQixFQUFBOztBQUtwQjtFQUNFLHdEQUErRTtFQUMvRSw0QkFBNEIsRUFBQTs7QUFGOUI7SUFTSSxnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDRSxpQ0FBd0Q7RUFDeEQsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9fcGFnZXMvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVwb2ludCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4lYiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA4ZW07XHJcbiAgd2lkdGg6IDhlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgQGV4dGVuZCAlcG9pbnQ7XHJcbn1cclxuXHJcbiVzIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDVlbTtcclxuICB3aWR0aDogNWVtO1xyXG4gIGhlaWdodDogNWVtO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIEBleHRlbmQgJXBvaW50O1xyXG59XHJcblxyXG4ubGVmdEFycm93IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2tleWJvYXJkLWxlZnQtYXJyb3ctYnV0dG9uLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgJi5iaWcge1xyXG4gICAgQGV4dGVuZCAlYjtcclxuICB9XHJcblxyXG4gICYuc21hbGwge1xyXG4gICAgbWFyZ2luLXRvcDogMjJ2aDtcclxuICAgIEBleHRlbmQgJXM7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHRBcnJvdyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9rZXlib2FyZC1yaWdodC1hcnJvdy1idXR0b24ucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAmLmJpZyB7XHJcbiAgICBAZXh0ZW5kICViO1xyXG4gIH1cclxuXHJcbiAgJi5zbWFsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnZoO1xyXG4gICAgQGV4dGVuZCAlcztcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2JhY2suc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIEBleHRlbmQgJXM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_components/_pages/details-page/details-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/_components/_pages/details-page/details-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/location.service */ "./src/app/_services/location.service.ts");



var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(location$) {
        this.location$ = location$;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location$.$left
            .subscribe(function (res) {
            _this.left = res;
        });
        this.location$.$right
            .subscribe(function (res) {
            _this.right = res;
        });
    };
    DetailsPageComponent.prototype.leftBig = function () {
        this.location$.previousLocation();
    };
    DetailsPageComponent.prototype.rightBig = function () {
        this.location$.nextLocation();
    };
    DetailsPageComponent.prototype.leftSmall = function () {
        this.location$.previousDay();
    };
    DetailsPageComponent.prototype.rightSmall = function () {
        this.location$.nextDay();
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/_components/_pages/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.scss */ "./src/app/_components/_pages/details-page/details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/_components/_pages/home-page/home-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/_components/_pages/home-page/home-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1 class='text-center'>\r\n        Current Location\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <weather-current-location-geo></weather-current-location-geo>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" id='itemRow'>\r\n    <div *ngFor='let location of location$.locations; index as i' class=\"col-4 mt-3\">\r\n      <weather-stored-location [image]='img' [id]='i' [title]='location.name'\r\n        [degree]='location.temp'>\r\n      </weather-stored-location>\r\n    </div>\r\n  </div>\r\n  <div *ngIf='!add && !listFull' class=\"row mt-4\">\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <div (click)='changeAdd()' id='add'></div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf='add && !listFull' class='row mt-4'>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-2 d-flex justify-content-center\">\r\n      <input [(ngModel)]='t' type=\"text\" class=\"form-control\" id='ipt' placeholder=\"Add City\">\r\n    </div>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <button (click)='changeAdd()' type='button' class='btn btn-danger mr-1 mt-2'>Cancel</button>\r\n      <button (click)='addItem()' type='button' class='btn btn-success ml-1 mt-2'>Add</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_pages/home-page/home-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/_components/_pages/home-page/home-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 4em;\n  color: white;\n  font-weight: 600; }\n\n#itemRow {\n  margin-left: 10vw;\n  margin-right: 10vw;\n  margin-top: 2vh; }\n\n#add {\n  background-image: url('add.svg');\n  width: 5em;\n  height: 5em;\n  cursor: pointer; }\n\nbutton {\n  width: 5.5em; }\n\n.red-border {\n  border-color: red; }\n\n.black-border {\n  border-color: black; }\n\n.shake {\n  visibility: visible !important;\n  animation-iteration-count: 1;\n  animation-timing-function: ease;\n  animation-duration: 0.4s;\n  animation-name: shake;\n  -webkit-animation-name: shake;\n  -webkit-animation-duration: 0.4s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-iteration-count: 1; }\n\n@keyframes shake {\n  0%,\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  16%,\n  50%,\n  83% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  33%,\n  66% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); } }\n\n@-webkit-keyframes shake {\n  0%,\n  100% {\n    -webkit-transform: translateX(0); }\n  16%,\n  50%,\n  83% {\n    -webkit-transform: translateX(-10px); }\n  33%,\n  66% {\n    -webkit-transform: translateX(10px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3BhZ2VzL2hvbWUtcGFnZS9DOlxcVXNlcnNcXE1hdHRoZXdcXERlc2t0b3BcXG5nLXdlYXRoZXIvc3JjXFxhcHBcXF9jb21wb25lbnRzXFxfcGFnZXNcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQ0FBdUQ7RUFDdkQsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2QyxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRTs7SUFFRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7RUFFMUI7OztJQUdFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU5Qjs7SUFFRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUEsRUFBQTs7QUFHL0I7RUFDRTs7SUFFRSxnQ0FBZ0MsRUFBQTtFQUVsQzs7O0lBR0Usb0NBQW9DLEVBQUE7RUFFdEM7O0lBRUUsbUNBQW1DLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL19wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jaXRlbVJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuI2FkZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hZGQuc3ZnKTtcclxuICB3aWR0aDogNWVtO1xyXG4gIGhlaWdodDogNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogNS41ZW07XHJcbn1cclxuXHJcbi5yZWQtYm9yZGVyIHtcclxuICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJsYWNrLWJvcmRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNoYWtlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tbmFtZTogc2hha2U7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2U7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgMTYlLFxyXG4gIDUwJSxcclxuICA4MyUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICB9XHJcbiAgMzMlLFxyXG4gIDY2JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbiAgMTYlLFxyXG4gIDUwJSxcclxuICA4MyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gIH1cclxuICAzMyUsXHJcbiAgNjYlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_components/_pages/home-page/home-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_components/_pages/home-page/home-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/location.service */ "./src/app/_services/location.service.ts");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(api$, location$) {
        this.api$ = api$;
        this.location$ = location$;
        this.ok = false;
        this.t = '';
        this.img = '../../../../assets/photos/home.jpg';
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.add = false;
        this.location$.$listFull
            .subscribe(function (res) {
            _this.listFull = res;
        });
    };
    HomePageComponent.prototype.changeAdd = function () {
        this.add = !this.add;
    };
    HomePageComponent.prototype.addItem = function () {
        var ipt = document.getElementById('ipt');
        if (this.validateString(this.t)) {
            this.api$.addLocation(this.t);
            ipt.className = 'form-control black-border';
            this.changeAdd();
            if (this.location$.locations.length === 8) {
                this.location$.$listFull.next(true);
            }
            else {
                this.location$.$listFull.next(false);
            }
        }
        else {
            ipt.className = 'form-control red-border shake';
            setTimeout(function () {
                ipt.className = 'form-control red-border';
            }, 500);
        }
    };
    HomePageComponent.prototype.validateString = function (inputTxt) {
        var letters = /^[a-zA-Z0-9]+$/;
        if (inputTxt.match(letters) && Number(inputTxt) && inputTxt.length === 5) {
            return true;
        }
        else {
            return false;
        }
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/_components/_pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/_components/_pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/current-location-geo/current-location-geo.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/_components/_shared/current-location-geo/current-location-geo.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='border-mine' [style.background-image]=\"'url(' + image + ')'\">\r\n  <div *ngIf='loaded' class=\"row pt-1\">\r\n    <div class=\"col-12\">\r\n      <h1 class='text-center'>\r\n        {{loc}}\r\n      </h1>\r\n      <h1 class='text-center mt-4'>\r\n        {{temp}}º\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf='!loaded' class=\"row pt-4\">\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <div class=\"loader\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_shared/current-location-geo/current-location-geo.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/_components/_shared/current-location-geo/current-location-geo.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#border-mine {\n  background-color: rgba(255, 255, 255, 0.605);\n  height: 12em;\n  width: 65vw;\n  border-radius: 40px;\n  background-position-y: 20%; }\n\nh1 {\n  color: white;\n  font-size: 4vw; }\n\n.loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9jdXJyZW50LWxvY2F0aW9uLWdlby9DOlxcVXNlcnNcXE1hdHRoZXdcXERlc2t0b3BcXG5nLXdlYXRoZXIvc3JjXFxhcHBcXF9jb21wb25lbnRzXFxfc2hhcmVkXFxjdXJyZW50LWxvY2F0aW9uLWdlb1xcY3VycmVudC1sb2NhdGlvbi1nZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSwwQkFBMEI7RUFBRSxlQUFBO0VBQzVCLDhCQUE4QjtFQUFFLFNBQUE7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQW9DO1VBQXBDLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL19zaGFyZWQvY3VycmVudC1sb2NhdGlvbi1nZW8vY3VycmVudC1sb2NhdGlvbi1nZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9yZGVyLW1pbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDUpO1xyXG4gIGhlaWdodDogMTJlbTtcclxuICB3aWR0aDogNjV2dztcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMjAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_components/_shared/current-location-geo/current-location-geo.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/_components/_shared/current-location-geo/current-location-geo.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CurrentLocationGeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLocationGeoComponent", function() { return CurrentLocationGeoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/api.service */ "./src/app/_services/api.service.ts");



var CurrentLocationGeoComponent = /** @class */ (function () {
    function CurrentLocationGeoComponent(api$) {
        this.api$ = api$;
        this.loaded = false;
    }
    CurrentLocationGeoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocation();
        setTimeout(function () {
            if (!_this.loaded) {
                _this.temp = 'Location not found';
                _this.loaded = true;
            }
        }, 10000);
    };
    CurrentLocationGeoComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.showPosition(position.coords);
            });
        }
        else {
            this.temp = 'Location not found';
            this.loaded = true;
        }
    };
    CurrentLocationGeoComponent.prototype.showPosition = function (position) {
        var _this = this;
        this.api$.currentLocationHttpGet(position.latitude, position.longitude)
            .subscribe(function (res) {
            _this.loc = res.name;
            _this.temp = res.main.temp.toFixed(0);
            _this.loaded = true;
        }, function (err) {
            _this.temp = 'Location not found';
            _this.loaded = true;
        });
    };
    CurrentLocationGeoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-current-location-geo',
            template: __webpack_require__(/*! ./current-location-geo.component.html */ "./src/app/_components/_shared/current-location-geo/current-location-geo.component.html"),
            styles: [__webpack_require__(/*! ./current-location-geo.component.scss */ "./src/app/_components/_shared/current-location-geo/current-location-geo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CurrentLocationGeoComponent);
    return CurrentLocationGeoComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/current-location/current-location.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/_components/_shared/current-location/current-location.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='border-mine' [style.background-image]=\"'url(' + image + ')'\">\r\n  <div class=\"row pt-1\">\r\n    <div class=\"col-12\">\r\n      <h1 class='text-center'>\r\n        {{location.name}}\r\n      </h1>\r\n      <h1 class='text-center mt-4'>\r\n        {{location.temp}}º\r\n      </h1>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_shared/current-location/current-location.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/_components/_shared/current-location/current-location.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#border-mine {\n  background-color: rgba(255, 255, 255, 0.605);\n  height: 12em;\n  width: 65vw;\n  border-radius: 40px;\n  background-position-y: 20%; }\n\nh1 {\n  color: white;\n  font-size: 4vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9jdXJyZW50LWxvY2F0aW9uL0M6XFxVc2Vyc1xcTWF0dGhld1xcRGVza3RvcFxcbmctd2VhdGhlci9zcmNcXGFwcFxcX2NvbXBvbmVudHNcXF9zaGFyZWRcXGN1cnJlbnQtbG9jYXRpb25cXGN1cnJlbnQtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL19zaGFyZWQvY3VycmVudC1sb2NhdGlvbi9jdXJyZW50LWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvcmRlci1taW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjA1KTtcclxuICBoZWlnaHQ6IDEyZW07XHJcbiAgd2lkdGg6IDY1dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDIwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDR2dztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_components/_shared/current-location/current-location.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/_components/_shared/current-location/current-location.component.ts ***!
  \************************************************************************************/
/*! exports provided: CurrentLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLocationComponent", function() { return CurrentLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/location.service */ "./src/app/_services/location.service.ts");



var CurrentLocationComponent = /** @class */ (function () {
    function CurrentLocationComponent(location$) {
        this.location$ = location$;
        this.i = 0;
    }
    CurrentLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location$.$selectedLocation
            .subscribe(function (res) {
            _this.location = res;
        }, function (err) {
            console.log(err);
            alert("HTTP GET ERROR - " + err.error.cod + " - " + err.error.message);
        });
    };
    CurrentLocationComponent.prototype.nextLocation = function () {
        this.location = this.location[this.i++];
    };
    CurrentLocationComponent.prototype.previousLocation = function () {
        this.location = this.location[this.i--];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CurrentLocationComponent.prototype, "image", void 0);
    CurrentLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-current-location',
            template: __webpack_require__(/*! ./current-location.component.html */ "./src/app/_components/_shared/current-location/current-location.component.html"),
            styles: [__webpack_require__(/*! ./current-location.component.scss */ "./src/app/_components/_shared/current-location/current-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]])
    ], CurrentLocationComponent);
    return CurrentLocationComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/day-details/day-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_components/_shared/day-details/day-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-5 d-flex justify-content-center\">\r\n      <h1 *ngIf='loaded1'>\r\n        {{eight.date}}\r\n      </h1>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <h1 *ngIf='loaded2' class='noBold'>\r\n        {{twelve.summary}}\r\n      </h1>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <h1 class='noBold'>\r\n        {{high}}º/{{low}}º\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-3\">\r\n    <div *ngIf='loaded1' class=\"col-4 d-flex justify-content-center\">\r\n      <weather-hour-details [temp]='eight.temp' [time]='eight.time' [sufix]='a' [clouds]='eight.clouds'\r\n        [summary]='eight.summary'>\r\n      </weather-hour-details>\r\n    </div>\r\n    <div *ngIf='loaded2' class=\"col-4 d-flex justify-content-center\">\r\n      <weather-hour-details [temp]='twelve.temp' [time]='twelve.time' [sufix]='p' [clouds]='twelve.clouds'\r\n        [summary]='twelve.summary'>\r\n      </weather-hour-details>\r\n    </div>\r\n    <div *ngIf='loaded3' class=\"col-4 d-flex justify-content-center\">\r\n      <weather-hour-details [temp]='pm.temp' [time]='pm.time' [sufix]='p' [clouds]='pm.clouds' [summary]='pm.summary'>\r\n      </weather-hour-details>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-1\">\r\n    <div class=\"col d-flex justify-content-center\">\r\n      <h3 *ngIf='loaded2' class=\"noBold\">\r\n        Wind Speed: {{twelve.windSpeed}}mph\r\n      </h3>\r\n    </div>\r\n    <div class=\"col d-flex justify-content-center\">\r\n      <h3 *ngIf='loaded2' class=\"noBold\">\r\n        Direction: {{twelve.windDirection}}\r\n      </h3>\r\n    </div>\r\n    <div class=\"col d-flex justify-content-center\">\r\n      <h3 *ngIf='loaded2' class=\"noBold\">\r\n        Humidity: {{twelve.humitidy}}%\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-1\">\r\n    <div class=\"col-12\">\r\n      <h3 *ngIf='loaded2' class=\"text-center noBold\">\r\n        Conditions: {{twelve.description}}\r\n      </h3>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_shared/day-details/day-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/_components/_shared/day-details/day-details.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 3em;\n  background-color: rgba(255, 255, 255, 0.543);\n  height: 45vh;\n  width: 55vw;\n  border-radius: 50px;\n  border-color: black;\n  border-width: 0.075em;\n  border-style: solid; }\n\n.noBold {\n  font-weight: 300; }\n\nh2 {\n  font-size: 4vh; }\n\nh1 {\n  font-size: 4vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9kYXktZGV0YWlscy9DOlxcVXNlcnNcXE1hdHRoZXdcXERlc2t0b3BcXG5nLXdlYXRoZXIvc3JjXFxhcHBcXF9jb21wb25lbnRzXFxfc2hhcmVkXFxkYXktZGV0YWlsc1xcZGF5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsNENBQTRDO0VBQzVDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL19zaGFyZWQvZGF5LWRldGFpbHMvZGF5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0Myk7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG4gIHdpZHRoOiA1NXZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDAuMDc1ZW07XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLm5vQm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/_components/_shared/day-details/day-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_components/_shared/day-details/day-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: DayDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayDetailsComponent", function() { return DayDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/location.service */ "./src/app/_services/location.service.ts");



var DayDetailsComponent = /** @class */ (function () {
    function DayDetailsComponent(location$) {
        this.location$ = location$;
        this.loaded1 = false;
        this.loaded2 = false;
        this.loaded3 = false;
        this.day1L = 1000;
        this.day1H = 0;
        this.day2L = 1000;
        this.day2H = 0;
        this.day3L = 1000;
        this.day3H = 0;
        this.day4L = 1000;
        this.day4H = 0;
        this.a = 'am';
        this.p = 'pm';
    }
    DayDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location$.$selectedLocation
            .subscribe(function (res) {
            _this.location = res;
            _this.resetHighAndLow();
            for (var i = 0; i < _this.location.forcast.length; i++) {
                if (i < 8 && _this.location.forcast[i].tempMax > _this.day1H) {
                    _this.day1H = _this.location.forcast[i].tempMax;
                }
                else if (i > 7 && i < 16 && _this.location.forcast[i].tempMax > _this.day2H) {
                    _this.day2H = _this.location.forcast[i].tempMax;
                }
                else if (i > 15 && i < 24 && _this.location.forcast[i].tempMax > _this.day3H) {
                    _this.day3H = _this.location.forcast[i].tempMax;
                }
                else if (i > 23 && _this.location.forcast[i].tempMax > _this.day4H) {
                    _this.day4H = _this.location.forcast[i].tempMax;
                }
                if (i < 8 && _this.location.forcast[i].tempMin < _this.day1L) {
                    _this.day1L = _this.location.forcast[i].tempMin;
                }
                else if (i > 7 && i < 16 && _this.location.forcast[i].tempMin < _this.day2L) {
                    _this.day2L = _this.location.forcast[i].tempMin;
                }
                else if (i > 15 && i < 24 && _this.location.forcast[i].tempMin < _this.day3L) {
                    _this.day3L = _this.location.forcast[i].tempMin;
                }
                else if (i > 23 && _this.location.forcast[i].tempMin < _this.day4L) {
                    _this.day4L = _this.location.forcast[i].tempMin;
                }
            }
            setTimeout(function () {
                _this.next();
            }, 300);
        }, function (err) {
            console.log(err);
            alert("HTTP GET ERROR - " + err.error.cod + " - " + err.error.message);
        });
    };
    DayDetailsComponent.prototype.next = function () {
        var _this = this;
        this.location$.$eightHour
            .subscribe(function (res) {
            _this.eight = _this.location.forcast[res];
            if (res === 2) {
                _this.high = _this.day1H;
                _this.low = _this.day1L;
            }
            else if (res === 10) {
                _this.high = _this.day2H;
                _this.low = _this.day2L;
            }
            else if (res === 18) {
                _this.high = _this.day3H;
                _this.low = _this.day3L;
            }
            else if (res === 26) {
                _this.high = _this.day4H;
                _this.low = _this.day4L;
            }
            _this.loaded1 = true;
        }, function (err) {
            console.log(err);
            alert("HTTP GET ERROR - " + err.error.cod + " - " + err.error.message);
        });
        this.location$.$twelveHour
            .subscribe(function (res) {
            _this.twelve = _this.location.forcast[res];
            _this.loaded2 = true;
        }, function (err) {
            console.log(err);
            alert("HTTP GET ERROR - " + err.error.cod + " - " + err.error.message);
        });
        this.location$.$pmHour
            .subscribe(function (res) {
            _this.pm = _this.location.forcast[res];
            _this.loaded3 = true;
        }, function (err) {
            console.log(err);
            alert("HTTP GET ERROR - " + err.error.cod + " - " + err.error.message);
        });
    };
    DayDetailsComponent.prototype.resetHighAndLow = function () {
        this.day1L = 1000;
        this.day1H = 0;
        this.day2L = 1000;
        this.day2H = 0;
        this.day3L = 1000;
        this.day3H = 0;
        this.day4L = 1000;
        this.day4H = 0;
        this.high = 0;
        this.low = 0;
    };
    DayDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-day-details',
            template: __webpack_require__(/*! ./day-details.component.html */ "./src/app/_components/_shared/day-details/day-details.component.html"),
            styles: [__webpack_require__(/*! ./day-details.component.scss */ "./src/app/_components/_shared/day-details/day-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]])
    ], DayDetailsComponent);
    return DayDetailsComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/green-button/green-button.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/_components/_shared/green-button/green-button.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [routerLink]='rout' class='btn btn-success'>{{text}}</button>"

/***/ }),

/***/ "./src/app/_components/_shared/green-button/green-button.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/_components/_shared/green-button/green-button.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  width: 6em;\n  font-size: 2em;\n  font-weight: 600;\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9ncmVlbi1idXR0b24vQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxuZy13ZWF0aGVyL3NyY1xcYXBwXFxfY29tcG9uZW50c1xcX3NoYXJlZFxcZ3JlZW4tYnV0dG9uXFxncmVlbi1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL19zaGFyZWQvZ3JlZW4tYnV0dG9uL2dyZWVuLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgd2lkdGg6IDZlbTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_components/_shared/green-button/green-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/_components/_shared/green-button/green-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: GreenButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenButtonComponent", function() { return GreenButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GreenButtonComponent = /** @class */ (function () {
    function GreenButtonComponent() {
    }
    GreenButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GreenButtonComponent.prototype, "rout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GreenButtonComponent.prototype, "text", void 0);
    GreenButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-green-button',
            template: __webpack_require__(/*! ./green-button.component.html */ "./src/app/_components/_shared/green-button/green-button.component.html"),
            styles: [__webpack_require__(/*! ./green-button.component.scss */ "./src/app/_components/_shared/green-button/green-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GreenButtonComponent);
    return GreenButtonComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/hour-details/hour-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/_components/_shared/hour-details/hour-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h2 class='text-center'>\r\n        {{time}}{{sufix}}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <div id='img' class='img'></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h2 class='text-center'>\r\n        {{temp}}º\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_shared/hour-details/hour-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/_components/_shared/hour-details/hour-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  border-style: solid;\n  border-color: black;\n  border-width: 0.075em;\n  width: 10vw; }\n\nimg {\n  height: 10vh; }\n\nh2 {\n  font-size: 4vh; }\n\n.sunny {\n  background-image: url('sunny.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 5vw;\n  height: 10vh; }\n\n.partly-cloudy {\n  background-image: url('mostlyCloudy.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 5vw;\n  height: 10vh; }\n\n.mostly-cloudy {\n  background-image: url('cloudy.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 5vw;\n  height: 10vh; }\n\n.rain {\n  background-image: url('rain.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 5vw;\n  height: 10vh; }\n\n.snow {\n  background-image: url('snow.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 5vw;\n  height: 10vh; }\n\n.mist {\n  background-image: url('mist.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 5vw;\n  height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9ob3VyLWRldGFpbHMvQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxuZy13ZWF0aGVyL3NyY1xcYXBwXFxfY29tcG9uZW50c1xcX3NoYXJlZFxcaG91ci1kZXRhaWxzXFxob3VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0NBQXlEO0VBQ3pELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlDQUFnRTtFQUNoRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQ0FBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUNBQXdEO0VBQ3hELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQ0FBd0Q7RUFDeEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9ob3VyLWRldGFpbHMvaG91ci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMC4wNzVlbTtcclxuICB3aWR0aDogMTB2dztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuLnN1bm55IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL3N1bm55LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiA1dnc7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4ucGFydGx5LWNsb3VkeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9tb3N0bHlDbG91ZHkucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDV2dztcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbi5tb3N0bHktY2xvdWR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Nsb3VkeS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogNXZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLnJhaW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvcmFpbi5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogNXZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLnNub3cge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvc25vdy5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogNXZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLm1pc3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvbWlzdC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogNXZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_components/_shared/hour-details/hour-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/_components/_shared/hour-details/hour-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: HourDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourDetailsComponent", function() { return HourDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HourDetailsComponent = /** @class */ (function () {
    function HourDetailsComponent() {
    }
    HourDetailsComponent.prototype.ngOnInit = function () {
        if (this.time === 14) {
            this.time = 2;
        }
        else if (this.time === 20) {
            this.time = 8;
        }
    };
    HourDetailsComponent.prototype.ngOnChanges = function () {
        var img = document.getElementsByClassName('img');
        /*    img[0].className = 'img sunny';
           img[1].className = 'img sunny';
           img[2].className = 'img sunny'; */
        if (this.time === 14) {
            this.time = 2;
        }
        else if (this.time === 20) {
            this.time = 8;
        }
        if (this.summary === 'rain') {
            setIcons('rain');
        }
        else if (this.summary === 'snow') {
            setIcons('snow');
        }
        else if (this.summary === 'clouds') {
            setIcons('clouds');
        }
        else if (this.summary === 'mist') {
            setIcons('mist');
        }
        else if (this.clouds > 70) {
            setIcons('mostly-cloudy');
        }
        else if (this.clouds > 30) {
            setIcons('partly-cloudy');
        }
        else {
            setIcons('sunny');
        }
        function setIcons(condition) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < img.length; i++) {
                img[i].className = "img " + condition;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HourDetailsComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HourDetailsComponent.prototype, "temp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HourDetailsComponent.prototype, "sufix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HourDetailsComponent.prototype, "summary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HourDetailsComponent.prototype, "clouds", void 0);
    HourDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-hour-details',
            template: __webpack_require__(/*! ./hour-details.component.html */ "./src/app/_components/_shared/hour-details/hour-details.component.html"),
            styles: [__webpack_require__(/*! ./hour-details.component.scss */ "./src/app/_components/_shared/hour-details/hour-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HourDetailsComponent);
    return HourDetailsComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/input/input.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/_shared/input/input.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <input type=\"text\" class=\"form-control\" placeholder=\"Add City\">\r\n</form>"

/***/ }),

/***/ "./src/app/_components/_shared/input/input.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/_components/_shared/input/input.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border-radius: 5px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9pbnB1dC9DOlxcVXNlcnNcXE1hdHRoZXdcXERlc2t0b3BcXG5nLXdlYXRoZXIvc3JjXFxhcHBcXF9jb21wb25lbnRzXFxfc2hhcmVkXFxpbnB1dFxcaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9fc2hhcmVkL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_components/_shared/input/input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/_shared/input/input.component.ts ***!
  \**************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/_components/_shared/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/_components/_shared/input/input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/stored-location/stored-location.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/_components/_shared/stored-location/stored-location.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid bg' (click)='weatherClicked($event)' [style.background-image]=\"'url(' + image + ')'\" id={{id}}>\r\n  <div class=\"row\" id={{id}}>\r\n    <div class=\"col-1\" id={{id}}>\r\n      <div (click)='delete($event)' class='delete text-center' id={{id}}></div>\r\n    </div>\r\n    <div class=\"col-8 point\" id={{id}}>\r\n      <h1 class='d-flex justify-content-start text' id={{id}}>\r\n        {{title}}\r\n      </h1>\r\n    </div>\r\n    <div class=\"col-1 point\" id={{id}}> </div>\r\n    <div class=\"col-1 point\" id={{id}}>\r\n      <h1 class='d-flex justify-content-end deg text' id={{id}}>\r\n        {{degree}}º\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/_components/_shared/stored-location/stored-location.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/_components/_shared/stored-location/stored-location.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg:hover .delete, .point {\n  cursor: pointer; }\n\n.bg {\n  height: 10vh;\n  width: 25vw;\n  background-color: white;\n  border-radius: 50px; }\n\n.bg:hover .delete {\n  background-color: red;\n  height: 2em;\n  width: 2em;\n  border-radius: 50px;\n  font-size: 1em;\n  font-weight: 600;\n  padding-top: 0.18em; }\n\n.bg:hover .delete:before {\n  content: \"X\"; }\n\n.text {\n  margin-top: 2.25vh;\n  color: white; }\n\nh1 {\n  font-size: 2vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvX3NoYXJlZC9zdG9yZWQtbG9jYXRpb24vQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxuZy13ZWF0aGVyL3NyY1xcYXBwXFxfY29tcG9uZW50c1xcX3NoYXJlZFxcc3RvcmVkLWxvY2F0aW9uXFxzdG9yZWQtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUkscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBUnZCO0VBWUksWUFBWSxFQUFBOztBQUloQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBT2Q7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9fc2hhcmVkL3N0b3JlZC1sb2NhdGlvbi9zdG9yZWQtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlcG8ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJnIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmJnOmhvdmVyIHtcclxuICAuZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4xOGVtO1xyXG4gICAgQGV4dGVuZCAlcG87XHJcbiAgfVxyXG4gIC5kZWxldGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiWFwiO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi10b3A6IDIuMjV2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wb2ludCB7XHJcbiAgQGV4dGVuZCAlcG87XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/_components/_shared/stored-location/stored-location.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/_shared/stored-location/stored-location.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StoredLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredLocationComponent", function() { return StoredLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/location.service */ "./src/app/_services/location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StoredLocationComponent = /** @class */ (function () {
    function StoredLocationComponent(location$, router) {
        this.location$ = location$;
        this.router = router;
    }
    StoredLocationComponent.prototype.ngOnInit = function () {
    };
    StoredLocationComponent.prototype.delete = function (e) {
        this.location$.locations.splice(e.target.parentElement.parentElement.parentElement.id, 1);
        this.location$.$listFull.next(false);
    };
    StoredLocationComponent.prototype.weatherClicked = function (e) {
        this.location$.setLocation(e.target.id);
        this.router.navigate(['/details']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StoredLocationComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StoredLocationComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StoredLocationComponent.prototype, "degree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StoredLocationComponent.prototype, "image", void 0);
    StoredLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-stored-location',
            template: __webpack_require__(/*! ./stored-location.component.html */ "./src/app/_components/_shared/stored-location/stored-location.component.html"),
            styles: [__webpack_require__(/*! ./stored-location.component.scss */ "./src/app/_components/_shared/stored-location/stored-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StoredLocationComponent);
    return StoredLocationComponent;
}());



/***/ }),

/***/ "./src/app/_components/_shared/trash-location/trash-location.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/_shared/trash-location/trash-location.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  trash-location works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/_components/_shared/trash-location/trash-location.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/_shared/trash-location/trash-location.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL19zaGFyZWQvdHJhc2gtbG9jYXRpb24vdHJhc2gtbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/_shared/trash-location/trash-location.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_components/_shared/trash-location/trash-location.component.ts ***!
  \********************************************************************************/
/*! exports provided: TrashLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashLocationComponent", function() { return TrashLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrashLocationComponent = /** @class */ (function () {
    function TrashLocationComponent() {
    }
    TrashLocationComponent.prototype.ngOnInit = function () {
    };
    TrashLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-trash-location',
            template: __webpack_require__(/*! ./trash-location.component.html */ "./src/app/_components/_shared/trash-location/trash-location.component.html"),
            styles: [__webpack_require__(/*! ./trash-location.component.scss */ "./src/app/_components/_shared/trash-location/trash-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrashLocationComponent);
    return TrashLocationComponent;
}());



/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ "./src/app/_services/location.service.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http$, location$) {
        this.http$ = http$;
        this.location$ = location$;
        this.weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
        this.weatherURLZip = 'https://api.openweathermap.org/data/2.5/weather?zip=';
        this.weatherForcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=';
        this.locationCurrent = 'https://api.openweathermap.org/data/2.5/weather?';
        this.go = false;
        this.counter = 1;
        this.t = 1;
        this.tt = 1;
        this.apiKey = '&APPID=815a624a29a477de2d5976b087f93f21';
        this.tempObjReset();
        this.forcastTempObjReset();
    }
    ApiService.prototype.ngOnInit = function () { };
    ApiService.prototype.currentLocationHttpGet = function (lat, lon) {
        return this.http$.get(this.locationCurrent + "lat=" + lat + "&lon=" + lon + "&units=imperial" + this.apiKey);
    };
    ApiService.prototype.httpGet = function (url) {
        return this.http$.get(url);
    };
    ApiService.prototype.addLocation = function (url) {
        var _this = this;
        this.httpGet(this.weatherURLZip + url + this.apiKey)
            .subscribe(function (res) {
            _this.tempObj.clouds = res.clouds.all;
            var d = new Date();
            _this.tempObj.date = _this.convertDate(d.getDay() + 1);
            _this.tempObj.humitidy = res.main.humidity;
            _this.tempObj.temp = _this.convertTemp(res.main.temp);
            _this.tempObj.tempMin = _this.convertTemp(res.main.temp_min);
            _this.tempObj.tempMax = _this.convertTemp(res.main.temp_max);
            _this.tempObj.name = res.name;
            _this.tempObj.description = res.weather[0].main;
            _this.tempObj.windDirection = res.wind.deg;
            _this.tempObj.windSpeed = Number((res.wind.speed * 2.23694).toFixed(0));
            _this.httpGet(_this.weatherForcastURL + res.id + _this.apiKey).subscribe(function (secondRes) {
                for (var _i = 0, _a = secondRes.list; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (_this.convertTime(i.dt) > 2) {
                        _this.start = true;
                    }
                    if (_this.convertTime(i.dt) === 2 && _this.start) {
                        _this.go = true;
                    }
                    if (_this.go) {
                        _this.forcastTempObj.clouds = i.clouds.all;
                        _this.forcastTempObj.temp = _this.convertTemp(i.main.temp);
                        _this.forcastTempObj.time = _this.convertTime(i.dt);
                        _this.forcastTempObj.date = _this.convertDate(d.getDay() + _this.t);
                        _this.forcastTempObj.summary = i.weather[0].main;
                        _this.forcastTempObj.description = i.weather[0].description;
                        _this.forcastTempObj.windSpeed = Number((i.wind.speed * 2.23694).toFixed(0));
                        _this.forcastTempObj.windDirection = i.wind.deg;
                        _this.forcastTempObj.tempMin = _this.convertTemp(i.main.temp_min);
                        _this.forcastTempObj.tempMax = _this.convertTemp(i.main.temp_max);
                        _this.forcastTempObj.humitidy = i.main.humidity;
                        _this.tempObj.forcast.push(_this.forcastTempObj);
                        _this.forcastTempObjReset();
                        if (_this.tt === 8) {
                            _this.t++;
                            _this.tt = 1;
                        }
                        else {
                            _this.tt++;
                        }
                    }
                }
                _this.location$.locations.push(_this.tempObj);
                _this.tempObjReset();
                _this.start = false;
                _this.go = false;
                _this.t = 1;
                _this.tt = 1;
            });
        }, function (err) {
            alert('City Not Found');
            console.log("HTTP GET ERROR - " + err.error.cod + " - " + err.error.message);
        });
    };
    ApiService.prototype.tempObjReset = function () {
        this.tempObj = {
            clouds: 0,
            time: 0,
            humitidy: 0,
            temp: 0,
            tempMin: 0,
            tempMax: 0,
            name: '',
            description: '',
            windDirection: '',
            windSpeed: 0,
            forcast: []
        };
    };
    ApiService.prototype.forcastTempObjReset = function () {
        this.forcastTempObj = {
            temp: 0,
            clouds: 0,
            time: 0,
            summary: '',
            description: '',
            windSpeed: 0,
            windDirection: 0,
            tempMin: 0,
            tempMax: 0,
            humitidy: 0,
        };
    };
    ApiService.prototype.convertTemp = function (orig) {
        var temp = orig - 273.15;
        var temp2 = 9 / 5;
        temp = temp * temp2;
        return Number((temp + 32).toFixed(0));
    };
    ApiService.prototype.convertDate = function (inp) {
        var ans;
        switch (inp) {
            case 0:
                ans = 'Sunday';
                break;
            case 1:
                ans = 'Monday';
                break;
            case 2:
                ans = 'Tuesday';
                break;
            case 3:
                ans = 'Wednesday';
                break;
            case 4:
                ans = 'Thursday';
                break;
            case 5:
                ans = 'Friday';
                break;
            case 6:
                ans = 'Saturday';
                break;
        }
        return ans;
    };
    ApiService.prototype.convertTime = function (time) {
        var ddd = new Date(time * 1000);
        return ddd.getHours();
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/_services/location.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/location.service.ts ***!
  \***********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LocationService = /** @class */ (function () {
    function LocationService() {
        this.$i = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.$eightHour = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](2);
        this.$twelveHour = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](4);
        this.$pmHour = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](6);
        this.$selectedLocation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.$left = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.$right = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.$listFull = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.location = {};
        this.locations = [];
    }
    LocationService.prototype.ngOnInit = function () {
    };
    LocationService.prototype.setLocation = function (i) {
        this.$selectedLocation.next(this.locations[i]);
        this.$i.next(i);
        console.log(this.$i.value);
        this.resetDay();
    };
    LocationService.prototype.nextLocation = function () {
        var i = this.$i.value;
        console.log(Number(i) + 1);
        console.log(this.locations.length);
        if (Number(i) + 1 === this.locations.length) {
            this.$i.next(0);
            this.$selectedLocation.next(this.locations[0]);
        }
        else {
            this.$i.next(Number(i) + 1);
            this.$selectedLocation.next(this.locations[this.$i.value]);
        }
        this.resetDay();
    };
    LocationService.prototype.previousLocation = function () {
        var i = this.$i.value;
        if (Number(i) === 0) {
            this.$i.next(this.locations.length - 1);
            this.$selectedLocation.next(this.locations[this.$i.value]);
        }
        else {
            this.$i.next(Number(i) - 1);
            this.$selectedLocation.next(this.locations[this.$i.value]);
        }
        this.resetDay();
    };
    LocationService.prototype.nextDay = function () {
        console.log(this.$eightHour.value);
        if (this.$eightHour.value < 25) {
            var i = this.$eightHour.value;
            this.$eightHour.next(i + 8);
            var ii = this.$twelveHour.value;
            this.$twelveHour.next(ii + 8);
            var iii = this.$pmHour.value;
            this.$pmHour.next(iii + 8);
            this.$right.next(true);
            this.$left.next(true);
        }
        console.log(this.$eightHour.value);
        if (this.$eightHour.value === 26) {
            this.$right.next(false);
            this.$left.next(true);
        }
    };
    LocationService.prototype.previousDay = function () {
        if (this.$eightHour.value !== 2) {
            var i = this.$eightHour.value;
            this.$eightHour.next(i - 8);
            var ii = this.$twelveHour.value;
            this.$twelveHour.next(ii - 8);
            var iii = this.$pmHour.value;
            this.$pmHour.next(iii - 8);
            this.$left.next(true);
            this.$right.next(true);
        }
        if (this.$eightHour.value === 2) {
            this.$left.next(false);
            this.$right.next(true);
        }
    };
    LocationService.prototype.resetDay = function () {
        this.$eightHour.next(2);
        this.$twelveHour.next(4);
        this.$pmHour.next(6);
        this.$left.next(false);
        this.$right.next(true);
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



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
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/_pages/home-page/home-page.component */ "./src/app/_components/_pages/home-page/home-page.component.ts");
/* harmony import */ var _components_pages_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/_pages/details-page/details-page.component */ "./src/app/_components/_pages/details-page/details-page.component.ts");





var routes = [
    {
        path: 'details',
        component: _components_pages_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"]
    },
    {
        path: 'home',
        component: _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
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

module.exports = "<!-- <div class='bgImg'> -->\r\n\r\n<!-- </div> -->\r\n\r\n\r\n<video autoplay muted loop id=\"myVideo\">\r\n  <source src=\"assets/cloudsMoving.webm\" type=\"video/mp4\">\r\n</video>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgImg {\n  background-image: url('home.jpg');\n  background-size: cover;\n  background-position-y: 60%;\n  background-repeat: no-repeat;\n  height: 100vh; }\n\n#myVideo {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXR0aGV3XFxEZXNrdG9wXFxuZy13ZWF0aGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnSW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3Bob3Rvcy9ob21lLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDYwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTsgXHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufSJdfQ== */"

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
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngOnDestroy = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'weather-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_current_location_current_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/_shared/current-location/current-location.component */ "./src/app/_components/_shared/current-location/current-location.component.ts");
/* harmony import */ var _components_shared_stored_location_stored_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/_shared/stored-location/stored-location.component */ "./src/app/_components/_shared/stored-location/stored-location.component.ts");
/* harmony import */ var _components_shared_trash_location_trash_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/_shared/trash-location/trash-location.component */ "./src/app/_components/_shared/trash-location/trash-location.component.ts");
/* harmony import */ var _components_shared_green_button_green_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/_shared/green-button/green-button.component */ "./src/app/_components/_shared/green-button/green-button.component.ts");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/_pages/home-page/home-page.component */ "./src/app/_components/_pages/home-page/home-page.component.ts");
/* harmony import */ var _components_pages_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/_pages/details-page/details-page.component */ "./src/app/_components/_pages/details-page/details-page.component.ts");
/* harmony import */ var _components_shared_input_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/_shared/input/input.component */ "./src/app/_components/_shared/input/input.component.ts");
/* harmony import */ var _components_shared_day_details_day_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/_shared/day-details/day-details.component */ "./src/app/_components/_shared/day-details/day-details.component.ts");
/* harmony import */ var _components_shared_hour_details_hour_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/_shared/hour-details/hour-details.component */ "./src/app/_components/_shared/hour-details/hour-details.component.ts");
/* harmony import */ var _components_shared_current_location_geo_current_location_geo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/_shared/current-location-geo/current-location-geo.component */ "./src/app/_components/_shared/current-location-geo/current-location-geo.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_shared_current_location_current_location_component__WEBPACK_IMPORTED_MODULE_7__["CurrentLocationComponent"],
                _components_shared_stored_location_stored_location_component__WEBPACK_IMPORTED_MODULE_8__["StoredLocationComponent"],
                _components_shared_trash_location_trash_location_component__WEBPACK_IMPORTED_MODULE_9__["TrashLocationComponent"],
                _components_shared_green_button_green_button_component__WEBPACK_IMPORTED_MODULE_10__["GreenButtonComponent"],
                _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                _components_pages_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"],
                _components_shared_input_input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"],
                _components_shared_day_details_day_details_component__WEBPACK_IMPORTED_MODULE_14__["DayDetailsComponent"],
                _components_shared_hour_details_hour_details_component__WEBPACK_IMPORTED_MODULE_15__["HourDetailsComponent"],
                _components_shared_current_location_geo_current_location_geo_component__WEBPACK_IMPORTED_MODULE_16__["CurrentLocationGeoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\Users\Matthew\Desktop\ng-weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map