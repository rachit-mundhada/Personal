function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularMaterialModule
    });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularMaterialModule_Factory(t) {
        return new (t || AngularMaterialModule)();
      },
      providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"]],
      imports: [[_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"]], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
        imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"]],
        exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"]],
          exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"]],
          providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _student_student_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student/student-details.component */
    "./src/app/student/student-details.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _student_student_crud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student/student-crud.component */
    "./src/app/student/student-crud.component.ts");
    /* harmony import */


    var _student_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student/student-list.component */
    "./src/app/student/student-list.component.ts");
    /* harmony import */


    var _home_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/welcome.component */
    "./src/app/home/welcome.component.ts");
    /* harmony import */


    var _shared_student_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/student.guard */
    "./src/app/shared/student.guard.ts");
    /* harmony import */


    var _shared_student_edit_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/student-edit.guard */
    "./src/app/shared/student-edit.guard.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: 'studentList',
      component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"]
    }, {
      path: 'student/:id/edit',
      canDeactivate: [_shared_student_edit_guard__WEBPACK_IMPORTED_MODULE_8__["StudentEditGuard"]],
      component: _student_student_crud_component__WEBPACK_IMPORTED_MODULE_4__["StudentCRUDComponent"]
    }, {
      path: 'student/:id',
      canActivate: [_shared_student_guard__WEBPACK_IMPORTED_MODULE_7__["StudentGuard"]],
      component: _student_student_details_component__WEBPACK_IMPORTED_MODULE_2__["StudentDetailsComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'home',
      component: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
    }, {
      path: 'welcome',
      component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"]
    }, {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Coaching-Portal';
      this.pageTitle = 'Hello World..!!!';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _student_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student/student-list.component */
    "./src/app/student/student-list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/welcome.component */
    "./src/app/home/welcome.component.ts");
    /* harmony import */


    var _shared_star_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/star.component */
    "./src/app/shared/star.component.ts");
    /* harmony import */


    var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/auth.interceptor */
    "./src/app/shared/auth.interceptor.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _student_student_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./student/student-details.component */
    "./src/app/student/student-details.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _student_student_crud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./student/student-crud.component */
    "./src/app/student/student-crud.component.ts");
    /* harmony import */


    var _shared_dateConverter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/dateConverter */
    "./src/app/shared/dateConverter.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_16__["AngularMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_star_component__WEBPACK_IMPORTED_MODULE_8__["StarComponent"], _home_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _student_student_details_component__WEBPACK_IMPORTED_MODULE_11__["StudentDetailsComponent"], _student_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"], _student_student_crud_component__WEBPACK_IMPORTED_MODULE_13__["StudentCRUDComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _shared_dateConverter__WEBPACK_IMPORTED_MODULE_14__["DateConverter"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_16__["AngularMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_star_component__WEBPACK_IMPORTED_MODULE_8__["StarComponent"], _home_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _student_student_details_component__WEBPACK_IMPORTED_MODULE_11__["StudentDetailsComponent"], _student_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"], _student_student_crud_component__WEBPACK_IMPORTED_MODULE_13__["StudentCRUDComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _shared_dateConverter__WEBPACK_IMPORTED_MODULE_14__["DateConverter"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_16__["AngularMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/authentication.service */
    "./src/app/shared/authentication.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/welcome"];
    };

    var _c1 = function _c1() {
      return ["/studentList"];
    };

    var _c2 = function _c2() {
      return ["/student", "0", "edit"];
    };

    function HeaderComponent_ul_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Student List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Student");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(loginService) {
        _classCallCheck(this, HeaderComponent);

        this.loginService = loginService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 1,
      consts: [["color", "primary"], [1, "example-fill-remaining-space"], [1, "align-center"], [1, "example-spacer"], ["class", "nav nav-pills", 4, "ngIf"], [1, "nav", "nav-pills"], ["mat-button", "", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Coaching App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_ul_7_Template, 10, 6, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/welcome.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/home/welcome.component.ts ***!
    \*******************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppHomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/authentication.service */
    "./src/app/shared/authentication.service.ts");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(router, route, formBuilder, loginservice) {
        _classCallCheck(this, WelcomeComponent);

        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.welcomePageTitle = 'Welcome to the coaching portal';
        this.isSubmitted = false;
        this.pageTitle = 'Welcome Rachit to the coaching portal';
        this.loading = false;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.returnUrl = this.route.snapshot.queryParams['welcome'] || '/';
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this = this;

          this.loginservice.authenticate(this.loginForm.value).subscribe(function (data) {
            _this.router.navigate(['']);

            _this.invalidLogin = false;
          }, function (error) {
            _this.invalidLogin = true;
            _this.error = error.message;
          });
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-start"]],
      inputs: {
        error: "error"
      },
      decls: 24,
      vars: 4,
      consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container-fluid"], [1, "text-center"], ["src", "./assets/images/Rachit.png", 1, "img-responsive", "center-block", 2, "max-height", "300px", "padding-bottom", "50px"], ["novalidate", "", 3, "formGroup"], ["type", "text", "id", "login", "name", "login", "placeholder", "login", "formControlName", "username", 1, "form-control"], ["type", "text", "id", "password", "name", "login", "placeholder", "password", "formControlName", "password", 1, "form-control"], [1, "form-group", "row", "mb-2"], [1, "offset-md-2", "col-md-4"], ["type", "submit", 1, "btn", "btn-primary", "mr-3", "login-button", 2, "width", "80px", 3, "title", "disabled", "click"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Developed by:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rachit Mundhada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "rachitmundhada@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_22_listener() {
            return ctx.checkLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.loginForm.valid ? "Save your entered data" : "Disabled until the form data is valid")("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start',
          templateUrl: './welcome.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/authentication.service */
    "./src/app/shared/authentication.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, loginservice) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this2 = this;

          this.loginservice.authenticate(this.username).subscribe(function (data) {
            _this2.router.navigate(['']);

            _this2.invalidLogin = false;
          }, function (error) {
            _this2.invalidLogin = true;
            _this2.error = error.message;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      inputs: {
        error: "error"
      },
      decls: 19,
      vars: 3,
      consts: [["cellspacing", "0", 1, "example-full-width"], [1, "example-full-width"], ["matInput", "", "placeholder", "Username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "error"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_p_15_Template, 2, 1, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.checkLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["[_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 300px;\n}\n\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.error[_ngcontent-%COMP%] {\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n}\n\n.button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSxcbm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/auth.interceptor.ts ***!
    \********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor() {
        _classCallCheck(this, AuthInterceptor);
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          //const token: string = localStorage.getItem('token');
          console.log('Auth service called');
          var token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NDY2MTkxMX0.970Hz2jSELM2CWqxA_6b57gJZdNQ5bxFPYHZSHLqUnHwbJUVDEMxbtUKt8utf_gsiRuKbRWr3cxMlUakV4-G1w';

          if (token) {
            console.log('token inserted in the headers');
            request = request.clone({
              headers: request.headers.set('Authorization', token)
            });
          }

          if (!request.headers.has('Content-Type')) {
            request = request.clone({
              headers: request.headers.set('Content-Type', 'application/json')
            });
          }

          request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
          });
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              console.log('event--->>>', event);
            }

            return event;
          }));
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)();
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/authentication.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/authentication.service.ts ***!
    \**************************************************/

  /*! exports provided: User, AuthenticationService */

  /***/
  function srcAppSharedAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var User = function User(status) {
      _classCallCheck(this, User);

      this.status = status;
    };

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(httpClient) {
        _classCallCheck(this, AuthenticationService);

        this.httpClient = httpClient;
      } // Provide username and password for authentication, and once authentication is successful, 
      //store JWT token in session


      _createClass(AuthenticationService, [{
        key: "authenticate",
        value: function authenticate(login) {
          var body = [];
          var url = 'http://localhost:8080/StubProject/login';
          console.log('Before hitting for the login service -' + JSON.stringify(login));
          return this.httpClient.post(url, {
            login: login
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (userData) {
            sessionStorage.setItem("username", login);
            var tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          }));
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem("username");
          return !(user === null);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem("username");
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/dateConverter.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/dateConverter.ts ***!
    \*****************************************/

  /*! exports provided: DateConverter */

  /***/
  function srcAppSharedDateConverterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateConverter", function () {
      return DateConverter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateConverter = /*#__PURE__*/function () {
      function DateConverter() {
        _classCallCheck(this, DateConverter);
      }

      _createClass(DateConverter, [{
        key: "transform",
        value: function transform(value, character) {
          return '';
        }
      }]);

      return DateConverter;
    }();

    DateConverter.ɵfac = function DateConverter_Factory(t) {
      return new (t || DateConverter)();
    };

    DateConverter.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "dateConverter",
      type: DateConverter,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateConverter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'dateConverter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/numberRange-validators.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/numberRange-validators.ts ***!
    \**************************************************/

  /*! exports provided: NumberRangeValidators */

  /***/
  function srcAppSharedNumberRangeValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberRangeValidators", function () {
      return NumberRangeValidators;
    });

    var NumberRangeValidators = /*#__PURE__*/function () {
      function NumberRangeValidators() {
        _classCallCheck(this, NumberRangeValidators);
      }

      _createClass(NumberRangeValidators, null, [{
        key: "range",
        value: function range(min, max) {
          return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
              return {
                'range': true
              };
            } else return null;
          };
        }
      }]);

      return NumberRangeValidators;
    }();
    /***/

  },

  /***/
  "./src/app/shared/star.component.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/star.component.ts ***!
    \******************************************/

  /*! exports provided: StarComponent */

  /***/
  function srcAppSharedStarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarComponent", function () {
      return StarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StarComponent = /*#__PURE__*/function () {
      function StarComponent() {
        _classCallCheck(this, StarComponent);

        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(StarComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.starWidth = this.rating * 75 / 5;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.ratingClicked.emit("The rating ".concat(this.rating, " was clicked!"));
        }
      }]);

      return StarComponent;
    }();

    StarComponent.ɵfac = function StarComponent_Factory(t) {
      return new (t || StarComponent)();
    };

    StarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StarComponent,
      selectors: [["pm-star"]],
      inputs: {
        rating: "rating"
      },
      outputs: {
        ratingClicked: "ratingClicked"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 3,
      consts: [[1, "crop", 3, "title", "click"], [2, "width", "75px"], [1, "fa", "fa-star"]],
      template: function StarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarComponent_Template_div_click_0_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.starWidth, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.rating);
        }
      },
      styles: [".crop[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\ndiv[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pm-star',
          templateUrl: './star.component.html',
          styleUrls: ['./star.component.css']
        }]
      }], null, {
        ratingClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/student-edit.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/student-edit.guard.ts ***!
    \**********************************************/

  /*! exports provided: StudentEditGuard */

  /***/
  function srcAppSharedStudentEditGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentEditGuard", function () {
      return StudentEditGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StudentEditGuard = /*#__PURE__*/function () {
      function StudentEditGuard() {
        _classCallCheck(this, StudentEditGuard);
      }

      _createClass(StudentEditGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          console.log('In the deactivate method');

          if (component.studentForm.dirty) {
            console.log('In the deactivate method');
            var studentName = component.studentForm.get('studentName').value || 'New Product';
            return confirm("Navigate away and lose all changes to ".concat(studentName, "?"));
          }

          return true;
        }
      }]);

      return StudentEditGuard;
    }();

    StudentEditGuard.ɵfac = function StudentEditGuard_Factory(t) {
      return new (t || StudentEditGuard)();
    };

    StudentEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentEditGuard,
      factory: StudentEditGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentEditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/student.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/student.guard.ts ***!
    \*****************************************/

  /*! exports provided: StudentGuard */

  /***/
  function srcAppSharedStudentGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentGuard", function () {
      return StudentGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StudentGuard = /*#__PURE__*/function () {
      function StudentGuard(router) {
        _classCallCheck(this, StudentGuard);

        this.router = router;
      }

      _createClass(StudentGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var id = +next.url[1].path;

          if (isNaN(id) || id < 1) {
            alert("Invalid Student id");
            this.router.navigate(['/studentList']);
            return false;
          }

          return true;
        }
      }]);

      return StudentGuard;
    }();

    StudentGuard.ɵfac = function StudentGuard_Factory(t) {
      return new (t || StudentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    StudentGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentGuard,
      factory: StudentGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-crud.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/student-crud.component.ts ***!
    \***************************************************/

  /*! exports provided: StudentCRUDComponent */

  /***/
  function srcAppStudentStudentCrudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCRUDComponent", function () {
      return StudentCRUDComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_numberRange_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/numberRange-validators */
    "./src/app/shared/numberRange-validators.ts");
    /* harmony import */


    var _student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student.service */
    "./src/app/student/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentCRUDComponent_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your first name. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The first name must be longer than 3 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter class. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The class must be more than 01 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter DOJ. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The class must be more than 01 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter DOB. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The class must be more than 01 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter fees. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The class must be more than 01 characters. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter fees. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_span_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The confirmation fees does not match... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_div_69_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your email address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_div_69_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The confirmation does not match the email address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function StudentCRUDComponent_div_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentCRUDComponent_div_69_span_14_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentCRUDComponent_div_69_span_15_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r12.errorMessage));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.errorMessage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r12.studentForm.get("emailGroup").errors || (ctx_r12.studentForm.get("emailGroup.confirmEmail").touched || ctx_r12.studentForm.get("emailGroup.confirmEmail").dirty) && !ctx_r12.studentForm.get("emailGroup.confirmEmail").valid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.studentForm.get("emailGroup.confirmEmail").errors == null ? null : ctx_r12.studentForm.get("emailGroup.confirmEmail").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.studentForm.get("emailGroup").errors == null ? null : ctx_r12.studentForm.get("emailGroup").errors.match);
      }
    }

    function StudentCRUDComponent_div_70_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your phone number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_div_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StudentCRUDComponent_div_70_span_6_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r13.studentForm.get("phone").valid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.studentForm.get("phone").errors == null ? null : ctx_r13.studentForm.get("phone").errors.required);
      }
    }

    function StudentCRUDComponent_span_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter ratings between 1 and 5. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentCRUDComponent_h1_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Details found...!!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    ;

    function confirmFees(fees) {
      var fee = fees.get('fees').value;
      var reFees = fees.get('reFees').value;

      if (fee != null && reFees != null && (fee.pristine || reFees.pristine)) {
        return null;
      }

      if (fee === reFees) {
        return null;
      } else {
        return {
          'match': true
        };
      }
    }

    function emailMatcher(c) {
      var emailControl = c.get('email');
      var confirmControl = c.get('confirmEmail');

      if (emailControl.pristine || confirmControl.pristine) {
        return null;
      }

      if (emailControl.value === confirmControl.value) {
        return null;
      }

      return {
        match: true
      };
    }

    var StudentCRUDComponent = /*#__PURE__*/function () {
      function StudentCRUDComponent(fb, studentAPIService, router, route) {
        _classCallCheck(this, StudentCRUDComponent);

        this.fb = fb;
        this.studentAPIService = studentAPIService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.pageTitle = '';
        this.isDeleted = false;
        this.studentAddConfirmation = 'Student Added SuccessFully!';
        this.validationMessages = {
          required: 'Please enter your email address.',
          email: 'Please enter a valid email address.'
        };
      }

      _createClass(StudentCRUDComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.setFormValues();
          this.studentForm.get('notification').valueChanges.subscribe(function (val) {
            return _this3.onRadioClick(val);
          }); //this.onRadioClick(this.studentForm.get('notification').value);

          var emailControl = this.studentForm.get('emailGroup.email');
          emailControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(function (value) {
            return _this3.setMessage(emailControl);
          });
          this.sub = this.router.paramMap.subscribe(function (params) {
            var id = +params.get('id');

            _this3.getStudent(id);
          });
        }
      }, {
        key: "getStudent",
        value: function getStudent(id) {
          var _this4 = this;

          this.studentAPIService.getStudentbyID(id).subscribe({
            next: function next(student) {
              return _this4.displayStudent(student);
            },
            error: function error(err) {
              return _this4.errorMessage = err;
            }
          });
        }
      }, {
        key: "displayStudent",
        value: function displayStudent(student) {
          if (this.studentForm) {
            this.studentForm.reset;
          }

          this.student = student;

          if (this.student.studentId === 0) {
            this.pageTitle = 'Enter Students Details to Save...';
          } else {
            this.pageTitle = 'Edit Students Details...';
          } // Need to add the details...


          this.studentForm.patchValue({
            studentName: this.student.studentName,
            studentStandard: this.student.studentStandard,
            studentDOJ: this.student.studentDOJ,
            studentDOB: this.student.studentDOB,
            studentRating: this.student.studentRating
          }); //this.studentForm.setControl('emailGroup', this.fb.array(this.student.emailGroup || []));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "setFormValues",
        value: function setFormValues() {
          this.studentForm = this.fb.group({
            studentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            studentStandard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            studentDOJ: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            studentDOB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            emailGroup: this.fb.group({
              email: [''],
              confirmEmail: ['']
            }, {
              validator: emailMatcher
            }),
            phone: '',
            notification: 'email',
            feeGroup: this.fb.group({
              fees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
              reFees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]]
            }, {
              validator: confirmFees
            }),
            studentRating: ['', [_shared_numberRange_validators__WEBPACK_IMPORTED_MODULE_3__["NumberRangeValidators"].range(1, 5)]]
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          console.log('Saved: ' + JSON.stringify(this.studentForm.value));

          if (this.studentForm) {
            if (this.studentForm.dirty) {
              var s = Object.assign(Object.assign({}, this.student), this.studentForm.value);

              if (s.studentId === 0) {
                this.studentAPIService.addStudents(s).subscribe(function (res) {
                  _this5.submitted = true;

                  _this5.studentForm.reset();
                }, function (err) {
                  console.log(err);
                });
              } else {
                console.log('In the update method calling the service...' + JSON.stringify(s));
                this.studentAPIService.update(s).subscribe({
                  next: function next() {
                    return _this5.onSaveComplete();
                  },
                  error: function error(err) {
                    return _this5.errorMessage = err;
                  }
                });
              }
            } else {
              this.onSaveComplete();
            }
          } else {
            this.errorMessage = 'Please correct the validation errors.';
          }
        }
      }, {
        key: "addStudentForm",
        value: function addStudentForm() {
          this.submitted = false;
          this.studentForm.reset();
        }
      }, {
        key: "onRadioClick",
        value: function onRadioClick(value) {
          var emailControl = this.studentForm.get('emailGroup.email');
          var confirmEmailControl = this.studentForm.get('emailGroup.confirmEmail');
          var emailGroupControl = this.studentForm.get('emailGroup');
          var phoneControl = this.studentForm.get('phone');

          if (value === 'text') {
            phoneControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.isPhone = true;
            emailControl.clearValidators();
            emailGroupControl.clearValidators();
            confirmEmailControl.clearValidators();
          } else {
            phoneControl.clearValidators();
            emailControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
            confirmEmailControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.isPhone = false;
          }

          emailControl.updateValueAndValidity();
          phoneControl.updateValueAndValidity();
          emailGroupControl.updateValueAndValidity();
          confirmEmailControl.updateValueAndValidity();
        }
      }, {
        key: "setMessage",
        value: function setMessage(c) {
          var _this6 = this;

          this.errorMessage = '';

          if ((c.touched || c.dirty) && c.errors) {
            this.errorMessage = Object.keys(c.errors).map(function (key) {
              return _this6.validationMessages[key];
            }).join(' ');
          }
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          var _this7 = this;

          if (this.student.studentId === 0) {
            this.onSaveComplete();
          } else {
            if (confirm("Please confirm to delete student ".concat(this.studentForm.get('studentName').value))) {
              this.studentAPIService.deleteById(this.student.studentId).subscribe({
                next: function next(data) {
                  _this7.onSaveComplete();

                  _this7.isDeleted = true;
                },
                error: function error(err) {
                  return _this7.errorMessage = err;
                }
              });
            }
          }
        }
      }, {
        key: "onSaveComplete",
        value: function onSaveComplete() {
          // Reset the form to clear the flags
          this.studentForm.reset();
          this.route.navigate(['/studentList']);
        }
      }]);

      return StudentCRUDComponent;
    }();

    StudentCRUDComponent.ɵfac = function StudentCRUDComponent_Factory(t) {
      return new (t || StudentCRUDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    StudentCRUDComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentCRUDComponent,
      selectors: [["app-student-crud"]],
      decls: 94,
      vars: 45,
      consts: [[1, "card"], [1, "card-header"], [3, "hidden"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "form-group", "row", "mb-2"], ["for", "firstNameId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "firstNameId", "type", "text", "placeholder", " Name (required)", "formControlName", "studentName", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "standard", 1, "col-md-2", "col-form-label"], ["id", "standard", "type", "text", "placeholder", "Class (required)", "formControlName", "studentStandard", 1, "form-control", 3, "ngClass"], ["for", "DOJ", 1, "col-md-2", "col-form-label"], ["id", "DOJ", "type", "text", "placeholder", "DOJ (required)", "formControlName", "studentDOJ", 1, "form-control", 3, "ngClass"], ["for", "DOB", 1, "col-md-2", "col-form-label"], ["id", "DOB", "type", "text", "placeholder", "DOB (required)", "formControlName", "studentDOB", 1, "form-control", 3, "ngClass"], ["formGroupName", "feeGroup"], ["for", "fees", 1, "col-md-2", "col-form-label"], ["id", "fees", "type", "text", "placeholder", "Fees (required)", "formControlName", "fees", 1, "form-control", 3, "ngClass"], ["for", "refees", 1, "col-md-2", "col-form-label"], ["id", "refees", "type", "text", "placeholder", "Re-confirm Fees (required)", "formControlName", "reFees", 1, "form-control", 3, "ngClass"], [1, "col-md-2", "col-form-label", "pt-0"], [1, "form-check", "form-check-inline"], [1, "form-check-label"], ["type", "radio", "value", "email", "checked", "", "formControlName", "notification", 1, "form-check-input"], ["type", "radio", "value", "text", "formControlName", "notification", 1, "form-check-input"], ["formGroupName", "emailGroup", 4, "ngIf"], ["class", "form-group row mb-2", 4, "ngIf"], ["for", "ratings", 1, "col-md-2", "col-form-label"], ["id", "ratings", "type", "text", "placeholder", "Ratings (required)", "formControlName", "studentRating", 1, "form-control", 3, "ngClass"], [1, "offset-md-2", "col-md-6"], ["type", "submit", 1, "btn", "btn-primary", "mr-3", 2, "width", "80px", 3, "title", "disabled", "click"], ["type", "clear", 1, "btn", "btn-primary", "mr-3", 2, "width", "80px", 3, "click"], ["type", "button", "title", "Delete this product", 1, "btn", "btn-outline-warning", 2, "width", "80px", 3, "click"], [1, "row"], [1, "col-md-4"], [1, "btn", "btn-primary", 3, "click"], ["style", "color: red;", 4, "ngIf"], ["formGroupName", "emailGroup"], ["for", "emailId", 1, "col-md-2", "col-form-label"], ["id", "emailId", "type", "email", "placeholder", "Email (required)", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "confirmEmailId", 1, "col-md-2", "col-form-label"], ["id", "confirmEmailId", "type", "email", "placeholder", "Confirm Email (required)", "formControlName", "confirmEmail", 1, "form-control", 3, "ngClass"], ["for", "phoneId", 1, "col-md-2", "col-form-label"], ["id", "phoneId", "type", "tel", "placeholder", "Phone", "formControlName", "phone", 1, "form-control", 3, "ngClass"], [2, "color", "red"]],
      template: function StudentCRUDComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentCRUDComponent_span_14_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentCRUDComponent_span_15_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StudentCRUDComponent_span_22_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StudentCRUDComponent_span_23_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DOJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StudentCRUDComponent_span_30_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StudentCRUDComponent_span_31_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "DOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, StudentCRUDComponent_span_38_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, StudentCRUDComponent_span_39_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, StudentCRUDComponent_span_47_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StudentCRUDComponent_span_48_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Re-enter Fees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, StudentCRUDComponent_span_55_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, StudentCRUDComponent_span_56_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Send Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, StudentCRUDComponent_div_69_Template, 16, 9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, StudentCRUDComponent_div_70_Template, 7, 4, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ratings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, StudentCRUDComponent_span_77_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCRUDComponent_Template_button_click_80_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCRUDComponent_Template_button_click_82_listener() {
            return ctx.addStudentForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCRUDComponent_Template_button_click_84_listener() {
            return ctx.deleteProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCRUDComponent_Template_button_click_90_listener() {
            return ctx.addStudentForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Add More Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, StudentCRUDComponent_h1_93_Template, 2, 0, "h1", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.studentAddConfirmation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, (ctx.studentForm.get("studentName").touched || ctx.studentForm.get("studentName").dirty) && !ctx.studentForm.get("studentName").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentName").errors == null ? null : ctx.studentForm.get("studentName").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentName").errors == null ? null : ctx.studentForm.get("studentName").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, (ctx.studentForm.get("studentStandard").touched || ctx.studentForm.get("studentStandard").dirty) && !ctx.studentForm.get("studentStandard").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentStandard").errors == null ? null : ctx.studentForm.get("studentStandard").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentStandard").errors == null ? null : ctx.studentForm.get("studentStandard").errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, (ctx.studentForm.get("studentDOJ").touched || ctx.studentForm.get("studentDOJ").dirty) && !ctx.studentForm.get("studentDOJ").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentDOJ").errors == null ? null : ctx.studentForm.get("studentDOJ").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentDOJ").errors == null ? null : ctx.studentForm.get("studentDOJ").errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, (ctx.studentForm.get("studentDOB").touched || ctx.studentForm.get("studentDOB").dirty) && !ctx.studentForm.get("studentDOB").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentDOB").errors == null ? null : ctx.studentForm.get("studentDOB").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentDOB").errors == null ? null : ctx.studentForm.get("studentDOB").errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.studentForm.get("feeGroup").errors || (ctx.studentForm.get("feeGroup.fees").touched || ctx.studentForm.get("feeGroup.fees").dirty) && !ctx.studentForm.get("feeGroup.fees").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("feeGroup.fees").errors == null ? null : ctx.studentForm.get("feeGroup.fees").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("feeGroup.fees").errors == null ? null : ctx.studentForm.get("feeGroup.fees").errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.studentForm.get("feeGroup").errors || (ctx.studentForm.get("feeGroup.reFees").touched || ctx.studentForm.get("feeGroup.reFees").dirty) && !ctx.studentForm.get("feeGroup.reFees").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("feeGroup.reFees").errors == null ? null : ctx.studentForm.get("feeGroup.reFees").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("feeGroup").errors == null ? null : ctx.studentForm.get("feeGroup").errors.match);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, (ctx.studentForm.get("studentRating").touched || ctx.studentForm.get("studentRating").dirty) && !ctx.studentForm.get("studentRating").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentForm.get("studentRating").errors == null ? null : ctx.studentForm.get("studentRating").errors.range);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.studentForm.valid ? "Save your entered data" : "Disabled until the form data is valid")("disabled", !ctx.studentForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isDeleted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDeleted);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1jcnVkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentCRUDComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-crud',
          templateUrl: './student-crud.component.html',
          styleUrls: ['./student-crud.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _student_service__WEBPACK_IMPORTED_MODULE_4__["StudentAPIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-details.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/student/student-details.component.ts ***!
    \******************************************************/

  /*! exports provided: StudentDetailsComponent */

  /***/
  function srcAppStudentStudentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function () {
      return StudentDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student.service */
    "./src/app/student/student.service.ts");
    /* harmony import */


    var _student_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-details.service */
    "./src/app/student/student-details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_star_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/star.component */
    "./src/app/shared/star.component.ts");

    var _c0 = function _c0(a1) {
      return ["/student", a1, "edit"];
    };

    function StudentDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "StudentId:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fees:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "StudentStandard:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "StudentDOB:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "StudentDOJ:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "StudentDetails:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "StudentRatings:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "pm-star", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentDetailsComponent_div_0_Template_button_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.onBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Back ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Edit\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pageTitle + ": " + ctx_r0.studentDetails.studentName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.studentDetails.studentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.studentDetails.studentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](21, 16, ctx_r0.studentDetails.feeGroup.fees, "INR", "symbol"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.studentDetails.studentStandard);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.studentDetails.studentDOB);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.studentDetails.studentDOJ);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isPhone ? ctx_r0.studentDetails.phone : ctx_r0.studentDetails.emailGroup.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx_r0.studentDetails.studentRating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 150, "px")("margin", 2, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx_r0.studentDetails.studentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx_r0.studentDetails.studentId));
      }
    }

    var StudentDetailsComponent = /*#__PURE__*/function () {
      function StudentDetailsComponent(studentApiService, studentDetailsService, router, route) {
        _classCallCheck(this, StudentDetailsComponent);

        this.studentApiService = studentApiService;
        this.studentDetailsService = studentDetailsService;
        this.router = router;
        this.route = route;
        this.pageTitle = 'Details for student';
        this.imageUrl = './assets/images/Rachit.png';
      }

      _createClass(StudentDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          var id = +this.route.snapshot.paramMap.get('id');
          this.studentApiService.getStudentbyID(id).subscribe({
            next: function next(studentDetails) {
              _this8.studentDetails = studentDetails;
              console.log('Rachit...' + _this8.studentDetails.phone);

              if (_this8.studentDetails.phone === '') {
                _this8.isPhone = false;
                console.log('Email is present');
              } else {
                _this8.isPhone = true;
                console.log('Phone is present');
              }

              console.log('Details received for student by id:-' + JSON.stringify(_this8.studentDetails));
            },
            error: function error(err) {
              return _this8.errorMessage = err;
            }
          });
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.router.navigate(['/studentList']);
        }
      }]);

      return StudentDetailsComponent;
    }();

    StudentDetailsComponent.ɵfac = function StudentDetailsComponent_Factory(t) {
      return new (t || StudentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_details_service__WEBPACK_IMPORTED_MODULE_2__["StudentDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    StudentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentDetailsComponent,
      selectors: [["app-student-details"]],
      decls: 1,
      vars: 1,
      consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "col-md-4"], [1, "col-md-8"], [3, "rating"], [1, "col-md-2"], [1, "center-block", "img-responsive", 3, "src", "title"], [1, "row", "mt-4"], [1, "btn", "btn-outline-secondary", "mr-3", 2, "width", "80px", 3, "click"], [1, "fa", "fa-chevron-left"], [1, "btn", "btn-outline-secondary", 2, "width", "80px", 3, "routerLink"], [1, "fa", "fa-chevron-right"]],
      template: function StudentDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentDetailsComponent_div_0_Template, 57, 22, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.studentDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_star_component__WEBPACK_IMPORTED_MODULE_5__["StarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-details',
          templateUrl: './student-details.component.html',
          styleUrls: ['./student-details.component.css']
        }]
      }], function () {
        return [{
          type: _student_service__WEBPACK_IMPORTED_MODULE_1__["StudentAPIService"]
        }, {
          type: _student_details_service__WEBPACK_IMPORTED_MODULE_2__["StudentDetailsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-details.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/student/student-details.service.ts ***!
    \****************************************************/

  /*! exports provided: StudentDetailsService */

  /***/
  function srcAppStudentStudentDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentDetailsService", function () {
      return StudentDetailsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StudentDetailsService = /*#__PURE__*/function () {
      function StudentDetailsService(http) {
        _classCallCheck(this, StudentDetailsService);

        this.http = http;
        this.urlProvider = 'http://localhost:8080/students/getDetailsById/';
        this.jwtheader = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjgxNTM0MH0.7f6i3Uw4VeUKutcmedGD_NUoA8rxCHpn7mIZ8gOEpBibrQ6-B6LxpbJRg4sL7Hx2nTSoEflncsn24JAHVFnd3A';
      }

      _createClass(StudentDetailsService, [{
        key: "getStudentbyID",
        value: function getStudentbyID(id) {
          // this.urlProvider=this.urlProvider+ id;
          console.log('The final url :-' + this.urlProvider); //return this.http.get<IStudents>(this.urlProvider+id,{headers:{'Authorization':this.jwtheader}

          return this.http.get(this.urlProvider + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('The data received from backend server for the student fetch by Id srvc:- ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return StudentDetailsService;
    }();

    StudentDetailsService.ɵfac = function StudentDetailsService_Factory(t) {
      return new (t || StudentDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    StudentDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentDetailsService,
      factory: StudentDetailsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/student-list.component.ts ***!
    \***************************************************/

  /*! exports provided: StudentListComponent */

  /***/
  function srcAppStudentStudentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListComponent", function () {
      return StudentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student.service */
    "./src/app/student/student.service.ts");
    /* harmony import */


    var _student_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-list.service */
    "./src/app/student/student-list.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_star_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/star.component */
    "./src/app/shared/star.component.ts");

    function StudentListComponent_table_15_tr_19_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
      }

      if (rf & 2) {
        var student_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.imageWidth, "px")("margin", ctx_r4.imageMargin, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", student_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", student_r3.studentName);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/student", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/student", a1, "edit"];
    };

    function StudentListComponent_table_15_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentListComponent_table_15_tr_19_img_2_Template, 1, 6, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pm-star", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_table_15_tr_19_Template_pm_star_click_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.onRatingCicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showImage && student_r3.imageUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, student_r3.studentId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.studentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.studentDOB);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.studentStandard);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.studentDOJ);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.fees);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", student_r3.ratings);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, student_r3.studentId));
      }
    }

    function StudentListComponent_table_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_table_15_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.toggleImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Student DOB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Student Class");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Student DOJ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Student Fees");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Student Ratings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentListComponent_table_15_tr_19_Template, 19, 13, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.showImage ? "Hide" : "Show", " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filteredStudents);
      }
    }

    function StudentListComponent_h1_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Details found...!!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var StudentListComponent = /*#__PURE__*/function () {
      function StudentListComponent(studentApiService, studentService) {
        _classCallCheck(this, StudentListComponent);

        this.studentApiService = studentApiService;
        this.studentService = studentService;
        this.pageTitle = 'Students List';
        this.showImage = true;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this._listFilter = '';
        this.isStudentNotPresent = false;
        this.listFilter = '';
      }

      _createClass(StudentListComponent, [{
        key: "performFilter",
        value: function performFilter(filterBy) {
          filterBy = filterBy.toLocaleLowerCase();
          return this.students.filter(function (student) {
            return student.studentName.toLocaleLowerCase().indexOf(filterBy) !== -1;
          });
        }
      }, {
        key: "onRatingCicked",
        value: function onRatingCicked(message) {
          console.log(message);
          this.pageTitle = 'Rating clicked' + message;
        }
      }, {
        key: "toggleImage",
        value: function toggleImage() {
          this.showImage = !this.showImage;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.studentApiService.getStudentsList().subscribe({
            next: function next(students) {
              if (students.length < 1) {
                _this9.isStudentNotPresent = true;
              }

              console.log('The size of the array received :-' + _this9.arraySize);
              _this9.students = students;
              _this9.filteredStudents = _this9.students;
            },
            error: function error(err) {
              return _this9.errorMessage = err;
            }
          });
        }
      }, {
        key: "listFilter",
        get: function get() {
          return this._listFilter;
        },
        set: function set(value) {
          this._listFilter = value;
          this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
        }
      }]);

      return StudentListComponent;
    }();

    StudentListComponent.ɵfac = function StudentListComponent_Factory(t) {
      return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_list_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]));
    };

    StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentListComponent,
      selectors: [["app-student-list"]],
      decls: 17,
      vars: 5,
      consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-2"], [1, "col-md-4"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "col-md-d6"], [1, "table-responsive"], ["class", "table", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], [1, "table"], [1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"], [3, "src", "title", "width", "margin", 4, "ngIf"], [3, "routerLink"], [3, "rating", "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "routerLink"], [3, "src", "title"], [2, "color", "red"]],
      template: function StudentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Filter By:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentListComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.listFilter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentListComponent_table_15_Template, 20, 2, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StudentListComponent_h1_16_Template, 2, 0, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Filtered By: ", ctx._listFilter, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.students && ctx.students.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStudentNotPresent);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_star_component__WEBPACK_IMPORTED_MODULE_6__["StarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: ["thead[_ngcontent-%COMP%]{\r\n    color: #337AB7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWR7XHJcbiAgICBjb2xvcjogIzMzN0FCNztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-list',
          templateUrl: './student-list.component.html',
          styleUrls: ['./student-list.component.css']
        }]
      }], function () {
        return [{
          type: _student_service__WEBPACK_IMPORTED_MODULE_1__["StudentAPIService"]
        }, {
          type: _student_list_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-list.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/student/student-list.service.ts ***!
    \*************************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppStudentStudentListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StudentService = /*#__PURE__*/function () {
      function StudentService(http) {
        _classCallCheck(this, StudentService);

        this.http = http;
        this.urlProvider = 'http://localhost:8080/students/getAllDetails';
      } //private jwtheader='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjgxNTM0MH0.7f6i3Uw4VeUKutcmedGD_NUoA8rxCHpn7mIZ8gOEpBibrQ6-B6LxpbJRg4sL7Hx2nTSoEflncsn24JAHVFnd3A';


      _createClass(StudentService, [{
        key: "getStudentsList",
        value: function getStudentsList() {
          // return this.http.get<IStudents[]>(this.urlProvider,{headers:{'Authorization':this.jwtheader}}).pipe(
          return this.http.get(this.urlProvider).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('The data received from backend server:- ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return StudentService;
    }();

    StudentService.ɵfac = function StudentService_Factory(t) {
      return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentService,
      factory: StudentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student.service.ts":
  /*!********************************************!*\
    !*** ./src/app/student/student.service.ts ***!
    \********************************************/

  /*! exports provided: StudentAPIService */

  /***/
  function srcAppStudentStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAPIService", function () {
      return StudentAPIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var StudentAPIService = /*#__PURE__*/function () {
      function StudentAPIService(http) {
        _classCallCheck(this, StudentAPIService);

        this.http = http;
        this.urlProvider = 'http://localhost:8080/StubProject/students/';
      } //private urlProvider='http://ec2-13-127-187-209.ap-south-1.compute.amazonaws.com:8080/StubProject/students/';


      _createClass(StudentAPIService, [{
        key: "addStudents",
        value: function addStudents(student) {
          var url = this.urlProvider + 'saveStudent';
          console.log('Final data to be send :-' + JSON.stringify(student));
          return this.http.post(url, student).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (student) {
            return console.log("Student Name added ".concat(student.studentId));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getStudentbyID",
        value: function getStudentbyID(id) {
          if (id === 0) {
            console.log('Id is 0 returning empty object' + JSON.stringify(this.initializedStudentObject()));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.initializedStudentObject());
          }

          var url = "".concat(this.urlProvider, "getDetailsById/").concat(id); // this.urlProvider=this.urlProvider+ id;

          console.log('The final url :-' + url); //return this.http.get<IStudents>(this.urlProvider+id,{headers:{'Authorization':this.jwtheader}

          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('The data received from backend server for the student fetch by Id srvc:- ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getStudentsList",
        value: function getStudentsList() {
          // return this.http.get<IStudents[]>(this.urlProvider,{headers:{'Authorization':this.jwtheader}}).pipe(
          var url = this.urlProvider + 'getAllDetails';
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('The data received from backend server:- ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "update",
        value: function update(student) {
          var url = this.urlProvider + 'updateStudent/' + student.studentId;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }); //console.log('Final data to be send :-'+ JSON.stringify(student))

          return this.http.put(url, student, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (student) {
            return console.log("Student Name added ".concat(student.studentId));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteById",
        value: function deleteById(id) {
          var url = this.urlProvider + 'deleteDetailsById/' + id;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }, {
        key: "initializedStudentObject",
        value: function initializedStudentObject() {
          return {
            studentId: 0,
            studentName: null,
            imageUrl: null,
            studentDOB: null,
            studentStandard: null,
            studentDOJ: null,
            feeGroup: null,
            studentRating: null,
            phone: null,
            notification: null,
            emailGroup: null
          };
        }
      }]);

      return StudentAPIService;
    }();

    StudentAPIService.ɵfac = function StudentAPIService_Factory(t) {
      return new (t || StudentAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    StudentAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentAPIService,
      factory: StudentAPIService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rachi\OneDrive\Desktop\Projects\Angular_Coaching_Portal\Coaching-Portal\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map