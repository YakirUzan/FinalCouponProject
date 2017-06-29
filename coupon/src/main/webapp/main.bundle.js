webpackJsonp([0,5],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationType; });
var OperationType;
(function (OperationType) {
    OperationType[OperationType["CREATE"] = 0] = "CREATE";
    OperationType[OperationType["UPDATE"] = 1] = "UPDATE";
    OperationType[OperationType["REMOVE"] = 2] = "REMOVE";
    OperationType[OperationType["GET"] = 3] = "GET";
})(OperationType || (OperationType = {}));
//# sourceMappingURL=operation-type.enum.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 177;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(227);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureContainerComponent = (function () {
    function FeatureContainerComponent(storage) {
        this.storage = storage;
        this.updated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FeatureContainerComponent.prototype.ngOnInit = function () {
        switch (this.storage.retrieve("type")) {
            case "ADMIN":
                this.clientType = "Admin - ";
                break;
            case "COMPANY":
                this.clientType = "Company - ";
                break;
            case "CUSTOMER":
                this.clientType = "Customer - ";
                break;
        }
        this.clientType += this.storage.retrieve("name");
    };
    FeatureContainerComponent.prototype.update = function () {
        this.updated.emit();
    };
    return FeatureContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FeatureContainerComponent.prototype, "updated", void 0);
FeatureContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feature-container',
        template: __webpack_require__(392),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */]) === "function" && _b || Object])
], FeatureContainerComponent);

var _a, _b;
//# sourceMappingURL=feature-container.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Services_customer_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterContainerComponent = (function () {
    function FooterContainerComponent(adminService, companyService, customerService, storage) {
        this.adminService = adminService;
        this.companyService = companyService;
        this.customerService = customerService;
        this.storage = storage;
        this.footerItems = [];
    }
    FooterContainerComponent.prototype.ngOnInit = function () {
        switch (this.storage.retrieve("type")) {
            case "ADMIN":
                this.adminCase();
                break;
            case "COMPANY":
                this.companyCase();
                break;
            case "CUSTOMER":
                this.customerCase();
                break;
        }
    };
    FooterContainerComponent.prototype.adminCase = function () {
        var _this = this;
        this.addFooterItem(this.createFooterItem("Companies", 0, "yellow", "assets/Images/ic_company.png", "Company Icon"));
        this.addFooterItem(this.createFooterItem("Customers", 0, "green", "assets/Images/ic_customer.png", "Customer Icon"));
        this.addFooterItem(this.createFooterItem("Coupons", 0, "red", "assets/Images/ic_coupon.png", "Coupon Icon"));
        if (this.adminService.metaDataObj) {
            this.initAdminData();
        }
        this.adminService.metaDataRefresh.subscribe(function () {
            _this.initAdminData();
        });
    };
    FooterContainerComponent.prototype.companyCase = function () {
        var _this = this;
        this.addFooterItem(this.createFooterItem("Coupons", 0, "yellow", "assets/Images/ic_coupon.png", "Coupon Icon"));
        this.addFooterItem(this.createFooterItem("Amount", 0, "green", "assets/Images/ic_customer.png", "Amount Icon"));
        this.addFooterItem(this.createFooterItem("Price", 0, "red", "assets/Images/ic_shekel.png", "Price Icon"));
        if (this.companyService.metaDataObj) {
            this.initCompanyData();
        }
        this.companyService.metaDataRefresh.subscribe(function () {
            _this.initCompanyData();
        });
    };
    FooterContainerComponent.prototype.customerCase = function () {
        var _this = this;
        this.addFooterItem(this.createFooterItem("History Purchases", 0, "yellow", "assets/Images/ic_coupon.png", "Coupon Icon"));
        this.addFooterItem(this.createFooterItem("Valid Coupons", 0, "green", "assets/Images/ic_coupon.png", "Coupon Icon"));
        this.addFooterItem(this.createFooterItem("System Coupons", 0, "red", "assets/Images/ic_coupon.png", "Coupon Icon"));
        if (this.customerService.metaDataObj) {
            this.initCustomerData();
        }
        this.customerService.metaDataRefresh.subscribe(function () {
            _this.initCustomerData();
        });
    };
    FooterContainerComponent.prototype.initAdminData = function () {
        this.footerItems[0].number = this.adminService.metaDataObj.companies.result.length;
        this.footerItems[1].number = this.adminService.metaDataObj.customers.result.length;
        this.footerItems[2].number = this.adminService.metaDataObj.coupons.result.length;
    };
    FooterContainerComponent.prototype.initCompanyData = function () {
        this.footerItems[0].number = this.companyService.metaDataObj.coupons.result.length;
        this.footerItems[1].number = this.getCouponsAmount();
        this.footerItems[2].number = this.getCouponsPrice();
    };
    FooterContainerComponent.prototype.getCouponsAmount = function () {
        var couponsAmount = 0;
        this.companyService.metaDataObj.coupons.result.forEach(function (coupon) {
            couponsAmount += coupon.amount;
        });
        return couponsAmount;
    };
    FooterContainerComponent.prototype.getCouponsPrice = function () {
        var couponsPrice = 0;
        this.companyService.metaDataObj.coupons.result.forEach(function (coupon) {
            couponsPrice += coupon.price * coupon.amount;
        });
        return couponsPrice;
    };
    FooterContainerComponent.prototype.initCustomerData = function () {
        var numberOfValidCoupons = this.getNumberOfValidCoupons();
        this.footerItems[0].number = this.customerService.metaDataObj.coupons.result.length - numberOfValidCoupons;
        this.footerItems[1].number = numberOfValidCoupons;
        this.footerItems[2].number = this.customerService.metaDataObj.validCoupons.result.length;
    };
    FooterContainerComponent.prototype.getNumberOfValidCoupons = function () {
        var _this = this;
        var numberOfValidCoupons = 0;
        this.customerService.metaDataObj.coupons.result.forEach(function (coupon) {
            if (_this.getDateFromString(coupon.endDate) > new Date())
                numberOfValidCoupons++;
        });
        return numberOfValidCoupons;
    };
    FooterContainerComponent.prototype.getDateFromString = function (date) {
        var from = date.split("/");
        return new Date(from["1"] + "/" + from["0"] + "/" + from["2"]);
    };
    FooterContainerComponent.prototype.addFooterItem = function (footerItem) {
        this.footerItems.push(footerItem);
    };
    FooterContainerComponent.prototype.createFooterItem = function (name, number, color, imageUrl, imageAlt) {
        return { name: name, number: number, color: color, imageUrl: imageUrl, imageAlt: imageAlt };
    };
    return FooterContainerComponent;
}());
FooterContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-container',
        template: __webpack_require__(393),
        styles: [__webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["b" /* LocalStorageService */]) === "function" && _d || Object])
], FooterContainerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=footer-container.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuContainerComponent = (function () {
    function MenuContainerComponent(storage) {
        this.storage = storage;
        this.logoutClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.menuItems = [];
    }
    MenuContainerComponent.prototype.ngOnInit = function () {
        this.addMenuItem(this.createMenuItem("home", "Home"));
        switch (this.storage.retrieve("type")) {
            case "ADMIN":
                this.adminCase();
                break;
            case "COMPANY":
                this.companyCase();
                break;
            case "CUSTOMER":
                this.customerCase();
                break;
        }
        this.addMenuItem(this.createMenuItem("home", "Logout"));
    };
    MenuContainerComponent.prototype.adminCase = function () {
        this.addMenuItem(this.createMenuItem("admin/create/company", "Create Company"));
        this.addMenuItem(this.createMenuItem("admin/update/company", "Update Company"));
        this.addMenuItem(this.createMenuItem("admin/remove/company", "Remove Company"));
        this.addMenuItem(this.createMenuItem("admin/get/company", "Get Company"));
        this.addMenuItem(this.createMenuItem("admin/get/all/companies", "Get All Companies"));
        this.addMenuItem(this.createMenuItem("admin/create/customer", "Create Customer"));
        this.addMenuItem(this.createMenuItem("admin/update/customer", "Update Customer"));
        this.addMenuItem(this.createMenuItem("admin/remove/customer", "Remove Customer"));
        this.addMenuItem(this.createMenuItem("admin/get/customer", "Get Customer"));
        this.addMenuItem(this.createMenuItem("admin/get/all/customers", "Get All Customers"));
    };
    MenuContainerComponent.prototype.companyCase = function () {
        this.addMenuItem(this.createMenuItem("company/create/coupon", "Create Coupon"));
        this.addMenuItem(this.createMenuItem("company/update/coupon", "Update Coupon"));
        this.addMenuItem(this.createMenuItem("company/remove/coupon", "Remove Coupon"));
        this.addMenuItem(this.createMenuItem("company/get/coupon", "Get Coupon"));
        this.addMenuItem(this.createMenuItem("company/get/all/coupons", "Get All Coupons"));
        this.addMenuItem(this.createMenuItem("company/get/coupons/by/type", "Get Coupons By Type"));
        this.addMenuItem(this.createMenuItem("company/get/coupons/by/price", "Get Coupons By Price"));
        this.addMenuItem(this.createMenuItem("company/get/coupons/by/date", "Get Coupons By Date"));
    };
    MenuContainerComponent.prototype.customerCase = function () {
        this.addMenuItem(this.createMenuItem("customer/purchase/coupon", "Purchase Coupon"));
        this.addMenuItem(this.createMenuItem("customer/get/all/purchased/coupons", "Get All Coupons"));
        this.addMenuItem(this.createMenuItem("customer/get/purchased/coupons/by/type", "Get Coupons By Type"));
        this.addMenuItem(this.createMenuItem("customer/get/purchased/coupons/by/price", "Get Coupons By Price"));
    };
    MenuContainerComponent.prototype.onMenuItemClick = function (menuItem) {
        if (menuItem.name === "Logout")
            this.logoutClicked.emit();
    };
    MenuContainerComponent.prototype.getMenuItemClass = function (menuItem) {
        return menuItem.name === "Logout" ? "logout" : null;
    };
    MenuContainerComponent.prototype.addMenuItem = function (menuItem) {
        this.menuItems.push(menuItem);
    };
    MenuContainerComponent.prototype.createMenuItem = function (url, name) {
        return { url: url, name: name };
    };
    return MenuContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MenuContainerComponent.prototype, "logoutClicked", void 0);
MenuContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'menu-container',
        template: __webpack_require__(394),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */]) === "function" && _b || Object])
], MenuContainerComponent);

var _a, _b;
//# sourceMappingURL=menu-container.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, password, type) {
        this.name = name;
        this.password = password;
        this.type = type;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_company__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCompanyComponent = (function () {
    function CreateCompanyComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.msgs = [];
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateCompanyComponent.prototype.onKeyPressed = function ($event) {
        if ($event.charCode === 13) {
            this.createCompany();
        }
    };
    CreateCompanyComponent.prototype.createCompany = function () {
        var _this = this;
        this.msgs = [];
        var company = new __WEBPACK_IMPORTED_MODULE_3_app_core_company__["a" /* Company */](0, this.companyName, this.companyEmail, this.companyPassword, null);
        this.adminService.createCompany(company).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Company Created", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Create Company Failed", validation.result));
            }
        });
    };
    CreateCompanyComponent.prototype.resetInputs = function () {
        this.companyName = "";
        this.companyEmail = "";
        this.companyPassword = "";
    };
    return CreateCompanyComponent;
}());
CreateCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-company',
        template: __webpack_require__(395),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], CreateCompanyComponent);

var _a, _b;
//# sourceMappingURL=create-company.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_customer__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCustomerComponent = (function () {
    function CreateCustomerComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.msgs = [];
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent.prototype.onKeyPressed = function ($event) {
        if ($event.charCode === 13) {
            this.createCustomer();
        }
    };
    CreateCustomerComponent.prototype.createCustomer = function () {
        var _this = this;
        this.msgs = [];
        var customer = new __WEBPACK_IMPORTED_MODULE_3_app_core_customer__["a" /* Customer */](0, this.customerName, this.customerPassword, null);
        this.adminService.createCustomer(customer).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Customer Created", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Create Customer Failed", validation.result));
            }
        });
    };
    CreateCustomerComponent.prototype.resetInputs = function () {
        this.customerName = "";
        this.customerPassword = "";
    };
    return CreateCustomerComponent;
}());
CreateCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-customer',
        template: __webpack_require__(396),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], CreateCustomerComponent);

var _a, _b;
//# sourceMappingURL=create-customer.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllCompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetAllCompaniesComponent = (function () {
    function GetAllCompaniesComponent(adminService, messageService) {
        this.adminService = adminService;
        this.messageService = messageService;
        this.msgs = [];
        this.companies = [];
        this.companiesPerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
    }
    GetAllCompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initItems();
        if (this.adminService.metaDataObj) {
            this.companies = this.adminService.metaDataObj.companies.result;
            this.onPageChanged({ first: 0, rows: 10 });
        }
        this.adminService.metaDataRefresh.subscribe(function () {
            _this.companies = _this.adminService.metaDataObj.companies.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetAllCompaniesComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            },
            {
                label: 'All Companies', icon: 'fa-database', command: function () {
                    _this.downloadAllCompanies();
                }
            }
        ];
    };
    GetAllCompaniesComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.companiesPerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.companiesPerPage, function (company) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(company, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (company) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](company, 'coupons'); }), "Companies_" + this.getToday(), { showLabels: true });
        }
    };
    GetAllCompaniesComponent.prototype.downloadAllCompanies = function () {
        new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](this.companies.map(function (company) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](company, 'coupons'); }), "Companies_" + this.getToday(), { showLabels: true });
    };
    GetAllCompaniesComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetAllCompaniesComponent.prototype.onCompanyClicked = function (company) {
        if (!this.isCompanyExistInDialogs(company)) {
            this.dialogs.push({ display: true, company: company });
        }
    };
    GetAllCompaniesComponent.prototype.isCompanyExistInDialogs = function (company) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.company === company && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetAllCompaniesComponent.prototype.onPageChanged = function (event) {
        this.companiesPerPage = (event.rows === "All") ? this.companies : this.getCompaniesPerPage(event);
    };
    GetAllCompaniesComponent.prototype.getCompaniesPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.companies, function (company) { return _this.isCompanyInRange(company, event.first, event.first + Number(event.rows)); });
    };
    GetAllCompaniesComponent.prototype.isCompanyInRange = function (company, start, end) {
        return this.companies.indexOf(company) >= start && this.companies.indexOf(company) < end;
    };
    GetAllCompaniesComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetAllCompaniesComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetAllCompaniesComponent.prototype.setActiveCompany = function (company) {
        this.activeCompanyId = this.activeCompanyId !== company.id ? company.id : null;
    };
    GetAllCompaniesComponent.prototype.getCompanyIsActiveIcon = function (company) {
        return this.isActiveCompany(company) ? "fa fa-arrow-down" : "fa fa-arrow-right";
    };
    GetAllCompaniesComponent.prototype.isActiveCompany = function (company) {
        return company.id === this.activeCompanyId;
    };
    GetAllCompaniesComponent.prototype.haveCoupons = function (company) {
        return company.coupons.length !== 0;
    };
    GetAllCompaniesComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    return GetAllCompaniesComponent;
}());
GetAllCompaniesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-all-companies',
        template: __webpack_require__(397),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetAllCompaniesComponent);

var _a, _b;
//# sourceMappingURL=get-all-companies.component.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Services_app_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminService = (function () {
    function AdminService(appService) {
        this.appService = appService;
        this.ADMIN_PATH = "admin/";
        this.metaDataRefresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    AdminService.prototype.refreshData = function () {
        this.companies = undefined;
        this.customers = undefined;
        this.coupons = undefined;
        this.validCoupons = undefined;
        this.loadData();
    };
    AdminService.prototype.loadData = function () {
        var _this = this;
        this.getAllCoupons().subscribe(function (coupons) {
            _this.coupons = coupons;
            _this.setData();
        });
        this.getAllValidCoupons().subscribe(function (validCoupons) {
            _this.validCoupons = validCoupons;
            _this.setData();
        });
        this.getAllCompanies().subscribe(function (companies) {
            _this.companies = companies;
            _this.setData();
        });
        this.getAllCustomers().subscribe(function (customers) {
            _this.customers = customers;
            _this.setData();
        });
    };
    AdminService.prototype.setData = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.coupons) && !__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.validCoupons) && !__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.companies) && !__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.customers)) {
            this.metaDataObj = { coupons: this.coupons, validCoupons: this.validCoupons, companies: this.companies, customers: this.customers };
            this.metaDataRefresh.next();
        }
    };
    AdminService.prototype.createCompany = function (company) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var companyValidation = this.validateCompany(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].CREATE, company);
        if (companyValidation.success) {
            this.appService.post(this.ADMIN_PATH + "create/company", company).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, companyValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.updateCompany = function (company) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var companyValidation = this.validateCompany(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].UPDATE, company);
        if (companyValidation.success) {
            this.appService.put(this.ADMIN_PATH + "update/company", company).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, companyValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.removeCompany = function (company) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var companyValidation = this.validateCompany(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].REMOVE, company);
        if (companyValidation.success) {
            this.appService.delete(this.ADMIN_PATH + "remove/company", company).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, companyValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.getCompany = function (company) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var companyValidation = this.validateCompany(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].GET, company);
        if (companyValidation.success) {
            this.appService.get(this.ADMIN_PATH + ("get/company/" + company.id)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, companyValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.getAllCompanies = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.ADMIN_PATH + "get/all/companies").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    AdminService.prototype.createCustomer = function (customer) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var customerValidation = this.validateCustomer(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].CREATE, customer);
        if (customerValidation.success) {
            this.appService.post(this.ADMIN_PATH + "create/customer", customer).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, customerValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.updateCustomer = function (customer) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var customerValidation = this.validateCustomer(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].UPDATE, customer);
        if (customerValidation.success) {
            this.appService.put(this.ADMIN_PATH + "update/customer", customer).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, customerValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.removeCustomer = function (customer) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var customerValidation = this.validateCustomer(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].REMOVE, customer);
        if (customerValidation.success) {
            this.appService.delete(this.ADMIN_PATH + "remove/customer", customer).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, customerValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.getCustomer = function (customer) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var customerValidation = this.validateCustomer(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].GET, customer);
        if (customerValidation.success) {
            this.appService.get(this.ADMIN_PATH + ("get/customer/" + customer.id)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, customerValidation.result)); });
        }
        return sub;
    };
    AdminService.prototype.getAllCustomers = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.ADMIN_PATH + "get/all/customers").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    AdminService.prototype.getAllValidCoupons = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.ADMIN_PATH + "get/all/valid/coupons").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    AdminService.prototype.getAllCoupons = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.ADMIN_PATH + "get/all/coupons").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    AdminService.prototype.validateCompany = function (type, company) {
        var idValidation;
        var nameValidation;
        var emailValidation;
        var passwordValidation;
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].CREATE:
                idValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                nameValidation = this.validateName(company.compName);
                emailValidation = this.validateEmail(company.email);
                passwordValidation = this.validatePassword(company.password);
                break;
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].UPDATE:
                idValidation = this.validateID(company.id);
                nameValidation = this.validateName(company.compName);
                emailValidation = this.validateEmail(company.email);
                passwordValidation = this.validatePassword(company.password);
                break;
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].REMOVE:
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].GET:
                idValidation = this.validateID(company.id);
                nameValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                emailValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                passwordValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                break;
        }
        if (idValidation.success && nameValidation.success && emailValidation.success && passwordValidation.success) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
        }
        else {
            var errorMessage = "";
            if (!idValidation.success) {
                errorMessage += idValidation.result + "<br>";
            }
            if (!nameValidation.success) {
                errorMessage += nameValidation.result + "<br>";
            }
            if (!emailValidation.success) {
                errorMessage += emailValidation.result + "<br>";
            }
            if (!passwordValidation.success) {
                errorMessage += passwordValidation.result + "<br>";
            }
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, errorMessage);
        }
    };
    AdminService.prototype.validateCustomer = function (type, customer) {
        var idValidation;
        var nameValidation;
        var passwordValidation;
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].CREATE:
                idValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                nameValidation = this.validateName(customer.custName);
                passwordValidation = this.validatePassword(customer.password);
                break;
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].UPDATE:
                idValidation = this.validateID(customer.id);
                nameValidation = this.validateName(customer.custName);
                passwordValidation = this.validatePassword(customer.password);
                break;
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].REMOVE:
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].GET:
                idValidation = this.validateID(customer.id);
                nameValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                passwordValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                break;
        }
        if (idValidation.success && nameValidation.success && passwordValidation.success) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
        }
        else {
            var errorMessage = "";
            if (!idValidation.success) {
                errorMessage += idValidation.result + "<br>";
            }
            if (!nameValidation.success) {
                errorMessage += nameValidation.result + "<br>";
            }
            if (!passwordValidation.success) {
                errorMessage += passwordValidation.result + "<br>";
            }
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, errorMessage);
        }
    };
    AdminService.prototype.validateID = function (id) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](id)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field id is empty");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isFinite"](id) || id < 0 || id % 1 !== 0 || id > 10000) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field id is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    AdminService.prototype.validateName = function (name) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](name)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field name is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    AdminService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](email)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field email is empty");
        }
        else if (!re.test(email)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field email is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    AdminService.prototype.validatePassword = function (password) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](password)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field password is empty");
        }
        else if (password.length < 6) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field password must be 6+ characters");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_Services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_Services_app_service__["a" /* AppService */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllCustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetAllCustomersComponent = (function () {
    function GetAllCustomersComponent(adminService, messageService) {
        this.adminService = adminService;
        this.messageService = messageService;
        this.msgs = [];
        this.customers = [];
        this.customersPerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
    }
    GetAllCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initItems();
        if (this.adminService.metaDataObj) {
            this.customers = this.adminService.metaDataObj.customers.result;
            this.onPageChanged({ first: 0, rows: 10 });
        }
        this.adminService.metaDataRefresh.subscribe(function () {
            _this.customers = _this.adminService.metaDataObj.customers.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetAllCustomersComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            },
            {
                label: 'All Customers', icon: 'fa-database', command: function () {
                    _this.downloadAllCustomers();
                }
            }
        ];
    };
    GetAllCustomersComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.customersPerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.customersPerPage, function (customer) { return new __WEBPACK_IMPORTED_MODULE_5_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(customer, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_4_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (customer) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](customer, 'coupons'); }), "Customers_" + this.getToday(), { showLabels: true });
        }
    };
    GetAllCustomersComponent.prototype.downloadAllCustomers = function () {
        new __WEBPACK_IMPORTED_MODULE_4_angular2_csv_Angular2_csv__["Angular2Csv"](this.customers.map(function (customer) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](customer, 'coupons'); }), "Companies_" + this.getToday(), { showLabels: true });
    };
    GetAllCustomersComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetAllCustomersComponent.prototype.onCustomerClicked = function (customer) {
        if (!this.isCustomerExistInDialogs(customer)) {
            this.dialogs.push({ display: true, customer: customer });
        }
    };
    GetAllCustomersComponent.prototype.isCustomerExistInDialogs = function (customer) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.customer === customer && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetAllCustomersComponent.prototype.onPageChanged = function (event) {
        this.customersPerPage = (event.rows === "All") ? this.customers : this.getCustomersPerPage(event);
    };
    GetAllCustomersComponent.prototype.getCustomersPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.customers, function (customer) { return _this.isCustomerInRange(customer, event.first, event.first + Number(event.rows)); });
    };
    GetAllCustomersComponent.prototype.isCustomerInRange = function (customer, start, end) {
        return this.customers.indexOf(customer) >= start && this.customers.indexOf(customer) < end;
    };
    GetAllCustomersComponent.prototype.onOrderChanged = function (type) {
        this.order = this.order.type === type ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetAllCustomersComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return this.order.reverse === true ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetAllCustomersComponent.prototype.setActiveCustomer = function (customer) {
        this.activeCustomerId = this.activeCustomerId !== customer.id ? customer.id : null;
    };
    GetAllCustomersComponent.prototype.getCustomerIsActiveIcon = function (customer) {
        return this.isActiveCustomer(customer) ? "fa fa-arrow-down" : "fa fa-arrow-right";
    };
    GetAllCustomersComponent.prototype.isActiveCustomer = function (customer) {
        return customer.id === this.activeCustomerId;
    };
    GetAllCustomersComponent.prototype.haveCoupons = function (customer) {
        return customer.coupons.length !== 0;
    };
    GetAllCustomersComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    return GetAllCustomersComponent;
}());
GetAllCustomersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-all-customers',
        template: __webpack_require__(398),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetAllCustomersComponent);

var _a, _b;
//# sourceMappingURL=get-all-customers.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_company__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetCompanyComponent = (function () {
    function GetCompanyComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.imageSelected = "";
        this.displayCoupon = null;
        this.msgs = [];
    }
    GetCompanyComponent.prototype.ngOnInit = function () {
    };
    GetCompanyComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetCompanyComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetCompanyComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.getCompany();
        }
    };
    GetCompanyComponent.prototype.getCompany = function () {
        var _this = this;
        this.msgs = [];
        var companyInput = new __WEBPACK_IMPORTED_MODULE_3_app_core_company__["a" /* Company */](this.companyID, null, null, null, null);
        this.adminService.getCompany(companyInput).subscribe(function (validation) {
            if (validation.success) {
                _this.selectedCompany = validation.result;
                _this.resetInputs();
            }
            else {
                _this.selectedCompany = null;
                _this.msgs.push(_this.messageService.createErrorMessage("Select Company Failed", validation.result));
            }
        });
    };
    GetCompanyComponent.prototype.resetInputs = function () {
        this.companyID = null;
    };
    GetCompanyComponent.prototype.companyIsEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](this.selectedCompany);
    };
    GetCompanyComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetCompanyComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetCompanyComponent.prototype.haveCoupons = function () {
        return this.companyIsEmpty() ? false : this.selectedCompany.coupons.length !== 0;
    };
    GetCompanyComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetCompanyComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetCompanyComponent;
}());
GetCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-company',
        template: __webpack_require__(399),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], GetCompanyComponent);

var _a, _b;
//# sourceMappingURL=get-company.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_core_customer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetCustomerComponent = (function () {
    function GetCustomerComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.imageSelected = "";
        this.displayCoupon = null;
        this.msgs = [];
    }
    GetCustomerComponent.prototype.ngOnInit = function () {
    };
    GetCustomerComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetCustomerComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetCustomerComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.getCustomer();
        }
    };
    GetCustomerComponent.prototype.getCustomer = function () {
        var _this = this;
        this.msgs = [];
        var customerInput = new __WEBPACK_IMPORTED_MODULE_1_app_core_customer__["a" /* Customer */](this.customerID, null, null, null);
        this.adminService.getCustomer(customerInput).subscribe(function (validation) {
            if (validation.success) {
                _this.selectedCustomer = validation.result;
                _this.resetInputs();
            }
            else {
                _this.selectedCustomer = null;
                _this.msgs.push(_this.messageService.createErrorMessage("Select Customer Failed", validation.result));
            }
        });
    };
    GetCustomerComponent.prototype.resetInputs = function () {
        this.customerID = null;
    };
    GetCustomerComponent.prototype.customerIsEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](this.selectedCustomer);
    };
    GetCustomerComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetCustomerComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetCustomerComponent.prototype.haveCoupons = function () {
        return this.customerIsEmpty() ? false : this.selectedCustomer.coupons.length !== 0;
    };
    GetCustomerComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetCustomerComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetCustomerComponent;
}());
GetCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-customer',
        template: __webpack_require__(400),
        styles: [__webpack_require__(292)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], GetCustomerComponent);

var _a, _b;
//# sourceMappingURL=get-customer.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHomeComponent = (function () {
    function AdminHomeComponent(adminService) {
        this.adminService = adminService;
        this.coupons = [];
        this.validCoupons = [];
        this.companies = [];
        this.customers = [];
        this.options = {
            legend: {
                position: 'bottom'
            }
        };
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.adminService.metaDataObj) {
            this.initData();
            this.initChartsData();
        }
        this.adminService.metaDataRefresh.subscribe(function () {
            _this.initData();
            _this.initChartsData();
        });
    };
    AdminHomeComponent.prototype.initData = function () {
        this.coupons = this.adminService.metaDataObj.coupons.result;
        this.validCoupons = this.adminService.metaDataObj.validCoupons.result;
        this.companies = this.adminService.metaDataObj.companies.result;
        this.customers = this.adminService.metaDataObj.customers.result;
    };
    AdminHomeComponent.prototype.initChartsData = function () {
        this.initPieData();
        this.initLineData();
        this.initBarData();
    };
    AdminHomeComponent.prototype.initPieData = function () {
        this.pieData = {
            labels: ['Companies', 'Customers', 'Coupons'],
            datasets: [
                {
                    data: [this.companies.length, this.customers.length, this.coupons.length],
                    backgroundColor: [
                        "#f39c12",
                        "#00a65a",
                        "#dd4b39"
                    ],
                    hoverBackgroundColor: [
                        "#e38a05",
                        "#009649",
                        "#cc382b"
                    ]
                }
            ]
        };
    };
    AdminHomeComponent.prototype.initLineData = function () {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Valid Coupons',
                    data: this.getNumberOfValidCouponsByMonthOfThisYear(),
                    fill: true,
                    borderColor: '#4bc0c0'
                }
            ]
        };
    };
    AdminHomeComponent.prototype.initBarData = function () {
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'New Coupons',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: this.getNumberOfCouponsByMonthOfThisYear()
                },
                {
                    label: 'Expired Coupons',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: this.getNumberOfExpiredCouponsByMonthOfThisYear()
                }
            ]
        };
    };
    AdminHomeComponent.prototype.getNumberOfCouponsByMonthOfThisYear = function () {
        var numberOfCoupons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.coupons.forEach(function (coupon) {
            var startDate = coupon.startDate.toString().split("/");
            if (startDate[2] === new Date().getFullYear().toString()) {
                numberOfCoupons[Number(startDate[1]) - 1]++;
            }
        });
        return numberOfCoupons;
    };
    AdminHomeComponent.prototype.getNumberOfExpiredCouponsByMonthOfThisYear = function () {
        var numberOfExpiredCoupons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.coupons.forEach(function (coupon) {
            var endDate = coupon.endDate.toString().split("/");
            if (endDate[2] === new Date().getFullYear().toString()) {
                numberOfExpiredCoupons[Number(endDate[1]) - 1]++;
            }
        });
        return numberOfExpiredCoupons;
    };
    AdminHomeComponent.prototype.getNumberOfValidCouponsByMonthOfThisYear = function () {
        var numberOfValidCoupons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var numberOfCoupons = this.getNumberOfCouponsByMonthOfThisYear();
        var numberOfExpiredCoupons = this.getNumberOfExpiredCouponsByMonthOfThisYear();
        for (var i = 0; i < 12; i++) {
            if (i === 0) {
                numberOfValidCoupons[i] = numberOfCoupons[i] - numberOfExpiredCoupons[i];
            }
            else {
                numberOfValidCoupons[i] = numberOfValidCoupons[i - 1] + numberOfCoupons[i] - numberOfExpiredCoupons[i];
            }
        }
        return numberOfValidCoupons;
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-home',
        template: __webpack_require__(401),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_admin_service__["a" /* AdminService */]) === "function" && _a || Object])
], AdminHomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_company__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveCompanyComponent = (function () {
    function RemoveCompanyComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.msgs = [];
    }
    RemoveCompanyComponent.prototype.ngOnInit = function () {
    };
    RemoveCompanyComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.removeCompany();
        }
    };
    RemoveCompanyComponent.prototype.removeCompany = function () {
        var _this = this;
        this.msgs = [];
        var company = new __WEBPACK_IMPORTED_MODULE_3_app_core_company__["a" /* Company */](this.companyID, null, null, null, null);
        this.adminService.removeCompany(company).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Company Removed", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Remove Company Failed", validation.result));
            }
        });
    };
    RemoveCompanyComponent.prototype.resetInputs = function () {
        this.companyID = null;
    };
    return RemoveCompanyComponent;
}());
RemoveCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'remove-company',
        template: __webpack_require__(402),
        styles: [__webpack_require__(294)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], RemoveCompanyComponent);

var _a, _b;
//# sourceMappingURL=remove-company.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_customer__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveCustomerComponent = (function () {
    function RemoveCustomerComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.msgs = [];
    }
    RemoveCustomerComponent.prototype.ngOnInit = function () {
    };
    RemoveCustomerComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.removeCustomer();
        }
    };
    RemoveCustomerComponent.prototype.removeCustomer = function () {
        var _this = this;
        this.msgs = [];
        var customer = new __WEBPACK_IMPORTED_MODULE_3_app_core_customer__["a" /* Customer */](this.customerID, null, null, null);
        this.adminService.removeCustomer(customer).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Customer Removed", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Remove Customer Failed", validation.result));
            }
        });
    };
    RemoveCustomerComponent.prototype.resetInputs = function () {
        this.customerID = null;
    };
    return RemoveCustomerComponent;
}());
RemoveCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'remove-customer',
        template: __webpack_require__(403),
        styles: [__webpack_require__(295)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], RemoveCustomerComponent);

var _a, _b;
//# sourceMappingURL=remove-customer.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_company__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateCompanyComponent = (function () {
    function UpdateCompanyComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.msgs = [];
    }
    UpdateCompanyComponent.prototype.ngOnInit = function () {
    };
    UpdateCompanyComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.updateCompany();
        }
    };
    UpdateCompanyComponent.prototype.updateCompany = function () {
        var _this = this;
        this.msgs = [];
        var company = new __WEBPACK_IMPORTED_MODULE_3_app_core_company__["a" /* Company */](this.companyID, this.companyName, this.companyEmail, this.companyPassword, null);
        this.adminService.updateCompany(company).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Company Updated", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Update Company Failed", validation.result));
            }
        });
    };
    UpdateCompanyComponent.prototype.resetInputs = function () {
        this.companyID = null;
        this.companyName = "";
        this.companyEmail = "";
        this.companyPassword = "";
    };
    return UpdateCompanyComponent;
}());
UpdateCompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'update-company',
        template: __webpack_require__(404),
        styles: [__webpack_require__(296)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], UpdateCompanyComponent);

var _a, _b;
//# sourceMappingURL=update-company.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_customer__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateCustomerComponent = (function () {
    function UpdateCustomerComponent(messageService, adminService) {
        this.messageService = messageService;
        this.adminService = adminService;
        this.msgs = [];
    }
    UpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomerComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.updateCustomer();
        }
    };
    UpdateCustomerComponent.prototype.updateCustomer = function () {
        var _this = this;
        this.msgs = [];
        var customer = new __WEBPACK_IMPORTED_MODULE_3_app_core_customer__["a" /* Customer */](this.customerID, this.customerName, this.customerPassword, null);
        this.adminService.updateCustomer(customer).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Customer Updated", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Update Customer Failed", validation.result));
            }
        });
    };
    UpdateCustomerComponent.prototype.resetInputs = function () {
        this.customerID = null;
        this.customerName = "";
        this.customerPassword = "";
    };
    return UpdateCustomerComponent;
}());
UpdateCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'update-customer',
        template: __webpack_require__(405),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], UpdateCustomerComponent);

var _a, _b;
//# sourceMappingURL=update-customer.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Core_coupon__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCouponComponent = (function () {
    function CreateCouponComponent(messageService, companyService) {
        this.messageService = messageService;
        this.companyService = companyService;
        this.types = [];
        this.image = {};
        this.msgs = [];
        this.initItems();
    }
    CreateCouponComponent.prototype.ngOnInit = function () {
    };
    CreateCouponComponent.prototype.initItems = function () {
        this.types.push({ label: "Resturants", value: "RESTURANS" });
        this.types.push({ label: "Electricity", value: "ELECTRICITY" });
        this.types.push({ label: "Food", value: "FOOD" });
        this.types.push({ label: "Health", value: "HEALTH" });
        this.types.push({ label: "Sports", value: "SPORTS" });
        this.types.push({ label: "Camping", value: "CAMPING" });
        this.types.push({ label: "Travelling", value: "TRAVELLING" });
    };
    CreateCouponComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.createCoupon();
        }
    };
    CreateCouponComponent.prototype.onFileUploaded = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            _this.couponImage = fileReader.result;
            _this.image.content = fileReader.result;
            _this.image.name = file.name;
            _this.image.size = file.size / 1000 + " KB";
        };
        fileReader.readAsDataURL(file);
    };
    CreateCouponComponent.prototype.createCoupon = function () {
        var _this = this;
        this.msgs = [];
        var coupon = new __WEBPACK_IMPORTED_MODULE_2_app_Core_coupon__["a" /* Coupon */](0, this.couponTitle, this.couponStartDate, this.couponEndDate, this.couponAmount, this.couponType, this.couponMessage, this.couponPrice, this.couponImage);
        this.companyService.createCoupon(coupon).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Coupon Created", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Create Coupon Failed", validation.result));
            }
        });
    };
    CreateCouponComponent.prototype.resetImageSelected = function () {
        this.imageSelected.nativeElement.value = "";
        this.image = {};
    };
    CreateCouponComponent.prototype.resetInputs = function () {
        this.couponTitle = "";
        this.couponStartDate = null;
        this.couponEndDate = null;
        this.couponAmount = null;
        this.couponType = "";
        this.couponMessage = "";
        this.couponPrice = null;
        this.couponImage = "";
        this.image = {};
    };
    return CreateCouponComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageSelected'),
    __metadata("design:type", Object)
], CreateCouponComponent.prototype, "imageSelected", void 0);
CreateCouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-coupon',
        template: __webpack_require__(406),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _b || Object])
], CreateCouponComponent);

var _a, _b;
//# sourceMappingURL=create-coupon.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllCouponsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetAllCouponsComponent = (function () {
    function GetAllCouponsComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.msgs = [];
        this.coupons = [];
        this.couponsPerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetAllCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initItems();
        if (this.companyService.metaDataObj) {
            this.coupons = this.companyService.metaDataObj.coupons.result;
            this.onPageChanged({ first: 0, rows: 10 });
        }
        this.companyService.metaDataRefresh.subscribe(function () {
            _this.coupons = _this.companyService.metaDataObj.coupons.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetAllCouponsComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            },
            {
                label: 'All Coupons', icon: 'fa-database', command: function () {
                    _this.downloadAllCoupons();
                }
            }
        ];
    };
    GetAllCouponsComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsPerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsPerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetAllCouponsComponent.prototype.downloadAllCoupons = function () {
        new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](this.coupons.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
    };
    GetAllCouponsComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetAllCouponsComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetAllCouponsComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetAllCouponsComponent.prototype.onPageChanged = function (event) {
        this.couponsPerPage = (event.rows === "All") ? this.coupons : this.getCouponsPerPage(event);
    };
    GetAllCouponsComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.coupons, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetAllCouponsComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.coupons.indexOf(coupon) >= start && this.coupons.indexOf(coupon) < end;
    };
    GetAllCouponsComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetAllCouponsComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetAllCouponsComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetAllCouponsComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetAllCouponsComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetAllCouponsComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetAllCouponsComponent;
}());
GetAllCouponsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-all-coupons',
        template: __webpack_require__(407),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetAllCouponsComponent);

var _a, _b;
//# sourceMappingURL=get-all-coupons.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Core_coupon__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetCouponComponent = (function () {
    function GetCouponComponent(messageService, companyService) {
        this.messageService = messageService;
        this.companyService = companyService;
        this.displayCoupon = null;
        this.msgs = [];
    }
    GetCouponComponent.prototype.ngOnInit = function () {
    };
    GetCouponComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.getCoupon();
        }
    };
    GetCouponComponent.prototype.getCoupon = function () {
        var _this = this;
        this.msgs = [];
        var coupon = new __WEBPACK_IMPORTED_MODULE_3_app_Core_coupon__["a" /* Coupon */](this.couponID, null, null, null, 0, null, null, 0, null);
        this.companyService.getCoupon(coupon).subscribe(function (validation) {
            if (validation.success) {
                _this.selectedCoupon = validation.result;
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Select Coupon Failed", validation.result));
            }
        });
    };
    GetCouponComponent.prototype.resetInputs = function () {
        this.couponID = null;
    };
    GetCouponComponent.prototype.couponIsEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](this.selectedCoupon);
    };
    GetCouponComponent.prototype.getImage = function () {
        return this.couponIsEmpty() ? "" : this.selectedCoupon.image;
    };
    return GetCouponComponent;
}());
GetCouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-coupon',
        template: __webpack_require__(408),
        styles: [__webpack_require__(300)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_company_service__["a" /* CompanyService */]) === "function" && _b || Object])
], GetCouponComponent);

var _a, _b;
//# sourceMappingURL=get-coupon.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCouponsByDateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetCouponsByDateComponent = (function () {
    function GetCouponsByDateComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.msgs = [];
        this.couponsByDate = [];
        this.couponsByDatePerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetCouponsByDateComponent.prototype.ngOnInit = function () {
        this.initItems();
    };
    GetCouponsByDateComponent.prototype.onDateChanged = function (event) {
        var _this = this;
        if (!event)
            return;
        this.companyService.getCouponsByDate(event.getTime()).subscribe(function (couponsByDate) {
            _this.couponsByDate = couponsByDate.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetCouponsByDateComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            }
        ];
    };
    GetCouponsByDateComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsByDatePerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByDatePerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetCouponsByDateComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetCouponsByDateComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetCouponsByDateComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetCouponsByDateComponent.prototype.onPageChanged = function (event) {
        this.couponsByDatePerPage = (event.rows === "All") ? this.couponsByDate : this.getCouponsPerPage(event);
    };
    GetCouponsByDateComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByDate, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetCouponsByDateComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.couponsByDate.indexOf(coupon) >= start && this.couponsByDate.indexOf(coupon) < end;
    };
    GetCouponsByDateComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetCouponsByDateComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetCouponsByDateComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetCouponsByDateComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetCouponsByDateComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetCouponsByDateComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetCouponsByDateComponent;
}());
GetCouponsByDateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-coupons-by-date',
        template: __webpack_require__(409),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetCouponsByDateComponent);

var _a, _b;
//# sourceMappingURL=get-coupons-by-date.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCouponsByPriceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetCouponsByPriceComponent = (function () {
    function GetCouponsByPriceComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.msgs = [];
        this.couponsByPrice = [];
        this.couponsByPricePerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetCouponsByPriceComponent.prototype.ngOnInit = function () {
        this.initItems();
    };
    GetCouponsByPriceComponent.prototype.onPriceChanged = function (event) {
        var _this = this;
        this.companyService.getCouponsByPrice(this.price).subscribe(function (couponsByPrice) {
            _this.couponsByPrice = couponsByPrice.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetCouponsByPriceComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            }
        ];
    };
    GetCouponsByPriceComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsByPricePerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByPricePerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetCouponsByPriceComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetCouponsByPriceComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetCouponsByPriceComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetCouponsByPriceComponent.prototype.onPageChanged = function (event) {
        this.couponsByPricePerPage = (event.rows === "All") ? this.couponsByPrice : this.getCouponsPerPage(event);
    };
    GetCouponsByPriceComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByPrice, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetCouponsByPriceComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.couponsByPrice.indexOf(coupon) >= start && this.couponsByPrice.indexOf(coupon) < end;
    };
    GetCouponsByPriceComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetCouponsByPriceComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetCouponsByPriceComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetCouponsByPriceComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetCouponsByPriceComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetCouponsByPriceComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetCouponsByPriceComponent;
}());
GetCouponsByPriceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-coupons-by-price',
        template: __webpack_require__(410),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetCouponsByPriceComponent);

var _a, _b;
//# sourceMappingURL=get-coupons-by-price.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetCouponsByTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetCouponsByTypeComponent = (function () {
    function GetCouponsByTypeComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.types = [];
        this.msgs = [];
        this.couponsByType = [];
        this.couponsByTypePerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetCouponsByTypeComponent.prototype.ngOnInit = function () {
        this.initTypeItems();
        this.initItems();
    };
    GetCouponsByTypeComponent.prototype.initTypeItems = function () {
        this.types.push({ label: "Resturants", value: "RESTURANS" });
        this.types.push({ label: "Electricity", value: "ELECTRICITY" });
        this.types.push({ label: "Food", value: "FOOD" });
        this.types.push({ label: "Health", value: "HEALTH" });
        this.types.push({ label: "Sports", value: "SPORTS" });
        this.types.push({ label: "Camping", value: "CAMPING" });
        this.types.push({ label: "Travelling", value: "TRAVELLING" });
    };
    GetCouponsByTypeComponent.prototype.onTypeChanged = function (event) {
        var _this = this;
        this.companyService.getCouponsByType(event.value).subscribe(function (couponsByType) {
            _this.couponsByType = couponsByType.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetCouponsByTypeComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            }
        ];
    };
    GetCouponsByTypeComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsByTypePerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByTypePerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetCouponsByTypeComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetCouponsByTypeComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetCouponsByTypeComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetCouponsByTypeComponent.prototype.onPageChanged = function (event) {
        this.couponsByTypePerPage = (event.rows === "All") ? this.couponsByType : this.getCouponsPerPage(event);
    };
    GetCouponsByTypeComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByType, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetCouponsByTypeComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.couponsByType.indexOf(coupon) >= start && this.couponsByType.indexOf(coupon) < end;
    };
    GetCouponsByTypeComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetCouponsByTypeComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetCouponsByTypeComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetCouponsByTypeComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetCouponsByTypeComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetCouponsByTypeComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetCouponsByTypeComponent;
}());
GetCouponsByTypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-coupons-by-type',
        template: __webpack_require__(411),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetCouponsByTypeComponent);

var _a, _b;
//# sourceMappingURL=get-coupons-by-type.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyHomeComponent = (function () {
    function CompanyHomeComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.tabItems = [];
        this.dialogs = [];
        this.imageSelected = "";
        this.displayCoupon = null;
        this.msgs = [];
    }
    CompanyHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTabItems();
        if (this.companyService.metaDataObj) {
            this.setValidCouponsByType("RESTURANS");
        }
        this.companyService.metaDataRefresh.subscribe(function () {
            _this.setValidCouponsByType("RESTURANS");
        });
    };
    CompanyHomeComponent.prototype.initTabItems = function () {
        var _this = this;
        this.tabItems.push({ label: "Resturants", command: function () { return _this.setValidCouponsByType("RESTURANS"); } });
        this.tabItems.push({ label: "Electricity", command: function () { return _this.setValidCouponsByType("ELECTRICITY"); } });
        this.tabItems.push({ label: "Food", command: function () { return _this.setValidCouponsByType("FOOD"); } });
        this.tabItems.push({ label: "Health", command: function () { return _this.setValidCouponsByType("HEALTH"); } });
        this.tabItems.push({ label: "Sports", command: function () { return _this.setValidCouponsByType("SPORTS"); } });
        this.tabItems.push({ label: "Camping", command: function () { return _this.setValidCouponsByType("CAMPING"); } });
        this.tabItems.push({ label: "Travelling", command: function () { return _this.setValidCouponsByType("TRAVELLING"); } });
    };
    CompanyHomeComponent.prototype.setValidCouponsByType = function (type) {
        this.validCouponsByType = [];
        var couponsByType = this.companyService.metaDataObj.coupons.result.filter(function (coupon) { return coupon.type === type; });
        while (couponsByType.length > 0) {
            this.validCouponsByType.push(couponsByType.splice(0, 7));
        }
    };
    CompanyHomeComponent.prototype.showCoupon = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    CompanyHomeComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    CompanyHomeComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    CompanyHomeComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return CompanyHomeComponent;
}());
CompanyHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'company-home',
        template: __webpack_require__(412),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], CompanyHomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Core_coupon__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveCouponComponent = (function () {
    function RemoveCouponComponent(messageService, companyService) {
        this.messageService = messageService;
        this.companyService = companyService;
        this.msgs = [];
    }
    RemoveCouponComponent.prototype.ngOnInit = function () {
    };
    RemoveCouponComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.removeCoupon();
        }
    };
    RemoveCouponComponent.prototype.removeCoupon = function () {
        var _this = this;
        this.msgs = [];
        var coupon = new __WEBPACK_IMPORTED_MODULE_3_app_Core_coupon__["a" /* Coupon */](this.couponID, null, null, null, 0, null, null, 0, null);
        this.companyService.removeCoupon(coupon).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Coupon Removed", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Remove Coupon Failed", validation.result));
            }
        });
    };
    RemoveCouponComponent.prototype.resetInputs = function () {
        this.couponID = null;
    };
    return RemoveCouponComponent;
}());
RemoveCouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'remove-coupon',
        template: __webpack_require__(413),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _b || Object])
], RemoveCouponComponent);

var _a, _b;
//# sourceMappingURL=remove-coupon.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Core_coupon__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateCouponComponent = (function () {
    function UpdateCouponComponent(messageService, companyService) {
        this.messageService = messageService;
        this.companyService = companyService;
        this.msgs = [];
    }
    UpdateCouponComponent.prototype.ngOnInit = function () {
    };
    UpdateCouponComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.updateCoupon();
        }
    };
    UpdateCouponComponent.prototype.updateCoupon = function () {
        var _this = this;
        this.msgs = [];
        var coupon = new __WEBPACK_IMPORTED_MODULE_2_app_Core_coupon__["a" /* Coupon */](this.couponID, null, null, this.couponEndDate, this.couponAmount, null, null, this.couponPrice, null);
        this.companyService.updateCoupon(coupon).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Coupon Updated", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Update Coupon Failed", validation.result));
            }
        });
    };
    UpdateCouponComponent.prototype.resetInputs = function () {
        this.couponID = null;
        this.couponEndDate = null;
        this.couponAmount = null;
        this.couponPrice = null;
    };
    return UpdateCouponComponent;
}());
UpdateCouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'update-coupon',
        template: __webpack_require__(414),
        styles: [__webpack_require__(306)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_company_service__["a" /* CompanyService */]) === "function" && _b || Object])
], UpdateCouponComponent);

var _a, _b;
//# sourceMappingURL=update-coupon.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllPurchasedCouponsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetAllPurchasedCouponsComponent = (function () {
    function GetAllPurchasedCouponsComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.msgs = [];
        this.coupons = [];
        this.couponsPerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetAllPurchasedCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initItems();
        if (this.customerService.metaDataObj) {
            this.coupons = this.customerService.metaDataObj.coupons.result;
            this.onPageChanged({ first: 0, rows: 10 });
        }
        this.customerService.metaDataRefresh.subscribe(function () {
            _this.coupons = _this.customerService.metaDataObj.coupons.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetAllPurchasedCouponsComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            },
            {
                label: 'All Coupons', icon: 'fa-database', command: function () {
                    _this.downloadAllCoupons();
                }
            }
        ];
    };
    GetAllPurchasedCouponsComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsPerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsPerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetAllPurchasedCouponsComponent.prototype.downloadAllCoupons = function () {
        new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](this.coupons.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
    };
    GetAllPurchasedCouponsComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetAllPurchasedCouponsComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetAllPurchasedCouponsComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetAllPurchasedCouponsComponent.prototype.onPageChanged = function (event) {
        this.couponsPerPage = (event.rows === "All") ? this.coupons : this.getCouponsPerPage(event);
    };
    GetAllPurchasedCouponsComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.coupons, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetAllPurchasedCouponsComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.coupons.indexOf(coupon) >= start && this.coupons.indexOf(coupon) < end;
    };
    GetAllPurchasedCouponsComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetAllPurchasedCouponsComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetAllPurchasedCouponsComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetAllPurchasedCouponsComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetAllPurchasedCouponsComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetAllPurchasedCouponsComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetAllPurchasedCouponsComponent;
}());
GetAllPurchasedCouponsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-all-purchased-coupons',
        template: __webpack_require__(415),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetAllPurchasedCouponsComponent);

var _a, _b;
//# sourceMappingURL=get-all-purchased-coupons.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetPurchasedCouponsByPriceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetPurchasedCouponsByPriceComponent = (function () {
    function GetPurchasedCouponsByPriceComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.msgs = [];
        this.couponsByPrice = [];
        this.couponsByPricePerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetPurchasedCouponsByPriceComponent.prototype.ngOnInit = function () {
        this.initItems();
        // if (this.companyService.metaDataObj) {
        //   this.couponsByPrice = this.companyService.metaDataObj.couponsByPrice.result;
        //   this.onPageChanged({ first: 0, rows: 10 });
        // }
        // this.companyService.metaDataRefresh.subscribe(() => {
        //   this.couponsByPrice = this.companyService.metaDataObj.couponsByPrice.result;
        //   this.onPageChanged({ first: 0, rows: 10 });
        // });
    };
    GetPurchasedCouponsByPriceComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            }
        ];
    };
    GetPurchasedCouponsByPriceComponent.prototype.onPriceChanged = function (event) {
        var _this = this;
        this.customerService.getPurchasedCouponsByPrice(this.price).subscribe(function (couponsByPrice) {
            _this.couponsByPrice = couponsByPrice.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetPurchasedCouponsByPriceComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsByPricePerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByPricePerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetPurchasedCouponsByPriceComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetPurchasedCouponsByPriceComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetPurchasedCouponsByPriceComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetPurchasedCouponsByPriceComponent.prototype.onPageChanged = function (event) {
        this.couponsByPricePerPage = (event.rows === "All") ? this.couponsByPrice : this.getCouponsPerPage(event);
    };
    GetPurchasedCouponsByPriceComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByPrice, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetPurchasedCouponsByPriceComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.couponsByPrice.indexOf(coupon) >= start && this.couponsByPrice.indexOf(coupon) < end;
    };
    GetPurchasedCouponsByPriceComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetPurchasedCouponsByPriceComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetPurchasedCouponsByPriceComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetPurchasedCouponsByPriceComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetPurchasedCouponsByPriceComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetPurchasedCouponsByPriceComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetPurchasedCouponsByPriceComponent;
}());
GetPurchasedCouponsByPriceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-purchased-coupons-by-price',
        template: __webpack_require__(416),
        styles: [__webpack_require__(308)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetPurchasedCouponsByPriceComponent);

var _a, _b;
//# sourceMappingURL=get-purchased-coupons-by-price.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetPurchasedCouponsByTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetPurchasedCouponsByTypeComponent = (function () {
    function GetPurchasedCouponsByTypeComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.types = [];
        this.msgs = [];
        this.couponsByType = [];
        this.couponsByTypePerPage = [];
        this.order = { type: "id", reverse: false };
        this.dialogs = [];
        this.messageSelected = [""];
        this.imageSelected = "";
        this.displayCoupon = null;
    }
    GetPurchasedCouponsByTypeComponent.prototype.ngOnInit = function () {
        this.initTypeItems();
        this.initItems();
        // if (this.companyService.metaDataObj) {
        //   this.couponsByType = this.companyService.metaDataObj.couponsByType.result;
        //   this.onPageChanged({ first: 0, rows: 10 });
        // }
        // this.companyService.metaDataRefresh.subscribe(() => {
        //   this.couponsByType = this.companyService.metaDataObj.couponsByType.result;
        //   this.onPageChanged({ first: 0, rows: 10 });
        // });
    };
    GetPurchasedCouponsByTypeComponent.prototype.initTypeItems = function () {
        this.types.push({ label: "Resturants", value: "RESTURANS" });
        this.types.push({ label: "Electricity", value: "ELECTRICITY" });
        this.types.push({ label: "Food", value: "FOOD" });
        this.types.push({ label: "Health", value: "HEALTH" });
        this.types.push({ label: "Sports", value: "SPORTS" });
        this.types.push({ label: "Camping", value: "CAMPING" });
        this.types.push({ label: "Travelling", value: "TRAVELLING" });
    };
    GetPurchasedCouponsByTypeComponent.prototype.onTypeChanged = function (event) {
        var _this = this;
        this.customerService.getPurchasedCouponsByType(event.value).subscribe(function (couponsByType) {
            _this.couponsByType = couponsByType.result;
            _this.onPageChanged({ first: 0, rows: 10 });
        });
    };
    GetPurchasedCouponsByTypeComponent.prototype.initItems = function () {
        var _this = this;
        this.items = [
            {
                label: 'This Results', icon: 'fa-filter', command: function () {
                    _this.downloadThisResults();
                }
            }
        ];
    };
    GetPurchasedCouponsByTypeComponent.prototype.downloadThisResults = function () {
        var _this = this;
        this.msgs = [];
        var downlodList;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue)) {
            downlodList = this.couponsByTypePerPage;
        }
        else {
            var filterList = __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByTypePerPage, function (coupon) { return new __WEBPACK_IMPORTED_MODULE_4_app_Pipes_filter_pipe__["a" /* FilterPipe */]().isExist(coupon, _this.filterValue); });
            var sortByList = __WEBPACK_IMPORTED_MODULE_2_underscore__["sortBy"](filterList, this.order.type);
            downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](downlodList)) {
            this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
        }
        else {
            this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](downlodList.map(function (coupon) { return __WEBPACK_IMPORTED_MODULE_2_underscore__["omit"](coupon, 'image'); }), "Coupons_" + this.getToday(), { showLabels: true });
        }
    };
    GetPurchasedCouponsByTypeComponent.prototype.getToday = function () {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (day < 10)
            day = "0" + day;
        if (month < 10)
            month = "0" + month;
        return day + '-' + month + '-' + year;
    };
    GetPurchasedCouponsByTypeComponent.prototype.onCouponClicked = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    GetPurchasedCouponsByTypeComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    GetPurchasedCouponsByTypeComponent.prototype.onPageChanged = function (event) {
        this.couponsByTypePerPage = (event.rows === "All") ? this.couponsByType : this.getCouponsPerPage(event);
    };
    GetPurchasedCouponsByTypeComponent.prototype.getCouponsPerPage = function (event) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["filter"](this.couponsByType, function (coupon) { return _this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)); });
    };
    GetPurchasedCouponsByTypeComponent.prototype.isCouponInRange = function (coupon, start, end) {
        return this.couponsByType.indexOf(coupon) >= start && this.couponsByType.indexOf(coupon) < end;
    };
    GetPurchasedCouponsByTypeComponent.prototype.onOrderChanged = function (type) {
        this.order = (this.order.type === type) ? { type: type, reverse: !this.order.reverse } : { type: type, reverse: false };
    };
    GetPurchasedCouponsByTypeComponent.prototype.getOrderIcon = function (type) {
        if (type === this.order.type) {
            return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
        }
        else {
            return "fa fa-sort fa-lg";
        }
    };
    GetPurchasedCouponsByTypeComponent.prototype.isFilterValueEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.filterValue);
    };
    GetPurchasedCouponsByTypeComponent.prototype.setMessageSelected = function (message) {
        this.messageSelected = message.split("\n");
    };
    GetPurchasedCouponsByTypeComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    GetPurchasedCouponsByTypeComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    return GetPurchasedCouponsByTypeComponent;
}());
GetPurchasedCouponsByTypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-purchased-coupons-by-type',
        template: __webpack_require__(417),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], GetPurchasedCouponsByTypeComponent);

var _a, _b;
//# sourceMappingURL=get-purchased-coupons-by-type.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerHomeComponent = (function () {
    function CustomerHomeComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.tabItems = [];
        this.dialogs = [];
        this.imageSelected = "";
        this.displayCoupon = null;
        this.msgs = [];
    }
    CustomerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTabItems();
        if (this.customerService.metaDataObj) {
            this.setValidCouponsByType("RESTURANS");
        }
        this.customerService.metaDataRefresh.subscribe(function () {
            _this.setValidCouponsByType("RESTURANS");
        });
    };
    CustomerHomeComponent.prototype.initTabItems = function () {
        var _this = this;
        this.tabItems.push({ label: "Resturants", command: function () { return _this.setValidCouponsByType("RESTURANS"); } });
        this.tabItems.push({ label: "Electricity", command: function () { return _this.setValidCouponsByType("ELECTRICITY"); } });
        this.tabItems.push({ label: "Food", command: function () { return _this.setValidCouponsByType("FOOD"); } });
        this.tabItems.push({ label: "Health", command: function () { return _this.setValidCouponsByType("HEALTH"); } });
        this.tabItems.push({ label: "Sports", command: function () { return _this.setValidCouponsByType("SPORTS"); } });
        this.tabItems.push({ label: "Camping", command: function () { return _this.setValidCouponsByType("CAMPING"); } });
        this.tabItems.push({ label: "Travelling", command: function () { return _this.setValidCouponsByType("TRAVELLING"); } });
    };
    CustomerHomeComponent.prototype.setValidCouponsByType = function (type) {
        this.validCouponsByType = [];
        var couponsByType = this.customerService.metaDataObj.validCoupons.result.filter(function (coupon) { return coupon.type === type; });
        while (couponsByType.length > 0) {
            this.validCouponsByType.push(couponsByType.splice(0, 7));
        }
    };
    CustomerHomeComponent.prototype.showCoupon = function (coupon) {
        if (!this.isCouponExistInDialogs(coupon)) {
            this.dialogs.push({ display: true, coupon: coupon });
        }
    };
    CustomerHomeComponent.prototype.isCouponExistInDialogs = function (coupon) {
        var isExist = false;
        this.dialogs.forEach(function (dialog) {
            if (dialog.coupon === coupon && dialog.display === true) {
                isExist = true;
            }
        });
        return isExist;
    };
    CustomerHomeComponent.prototype.getSplitMessage = function (message) {
        return message.split("\n");
    };
    CustomerHomeComponent.prototype.setImageSelected = function (image) {
        this.imageSelected = image;
    };
    CustomerHomeComponent.prototype.purchaseCoupon = function (coupon) {
        var _this = this;
        this.msgs = [];
        this.customerService.purchaseCoupon(coupon).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Coupon Purchased", validation.result));
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Purchase Coupon Failed", validation.result));
            }
        });
    };
    return CustomerHomeComponent;
}());
CustomerHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-home',
        template: __webpack_require__(418),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], CustomerHomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Core_coupon__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseCouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseCouponComponent = (function () {
    function PurchaseCouponComponent(messageService, customerService) {
        this.messageService = messageService;
        this.customerService = customerService;
        this.msgs = [];
    }
    PurchaseCouponComponent.prototype.ngOnInit = function () {
    };
    PurchaseCouponComponent.prototype.onKeyPressed = function (event) {
        if (event.charCode === 13) {
            this.purchaseCoupon();
        }
    };
    PurchaseCouponComponent.prototype.purchaseCoupon = function () {
        var _this = this;
        this.msgs = [];
        var coupon = new __WEBPACK_IMPORTED_MODULE_3_app_Core_coupon__["a" /* Coupon */](this.couponID, null, null, null, 0, null, null, 0, null);
        this.customerService.purchaseCoupon(coupon).subscribe(function (validation) {
            if (validation.success) {
                _this.msgs.push(_this.messageService.createSuccessMessage("Coupon Purchased", validation.result));
                _this.resetInputs();
            }
            else {
                _this.msgs.push(_this.messageService.createErrorMessage("Purchase Coupon Failed", validation.result));
            }
        });
    };
    PurchaseCouponComponent.prototype.resetInputs = function () {
        this.couponID = null;
    };
    return PurchaseCouponComponent;
}());
PurchaseCouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'purchase-coupon',
        template: __webpack_require__(419),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object])
], PurchaseCouponComponent);

var _a, _b;
//# sourceMappingURL=purchase-coupon.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__(46);
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
    function HomeComponent(storage) {
        this.storage = storage;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.type = this.storage.retrieve("type");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(420),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Core_user__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_app_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__ = __webpack_require__(64);
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
    function LoginComponent(appService, messageService) {
        this.appService = appService;
        this.messageService = messageService;
        this.loginSuccessed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.msgs = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_1_app_Core_user__["a" /* User */]("", "", "ADMIN");
        this.types = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initTypeItems();
    };
    LoginComponent.prototype.initTypeItems = function () {
        this.types.push({ label: "Admin", value: "ADMIN" });
        this.types.push({ label: "Company", value: "COMPANY" });
        this.types.push({ label: "Customer", value: "CUSTOMER" });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.msgs = [];
        var validtion = this.validateUser();
        if (validtion.success) {
            this.appService.login(this.user).subscribe(this.onLoginSuccessed.bind(this), this.onLoginFailed.bind(this));
        }
        else {
            this.msgs.push(this.messageService.createErrorMessage("Login Failed", validtion.result));
        }
    };
    LoginComponent.prototype.validateUser = function () {
        var errorMessage = "";
        if (__WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](this.user.name)) {
            errorMessage += "Field name is empty" + "<br>";
        }
        if (__WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](this.user.password)) {
            errorMessage += "Field password is empty" + "<br>";
        }
        if (__WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](this.user.type)) {
            errorMessage += "Field type is empty" + "<br>";
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](__WEBPACK_IMPORTED_MODULE_4_underscore__["isEmpty"](errorMessage), errorMessage);
    };
    LoginComponent.prototype.onLoginSuccessed = function () {
        this.loginSuccessed.emit(this.user);
        this.msgs.push(this.messageService.createSuccessMessage("Login Successed", "Welcome " + this.user.name + " !"));
    };
    LoginComponent.prototype.onLoginFailed = function (error) {
        this.msgs.push(this.messageService.createErrorMessage("Login Failed", error.text()));
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoginComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoginComponent.prototype, "loginSuccessed", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(421),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_message_service__["a" /* MessageService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (values, args) {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isArray"](values) || __WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](args))
            return;
        values.sort(function (a, b) {
            if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isNumber"](a[args.type]) && __WEBPACK_IMPORTED_MODULE_1_underscore__["isNumber"](b[args.type])) {
                return _this.numbersCase(a, b, args);
            }
            else if (_this.isDate(a[args.type]) && _this.isDate(b[args.type])) {
                return _this.datesCase(a, b, args);
            }
            else {
                return _this.stringsCase(a, b, args);
            }
        });
        return values;
    };
    OrderByPipe.prototype.isDate = function (a) {
        var date = a.split("/");
        return (!isNaN(Date.parse(date["1"] + "/" + date["0"] + "/" + date["2"])));
    };
    OrderByPipe.prototype.datesCase = function (a, b, args) {
        if (this.getDateFromString(a[args.type]) < this.getDateFromString(b[args.type])) {
            return args.reverse ? 1 : -1;
        }
        else if (this.getDateFromString(a[args.type]) > this.getDateFromString(b[args.type])) {
            return args.reverse ? -1 : 1;
        }
        else {
            return 0;
        }
    };
    OrderByPipe.prototype.getDateFromString = function (date) {
        var from = date.split("/");
        return new Date(from["1"] + "/" + from["0"] + "/" + from["2"]);
    };
    OrderByPipe.prototype.numbersCase = function (a, b, args) {
        if (a[args.type] < b[args.type]) {
            return args.reverse ? 1 : -1;
        }
        else if (a[args.type] > b[args.type]) {
            return args.reverse ? -1 : 1;
        }
        else {
            return 0;
        }
    };
    OrderByPipe.prototype.stringsCase = function (a, b, args) {
        if (a[args.type].toString().toLowerCase() < b[args.type].toString().toLowerCase()) {
            return args.reverse ? 1 : -1;
        }
        else if (a[args.type].toString().toLowerCase() > b[args.type].toString().toLowerCase()) {
            return args.reverse ? -1 : 1;
        }
        else {
            return 0;
        }
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'orderBy'
    })
], OrderByPipe);

//# sourceMappingURL=order-by.pipe.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Services_customer_service__ = __webpack_require__(37);
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
    function AppComponent(storage, adminService, companyService, customerService) {
        this.storage = storage;
        this.adminService = adminService;
        this.companyService = companyService;
        this.customerService = customerService;
        this.initScroll();
        this.isGuest = this.storage.retrieve("type") === null;
        if (!this.isGuest) {
            this.loadData();
        }
    }
    AppComponent.prototype.onLoginSuccessed = function (user) {
        this.storage.store("name", user.name);
        this.storage.store("type", user.type);
        this.loadData();
        this.isGuest = false;
    };
    AppComponent.prototype.loadData = function () {
        switch (this.storage.retrieve("type")) {
            case "ADMIN":
                this.adminService.loadData();
                break;
            case "COMPANY":
                this.companyService.loadData();
                break;
            case "CUSTOMER":
                this.customerService.loadData();
                break;
        }
    };
    AppComponent.prototype.onUpdated = function () {
        switch (this.storage.retrieve("type")) {
            case "ADMIN":
                this.adminService.refreshData();
                break;
            case "COMPANY":
                this.companyService.refreshData();
                break;
            case "CUSTOMER":
                this.customerService.refreshData();
                break;
        }
    };
    AppComponent.prototype.onLogoutClicked = function () {
        this.storage.clear();
        this.isGuest = true;
    };
    AppComponent.prototype.initScroll = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scroll(function () {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(this).scrollTop() > 100) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.goToTop').fadeIn();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.goToTop').fadeOut();
            }
        });
    };
    AppComponent.prototype.goToTop = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("html, body").animate({ scrollTop: 0 }, 500);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(422),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["b" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_admin_service__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_Services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_Services_company_service__["a" /* CompanyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_Services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_Services_customer_service__["a" /* CustomerService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_webstorage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_material_datepicker__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_Services_app_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_Services_message_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_Services_admin_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_Services_company_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_Services_customer_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Pipes_order_by_pipe__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Pipes_filter_pipe__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Containers_menu_container_menu_container_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Containers_footer_container_footer_container_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Containers_feature_container_feature_container_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Pages_Admin_home_home_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Pages_Admin_create_company_create_company_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Pages_Admin_update_company_update_company_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Pages_Admin_remove_company_remove_company_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Pages_Admin_get_company_get_company_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Pages_Admin_get_all_companies_get_all_companies_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Pages_Admin_create_customer_create_customer_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Pages_Admin_update_customer_update_customer_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Pages_Admin_remove_customer_remove_customer_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Pages_Admin_get_customer_get_customer_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Pages_Admin_get_all_customers_get_all_customers_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Pages_Company_home_home_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Pages_Company_create_coupon_create_coupon_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Pages_Company_update_coupon_update_coupon_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Pages_Company_remove_coupon_remove_coupon_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Pages_Company_get_coupon_get_coupon_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Pages_Company_get_all_coupons_get_all_coupons_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Pages_Company_get_coupons_by_type_get_coupons_by_type_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Pages_Company_get_coupons_by_price_get_coupons_by_price_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Pages_Company_get_coupons_by_date_get_coupons_by_date_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Pages_Customer_home_home_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_app_Pages_Customer_purchase_coupon_purchase_coupon_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_app_Pages_Customer_get_all_purchased_coupons_get_all_purchased_coupons_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_app_Pages_Customer_get_purchased_coupons_by_type_get_purchased_coupons_by_type_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_app_Pages_Customer_get_purchased_coupons_by_price_get_purchased_coupons_by_price_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Pages_login_login_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__Pages_home_home_component__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































































var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_46__Pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'admin/create/company', component: __WEBPACK_IMPORTED_MODULE_21__Pages_Admin_create_company_create_company_component__["a" /* CreateCompanyComponent */] },
    { path: 'admin/update/company', component: __WEBPACK_IMPORTED_MODULE_22__Pages_Admin_update_company_update_company_component__["a" /* UpdateCompanyComponent */] },
    { path: 'admin/remove/company', component: __WEBPACK_IMPORTED_MODULE_23__Pages_Admin_remove_company_remove_company_component__["a" /* RemoveCompanyComponent */] },
    { path: 'admin/get/company', component: __WEBPACK_IMPORTED_MODULE_24__Pages_Admin_get_company_get_company_component__["a" /* GetCompanyComponent */] },
    { path: 'admin/get/all/companies', component: __WEBPACK_IMPORTED_MODULE_25__Pages_Admin_get_all_companies_get_all_companies_component__["a" /* GetAllCompaniesComponent */] },
    { path: 'admin/create/customer', component: __WEBPACK_IMPORTED_MODULE_26__Pages_Admin_create_customer_create_customer_component__["a" /* CreateCustomerComponent */] },
    { path: 'admin/update/customer', component: __WEBPACK_IMPORTED_MODULE_27__Pages_Admin_update_customer_update_customer_component__["a" /* UpdateCustomerComponent */] },
    { path: 'admin/remove/customer', component: __WEBPACK_IMPORTED_MODULE_28__Pages_Admin_remove_customer_remove_customer_component__["a" /* RemoveCustomerComponent */] },
    { path: 'admin/get/customer', component: __WEBPACK_IMPORTED_MODULE_29__Pages_Admin_get_customer_get_customer_component__["a" /* GetCustomerComponent */] },
    { path: 'admin/get/all/customers', component: __WEBPACK_IMPORTED_MODULE_30__Pages_Admin_get_all_customers_get_all_customers_component__["a" /* GetAllCustomersComponent */] },
    { path: 'company/create/coupon', component: __WEBPACK_IMPORTED_MODULE_32__Pages_Company_create_coupon_create_coupon_component__["a" /* CreateCouponComponent */] },
    { path: 'company/update/coupon', component: __WEBPACK_IMPORTED_MODULE_33__Pages_Company_update_coupon_update_coupon_component__["a" /* UpdateCouponComponent */] },
    { path: 'company/remove/coupon', component: __WEBPACK_IMPORTED_MODULE_34__Pages_Company_remove_coupon_remove_coupon_component__["a" /* RemoveCouponComponent */] },
    { path: 'company/get/coupon', component: __WEBPACK_IMPORTED_MODULE_35__Pages_Company_get_coupon_get_coupon_component__["a" /* GetCouponComponent */] },
    { path: 'company/get/all/coupons', component: __WEBPACK_IMPORTED_MODULE_36__Pages_Company_get_all_coupons_get_all_coupons_component__["a" /* GetAllCouponsComponent */] },
    { path: 'company/get/coupons/by/type', component: __WEBPACK_IMPORTED_MODULE_37__Pages_Company_get_coupons_by_type_get_coupons_by_type_component__["a" /* GetCouponsByTypeComponent */] },
    { path: 'company/get/coupons/by/price', component: __WEBPACK_IMPORTED_MODULE_38__Pages_Company_get_coupons_by_price_get_coupons_by_price_component__["a" /* GetCouponsByPriceComponent */] },
    { path: 'company/get/coupons/by/date', component: __WEBPACK_IMPORTED_MODULE_39__Pages_Company_get_coupons_by_date_get_coupons_by_date_component__["a" /* GetCouponsByDateComponent */] },
    { path: 'customer/purchase/coupon', component: __WEBPACK_IMPORTED_MODULE_41_app_Pages_Customer_purchase_coupon_purchase_coupon_component__["a" /* PurchaseCouponComponent */] },
    { path: 'customer/get/all/purchased/coupons', component: __WEBPACK_IMPORTED_MODULE_42_app_Pages_Customer_get_all_purchased_coupons_get_all_purchased_coupons_component__["a" /* GetAllPurchasedCouponsComponent */] },
    { path: 'customer/get/purchased/coupons/by/type', component: __WEBPACK_IMPORTED_MODULE_43_app_Pages_Customer_get_purchased_coupons_by_type_get_purchased_coupons_by_type_component__["a" /* GetPurchasedCouponsByTypeComponent */] },
    { path: 'customer/get/purchased/coupons/by/price', component: __WEBPACK_IMPORTED_MODULE_44_app_Pages_Customer_get_purchased_coupons_by_price_get_purchased_coupons_by_price_component__["a" /* GetPurchasedCouponsByPriceComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__Containers_menu_container_menu_container_component__["a" /* MenuContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__Containers_footer_container_footer_container_component__["a" /* FooterContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__Containers_feature_container_feature_container_component__["a" /* FeatureContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__Pages_Admin_home_home_component__["a" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__Pages_Admin_create_company_create_company_component__["a" /* CreateCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__Pages_Admin_update_company_update_company_component__["a" /* UpdateCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_23__Pages_Admin_remove_company_remove_company_component__["a" /* RemoveCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Pages_Admin_get_company_get_company_component__["a" /* GetCompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Pages_Admin_get_all_companies_get_all_companies_component__["a" /* GetAllCompaniesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__Pages_Admin_create_customer_create_customer_component__["a" /* CreateCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_27__Pages_Admin_update_customer_update_customer_component__["a" /* UpdateCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_28__Pages_Admin_remove_customer_remove_customer_component__["a" /* RemoveCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_29__Pages_Admin_get_customer_get_customer_component__["a" /* GetCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_30__Pages_Admin_get_all_customers_get_all_customers_component__["a" /* GetAllCustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_31__Pages_Company_home_home_component__["a" /* CompanyHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_32__Pages_Company_create_coupon_create_coupon_component__["a" /* CreateCouponComponent */],
            __WEBPACK_IMPORTED_MODULE_33__Pages_Company_update_coupon_update_coupon_component__["a" /* UpdateCouponComponent */],
            __WEBPACK_IMPORTED_MODULE_34__Pages_Company_remove_coupon_remove_coupon_component__["a" /* RemoveCouponComponent */],
            __WEBPACK_IMPORTED_MODULE_35__Pages_Company_get_coupon_get_coupon_component__["a" /* GetCouponComponent */],
            __WEBPACK_IMPORTED_MODULE_36__Pages_Company_get_all_coupons_get_all_coupons_component__["a" /* GetAllCouponsComponent */],
            __WEBPACK_IMPORTED_MODULE_37__Pages_Company_get_coupons_by_type_get_coupons_by_type_component__["a" /* GetCouponsByTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_38__Pages_Company_get_coupons_by_price_get_coupons_by_price_component__["a" /* GetCouponsByPriceComponent */],
            __WEBPACK_IMPORTED_MODULE_39__Pages_Company_get_coupons_by_date_get_coupons_by_date_component__["a" /* GetCouponsByDateComponent */],
            __WEBPACK_IMPORTED_MODULE_40__Pages_Customer_home_home_component__["a" /* CustomerHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_41_app_Pages_Customer_purchase_coupon_purchase_coupon_component__["a" /* PurchaseCouponComponent */],
            __WEBPACK_IMPORTED_MODULE_42_app_Pages_Customer_get_all_purchased_coupons_get_all_purchased_coupons_component__["a" /* GetAllPurchasedCouponsComponent */],
            __WEBPACK_IMPORTED_MODULE_43_app_Pages_Customer_get_purchased_coupons_by_type_get_purchased_coupons_by_type_component__["a" /* GetPurchasedCouponsByTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_44_app_Pages_Customer_get_purchased_coupons_by_price_get_purchased_coupons_by_price_component__["a" /* GetPurchasedCouponsByPriceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Pipes_order_by_pipe__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_16__Pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_45__Pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_46__Pages_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_webstorage__["a" /* Ng2Webstorage */],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PasswordModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FieldsetModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ContextMenuModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabMenuModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SplitButtonModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular2_material_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["LightboxModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10_app_Services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_11_app_Services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_12_app_Services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_13_app_Services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_14_app_Services_customer_service__["a" /* CustomerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Services_app_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyService = (function () {
    function CompanyService(appService) {
        this.appService = appService;
        this.COMPANY_PATH = "company/";
        this.metaDataRefresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CompanyService.prototype.refreshData = function () {
        this.coupons = undefined;
        this.loadData();
    };
    CompanyService.prototype.loadData = function () {
        var _this = this;
        this.getAllCoupons().subscribe(function (coupons) {
            _this.coupons = coupons;
            _this.setData();
        });
    };
    CompanyService.prototype.setData = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.coupons)) {
            this.metaDataObj = { coupons: this.coupons };
            this.metaDataRefresh.next();
        }
    };
    CompanyService.prototype.createCoupon = function (coupon) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var couponValidation = this.validateCoupon(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].CREATE, coupon);
        if (couponValidation.success) {
            this.appService.post(this.COMPANY_PATH + "create/coupon", coupon).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, couponValidation.result)); });
        }
        return sub;
    };
    CompanyService.prototype.updateCoupon = function (coupon) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var couponValidation = this.validateCoupon(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].UPDATE, coupon);
        if (couponValidation.success) {
            this.appService.put(this.COMPANY_PATH + "update/coupon", coupon).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, couponValidation.result)); });
        }
        return sub;
    };
    CompanyService.prototype.removeCoupon = function (coupon) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var couponValidation = this.validateCoupon(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].REMOVE, coupon);
        if (couponValidation.success) {
            this.appService.delete(this.COMPANY_PATH + "remove/coupon", coupon).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, couponValidation.result)); });
        }
        return sub;
    };
    CompanyService.prototype.getCoupon = function (coupon) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var couponValidation = this.validateCoupon(__WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].GET, coupon);
        if (couponValidation.success) {
            this.appService.get(this.COMPANY_PATH + ("get/coupon/" + coupon.id)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, couponValidation.result)); });
        }
        return sub;
    };
    CompanyService.prototype.getAllCoupons = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.COMPANY_PATH + "get/all/coupons").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    CompanyService.prototype.getCouponsByType = function (type) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.COMPANY_PATH + ("get/coupons/by/type/" + type)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    CompanyService.prototype.getCouponsByPrice = function (price) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        if (this.validatePrice(price).success) {
            this.appService.get(this.COMPANY_PATH + ("get/coupons/by/price/" + price)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        return sub;
    };
    CompanyService.prototype.getCouponsByDate = function (date) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        if (this.validateEndDate(new Date(date)).success) {
            this.appService.get(this.COMPANY_PATH + ("get/coupons/by/date/" + date)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        return sub;
    };
    CompanyService.prototype.validateCoupon = function (type, coupon) {
        var idValidation;
        var titleValidation;
        var startDateValidation;
        var endDateValidation;
        var rangeDatesValidation;
        var amountValidation;
        var typeValidation;
        var messageValidation;
        var priceValidation;
        var imageValidation;
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].CREATE:
                idValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                titleValidation = this.validateTitle(coupon.title);
                startDateValidation = this.validateStartDate(coupon.startDate);
                endDateValidation = this.validateEndDate(coupon.endDate);
                rangeDatesValidation = this.validateRangeDates(coupon.startDate, coupon.endDate);
                amountValidation = this.validateAmount(coupon.amount);
                typeValidation = this.validateType(coupon.type);
                messageValidation = this.validateMessage(coupon.message);
                priceValidation = this.validatePrice(coupon.price);
                imageValidation = this.validateImage(coupon.image);
                break;
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].UPDATE:
                idValidation = this.validateID(coupon.id);
                titleValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                startDateValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                endDateValidation = this.validateEndDate(coupon.endDate);
                rangeDatesValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                amountValidation = this.validateAmount(coupon.amount);
                typeValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                messageValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                priceValidation = this.validatePrice(coupon.price);
                imageValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                break;
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].REMOVE:
            case __WEBPACK_IMPORTED_MODULE_6_app_Core_operation_type_enum__["a" /* OperationType */].GET:
                idValidation = this.validateID(coupon.id);
                titleValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                startDateValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                endDateValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                rangeDatesValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                amountValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                typeValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                messageValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                priceValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                imageValidation = new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
                break;
        }
        if (idValidation.success && titleValidation.success && startDateValidation.success
            && endDateValidation.success && rangeDatesValidation.success && amountValidation.success && typeValidation.success
            && messageValidation.success && priceValidation.success && imageValidation.success) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
        }
        else {
            var errorMessage = "";
            if (!idValidation.success) {
                errorMessage += idValidation.result + "<br>";
            }
            if (!titleValidation.success) {
                errorMessage += titleValidation.result + "<br>";
            }
            if (!typeValidation.success) {
                errorMessage += typeValidation.result + "<br>";
            }
            if (!startDateValidation.success) {
                errorMessage += startDateValidation.result + "<br>";
            }
            if (!endDateValidation.success) {
                errorMessage += endDateValidation.result + "<br>";
            }
            if (startDateValidation.success && endDateValidation.success && !rangeDatesValidation.success) {
                errorMessage += rangeDatesValidation.result + "<br>";
            }
            if (!amountValidation.success) {
                errorMessage += amountValidation.result + "<br>";
            }
            if (!priceValidation.success) {
                errorMessage += priceValidation.result + "<br>";
            }
            if (!messageValidation.success) {
                errorMessage += messageValidation.result + "<br>";
            }
            if (!imageValidation.success) {
                errorMessage += imageValidation.result + "<br>";
            }
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, errorMessage);
        }
    };
    CompanyService.prototype.validateID = function (id) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](id)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field id is empty");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isFinite"](id) || id < 0 || id % 1 !== 0 || id > 10000) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field id is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateTitle = function (title) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](title)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field title is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateStartDate = function (startDate) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](startDate)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field start date is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateEndDate = function (endDate) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](endDate)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field end date is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateRangeDates = function (startDate, endDate) {
        if (startDate > endDate) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "The range between dates is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateAmount = function (amount) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](amount)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field amount is empty");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isFinite"](amount) || amount < 0 || amount % 1 !== 0 || amount > 1000000) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field amount is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateType = function (type) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](type)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field type is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateMessage = function (message) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](message)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field message is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validatePrice = function (price) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](price)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field price is empty");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isFinite"](price) || price < 0 || price > 1000000) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field price is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    CompanyService.prototype.validateImage = function (image) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](image)) {
            return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](false, "Field image is empty");
        }
        return new __WEBPACK_IMPORTED_MODULE_5_app_Core_validation__["a" /* Validation */](true);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_Services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_Services_app_service__["a" /* AppService */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, args) {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isArray"](values) || __WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](args))
            return values;
        return values.filter(function (value) {
            return _this.isExist(value, args);
        });
    };
    FilterPipe.prototype.isExist = function (value, args) {
        var exist = false;
        __WEBPACK_IMPORTED_MODULE_1_underscore__["keys"](value).forEach(function (key) {
            if (key !== "coupons" && key !== "image" && value[key].toString().indexOf(args) !== -1) {
                exist = true;
            }
        });
        return exist;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".feature {\r\n    margin: auto;\r\n    padding: 10px;\r\n    width: 1000px;\r\n    background-color: #00005c;\r\n}\r\n\r\n.feature table {\r\n    width: 100%;\r\n}\r\n\r\n.feature h1, h3 {\r\n    color: white;\r\n}\r\n\r\n.feature .refresh { \r\n    -webkit-transform: translateY(65%); \r\n            transform: translateY(65%); \r\n    color: white; \r\n}\r\n\r\n.feature .refresh button {\r\n    border: transparent; \r\n    background: transparent; \r\n    cursor: pointer;\r\n    outline: none;\r\n    color: white; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".footerblurb {\r\n    margin: auto;\r\n    width: 1000px;\r\n    padding: 10px;\r\n    background: white;\r\n    border-bottom-right-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    width: 250px;\r\n    padding: 0px 41.6px;\r\n}\r\n\r\n.column .yellow {\r\n    background-color: #f39c12;\r\n    border-radius: 5px;\r\n}\r\n\r\n.column .green {\r\n    background-color: #00a65a;\r\n    border-radius: 5px;\r\n}\r\n\r\n.column .red {\r\n    background-color: #dd4b39;\r\n    border-radius: 5px;\r\n}\r\n\r\n.box {\r\n    padding: 0px 16px;\r\n    color: white;\r\n    font-size: 20px;\r\n    height: 120px;\r\n    cursor: default;\r\n}\r\n\r\n.box .box-content {\r\n    width: 170px;\r\n}\r\n\r\n.box img {\r\n    height: 80px;\r\n    width: 80px;\r\n}\r\n\r\n.box:hover img {\r\n    transition: 0.7s;\r\n    height: 100px;\r\n    width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".side-bar {\r\n    float: left;\r\n    width: 200px;\r\n    border-bottom-right-radius: 30px;\r\n    background-color: #d3d3f9;\r\n}\r\n\r\n.side-bar .widget {\r\n    padding: 8px 8px 8px 16px;\r\n    line-height: 1.4em;\r\n}\r\n\r\n.side-bar .widget ul {\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n\r\n.side-bar .widget ul li {\r\n    padding: 4px 0px;\r\n}\r\n\r\n.side-bar .widget ul li a {\r\n    color: darkblue;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n}\r\n\r\n.side-bar .widget ul li a:hover {\r\n    color: #00005c;\r\n    padding-left: 8px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.side-bar .widget .logout {\r\n    color: red;\r\n}\r\n\r\n.side-bar .widget .logout:hover {\r\n    color: #e00000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".couponTitle {\r\n    text-align: center;\r\n    display: inline-block;\r\n    width: 100px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: medium;\r\n}\r\n\r\n.couponImage {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".data-table span {\r\n    max-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".couponTitle {\r\n    text-align: center;\r\n    display: inline-block;\r\n    width: 100px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: medium;\r\n}\r\n\r\n.container:hover .purchase {\r\n    display: block;\r\n}\r\n\r\n.container {\r\n  width: 100px;\r\n  height: 100px;\r\n  position: relative;\r\n}\r\n\r\n.purchase {\r\n  width: 100%;\r\n  height: 23px;\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 1;\r\n  top: 80px;\r\n  color: rgb(84, 100, 105);\r\n  background-color: rgba(230, 230, 250, 0.57);\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.purchase:hover {\r\n  color: red;\r\n  font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Services_app_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerService = (function () {
    function CustomerService(appService) {
        this.appService = appService;
        this.CUSTOMER_PATH = "customer/";
        this.metaDataRefresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CustomerService.prototype.refreshData = function () {
        this.validCoupons = undefined;
        this.coupons = undefined;
        this.loadData();
    };
    CustomerService.prototype.loadData = function () {
        var _this = this;
        this.getAllValidCoupons().subscribe(function (validCoupons) {
            _this.validCoupons = validCoupons;
            _this.setData();
        });
        this.getAllPurchasedCoupons().subscribe(function (coupons) {
            _this.coupons = coupons;
            _this.setData();
        });
    };
    CustomerService.prototype.setData = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.validCoupons) && !__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](this.coupons)) {
            this.metaDataObj = { validCoupons: this.validCoupons, coupons: this.coupons };
            this.metaDataRefresh.next();
        }
    };
    CustomerService.prototype.purchaseCoupon = function (coupon) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var idValidation = this.validateID(coupon.id);
        if (idValidation.success) {
            this.appService.post(this.CUSTOMER_PATH + "purchase/coupon", coupon).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        else {
            setTimeout(function () { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, idValidation.result)); });
        }
        return sub;
    };
    CustomerService.prototype.getAllValidCoupons = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.CUSTOMER_PATH + "get/all/valid/coupons").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    CustomerService.prototype.getAllPurchasedCoupons = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.CUSTOMER_PATH + "get/all/purchased/coupons").subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    CustomerService.prototype.getPurchasedCouponsByType = function (type) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.appService.get(this.CUSTOMER_PATH + ("get/purchased/coupons/by/type/" + type)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, error.json())); });
        return sub;
    };
    CustomerService.prototype.getPurchasedCouponsByPrice = function (price) {
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        if (this.validatePrice(price).success) {
            this.appService.get(this.CUSTOMER_PATH + ("get/purchased/coupons/by/price/" + price)).subscribe(function (result) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true, result)); }, function (error) { return sub.next(new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, error.json())); });
        }
        return sub;
    };
    CustomerService.prototype.validateID = function (id) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](id)) {
            return new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, "Field id is empty");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isFinite"](id) || id < 0 || id % 1 !== 0 || id > 10000) {
            return new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, "Field id is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true);
    };
    CustomerService.prototype.validatePrice = function (price) {
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["isUndefined"](price)) {
            return new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, "Field price is empty");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isFinite"](price) || price < 0 || price > 1000000) {
            return new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](false, "Field price is invalid");
        }
        return new __WEBPACK_IMPORTED_MODULE_4_app_Core_validation__["a" /* Validation */](true);
    };
    return CustomerService;
}());
CustomerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_Services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_Services_app_service__["a" /* AppService */]) === "function" && _a || Object])
], CustomerService);

var _a;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<div class=\"feature\">\n  <table>\n    <tr>\n      <td style=\"float: left\">\n        <h1>{{clientType}}</h1>\n      </td>\n      <td style=\"float: right\">\n        <div class=\"refresh\">\n          <span>Update App</span>\n          <button (click)=\"update()\"><i class=\"fa fa-refresh\"></i></button>\n        </div>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div class=\"footerblurb\">\n  <div class=\"column\" *ngFor=\"let footerItem of footerItems\">\n    <div [class]=\"footerItem.color\">\n      <table class=\"box\">\n        <tr>\n          <td class=\"box-content\">\n            <h2>{{footerItem.number}}</h2>\n            <p>{{footerItem.name}}</p>\n          </td>\n          <td>\n            <img [src]=\"footerItem.imageUrl\" [alt]=\"footerItem.imageAlt\">\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div class=\"clr\"></div>\n</div>"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<nav class=\"side-bar\">\n  <div class=\"widget\">\n    <ul>\n      <li *ngFor=\"let menuItem of menuItems\"><a [routerLink]=\"menuItem.url\" (click)=\"onMenuItemClick(menuItem)\"><b [class]=\"getMenuItemClass(menuItem)\">{{menuItem.name}}</b></a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n    <h1>Create Company</h1>\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Name:\" pTooltip=\"Enter Company Name\" tooltipEvent=\"focus\" [(ngModel)]=\"companyName\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Email:\" pTooltip=\"Enter Company Email\" tooltipEvent=\"focus\" [(ngModel)]=\"companyEmail\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pPassword placeholder=\"Password:\" [promptLabel]=\"null\" pTooltip=\"Enter Company Password\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"companyPassword\" (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Create\" (click)=\"createCompany()\"></button>\n</div>"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n    <h1>Create Customer</h1>\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Name:\" pTooltip=\"Enter Customer Name\" tooltipEvent=\"focus\" [(ngModel)]=\"customerName\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pPassword placeholder=\"Password:\" [promptLabel]=\"null\" pTooltip=\"Enter Customer Password\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"customerPassword\" (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Create\" (click)=\"createCustomer()\"></button>\n</div>"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Company\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.company.id}}\n  <br>\n  <b>Name:</b> {{dialog.company.compName}}\n  <br>\n  <b>Email:</b> {{dialog.company.email}}\n  <br>\n  <b>Password:</b> {{dialog.company.password}}\n  <br>\n  <b>Coupons:</b> {{dialog.company.coupons.length}}\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"data-table\">\n  <h1>Companies - {{companies.length}}</h1>\n  <div class=\"search\">\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n      [(ngModel)]=\"filterValue\" />\n    <br />\n    <b [hidden]=\"isFilterValueEmpty()\">{{(companiesPerPage | filter: filterValue).length}}  Results</b>\n  </div>\n  <br>\n  <table>\n    <thead>\n      <tr>\n        <th>\n          <span>S / H</span>\n        </th>\n        <th (click)=\"onOrderChanged('id')\">\n          <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('compName')\">\n          <span>Name&nbsp;&nbsp;<i [class]=\"getOrderIcon('compName')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('email')\">\n          <span>Email&nbsp;&nbsp;<i [class]=\"getOrderIcon('email')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('password')\">\n          <span>Password&nbsp;&nbsp;<i [class]=\"getOrderIcon('password')\"></i></span>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let company of companiesPerPage | filter: filterValue | orderBy: order\">\n      <tr>\n        <td (click)=\"setActiveCompany(company)\">\n          <span [class]=\"getCompanyIsActiveIcon(company)\"></span>\n        </td>\n        <td (click)=\"onCompanyClicked(company)\">\n          <span>{{company.id}}</span>\n        </td>\n        <td (click)=\"onCompanyClicked(company)\">\n          <span>{{company.compName}}</span>\n        </td>\n        <td (click)=\"onCompanyClicked(company)\">\n          <span>{{company.email}}</span>\n        </td>\n        <td (click)=\"onCompanyClicked(company)\">\n          <span>{{company.password}}</span>\n        </td>\n      </tr>\n      <tr [hidden]=\"!isActiveCompany(company)\">\n        <td colspan=\"5\">\n          <h3>Coupons - {{company.coupons.length}}</h3>\n          <table [hidden]=\"!haveCoupons(company)\">\n            <tr>\n              <th>\n                ID\n              </th>\n              <th>\n                Title\n              </th>\n              <th>\n                Price\n              </th>\n            </tr>\n            <tr *ngFor=\"let coupon of company.coupons\">\n              <td>\n                {{coupon.id}}\n              </td>\n              <td>\n                {{coupon.title}}\n              </td>\n              <td>\n                {{coupon.price}}\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p-paginator rows=\"10\" [totalRecords]=\"companies.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n  (onPageChange)=\"onPageChanged($event)\"></p-paginator>"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Customer\" [(visible)]=\"dialog.display\">\n    <b>ID:</b> {{dialog.customer.id}} \n    <br>\n    <b>Name:</b> {{dialog.customer.custName}} \n    <br>\n    <b>Password:</b> {{dialog.customer.password}}\n    <br>\n    <b>Coupons:</b> {{dialog.customer.coupons.length}}\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"data-table\">\n  <h1>Customers - {{customers.length}}</h1>\n  <div class=\"search\">\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\" [(ngModel)]=\"filterValue\"/>\n    <br />\n    <b [hidden]=\"isFilterValueEmpty()\">{{(customersPerPage | filter: filterValue).length}}  Results</b>\n  </div>\n  <br>\n  <table>\n    <thead>\n      <tr>\n        <th>\n          <span>S / H</span>\n        </th>\n        <th (click)=\"onOrderChanged('id')\">\n          <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('custName')\">\n          <span>Name&nbsp;&nbsp;<i [class]=\"getOrderIcon('custName')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('password')\">\n          <span>Password&nbsp;&nbsp;<i [class]=\"getOrderIcon('password')\"></i></span>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let customer of customersPerPage | filter: filterValue | orderBy: order\">\n      <tr>\n        <td (click)=\"setActiveCustomer(customer)\">\n          <span [class]=\"getCustomerIsActiveIcon(customer)\"></span>\n        </td>\n        <td (click)=\"onCustomerClicked(customer)\">\n          <span>{{customer.id}}</span>\n        </td>\n        <td (click)=\"onCustomerClicked(customer)\">\n          <span>{{customer.custName}}</span>\n        </td>\n        <td (click)=\"onCustomerClicked(customer)\">\n          <span>{{customer.password}}</span>\n        </td>\n      </tr>\n      <tr [hidden]=\"!isActiveCustomer(customer)\">\n        <td colspan=\"4\">\n          <h3>Coupons - {{customer.coupons.length}}</h3>\n          <table [hidden]=\"!haveCoupons(customer)\">\n            <tr>\n              <th>\n                ID\n              </th>\n              <th>\n                Title\n              </th>\n              <th>\n                Price\n              </th>\n            </tr>\n            <tr *ngFor=\"let coupon of customer.coupons\">\n              <td>\n                {{coupon.id}}\n              </td>\n              <td>\n                {{coupon.title}}\n              </td>\n              <td>\n                {{coupon.price}}\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p-paginator rows=\"10\" [totalRecords]=\"customers.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\" (onPageChange)=\"onPageChanged($event)\"></p-paginator>"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}} <i class=\"fa fa-ils\"></i>\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<div class=\"query-box\">\n    <h1>Get Company</h1>\n    <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Company ID\" tooltipEvent=\"focus\" [(ngModel)]=\"companyID\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Get\" (click)=\"getCompany()\"></button>\n</div>\n<div class=\"data-component\" *ngIf=\"!companyIsEmpty()\">\n    <h2><i class=\"fa fa-key\"></i> ID: <span>{{selectedCompany.id}}</span></h2>\n    <h2><i class=\"fa fa-user\"></i> Name: <span>{{selectedCompany.compName}}</span></h2>\n    <h2><i class=\"fa fa-envelope\"></i> Email: <span>{{selectedCompany.email}}</span></h2>\n    <h2><i class=\"fa fa-lock\"></i> Password: <span>{{selectedCompany.password}}</span></h2>\n    <p-fieldset legend=\"Coupons ({{selectedCompany.coupons.length}})\" [toggleable]=\"true\" [collapsed]=\"true\">\n        <h2 [hidden]=\"haveCoupons()\"><i class=\"fa fa-exclamation-circle | error\"></i>No Coupons</h2>\n        <div class=\"data-table\" [hidden]=\"!haveCoupons()\">\n            <table>\n                <thead>\n                    <tr>\n                        <th (click)=\"onOrderChanged('id')\">\n                            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n                        </th>\n                        <th (click)=\"onOrderChanged('title')\">\n                            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n                        </th>\n                        <th (click)=\"onOrderChanged('price')\">\n                            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let coupon of selectedCompany.coupons | orderBy: order\" (click)=\"onCouponClicked(coupon)\">\n                    <tr>\n                        <td>\n                            {{coupon.id}}\n                        </td>\n                        <td>\n                            {{coupon.title}}\n                        </td>\n                        <td>\n                            {{coupon.price}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </p-fieldset>\n</div>"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}} <i class=\"fa fa-ils\"></i>\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<div class=\"query-box\">\n    <h1>Get Customer</h1>\n    <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Customer ID\" tooltipEvent=\"focus\" [(ngModel)]=\"customerID\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Get\" (click)=\"getCustomer()\"></button>\n</div>\n<div class=\"data-component\" *ngIf=\"!customerIsEmpty()\">\n    <h2><i class=\"fa fa-key\"></i> ID: <span>{{selectedCustomer.id}}</span></h2>\n    <h2><i class=\"fa fa-user\"></i> Name: <span>{{selectedCustomer.custName}}</span></h2>\n    <h2><i class=\"fa fa-lock\"></i> Password: <span>{{selectedCustomer.password}}</span></h2>\n    <p-fieldset legend=\"Coupons ({{selectedCustomer.coupons.length}})\" [toggleable]=\"true\" [collapsed]=\"true\">\n        <h2 [hidden]=\"haveCoupons()\"><i class=\"fa fa-exclamation-circle | error\"></i>No Coupons</h2>\n        <div class=\"data-table\" [hidden]=\"!haveCoupons()\">\n            <table>\n                <thead>\n                    <tr>\n                        <th (click)=\"onOrderChanged('id')\">\n                            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n                        </th>\n                        <th (click)=\"onOrderChanged('title')\">\n                            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n                        </th>\n                        <th (click)=\"onOrderChanged('price')\">\n                            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let coupon of selectedCustomer.coupons | orderBy: order\" (click)=\"onCouponClicked(coupon)\">\n                    <tr>\n                        <td>\n                            {{coupon.id}}\n                        </td>\n                        <td>\n                            {{coupon.title}}\n                        </td>\n                        <td>\n                            {{coupon.price}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </p-fieldset>\n</div>"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<table style=\"width: 100%\">\r\n    <tr>\r\n        <td style=\"width: 50%\">\r\n            <p-chart type=\"pie\" height=\"300px\" [options]=\"options\" [data]=\"pieData\"></p-chart>\r\n        </td>\r\n        <td style=\"width: 50%\">\r\n            <p-chart type=\"line\" height=\"300px\" [options]=\"options\" [data]=\"lineData\"></p-chart>    \r\n        </td>\r\n    </tr>\r\n    <br>\r\n    <tr>\r\n        <td colspan=\"2\" style=\"width: 100%\">\r\n            <p-chart type=\"bar\" [options]=\"options\" [data]=\"barData\"></p-chart>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n    <h1>Remove Company</h1>\n    <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Company ID\" tooltipEvent=\"focus\" [(ngModel)]=\"companyID\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Remove\" (click)=\"removeCompany()\"></button>\n</div>"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n    <h1>Remove Customer</h1>\n    <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Customer ID\" tooltipEvent=\"focus\" [(ngModel)]=\"customerID\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Remove\" (click)=\"removeCustomer()\"></button>\n</div>"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n    <h1>Update Company</h1>\n    <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Company ID\" tooltipEvent=\"focus\" [(ngModel)]=\"companyID\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Name:\" pTooltip=\"Enter Company Name\" tooltipEvent=\"focus\" [(ngModel)]=\"companyName\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Email:\" pTooltip=\"Enter Company Email\" tooltipEvent=\"focus\" [(ngModel)]=\"companyEmail\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pPassword placeholder=\"Password:\" [promptLabel]=\"null\" pTooltip=\"Enter Company Password\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"companyPassword\" (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Update\" (click)=\"updateCompany()\"></button>\n</div>"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n    <h1>Update Customer</h1>\n    <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Customer ID\" tooltipEvent=\"focus\" [(ngModel)]=\"customerID\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Name:\" pTooltip=\"Enter Customer Name\" tooltipEvent=\"focus\" [(ngModel)]=\"customerName\"\n        (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <input type=\"text\" maxlength=\"50\" pPassword placeholder=\"Password:\" [promptLabel]=\"null\" pTooltip=\"Enter Customer Password\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"customerPassword\" (keypress)=\"onKeyPressed($event)\" />\n    <br><br>\n    <button pButton type=\"button\" label=\"Update\" (click)=\"updateCustomer()\"></button>\n</div>"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n  <h1>Create Coupon</h1>\n  <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Title:\" pTooltip=\"Enter Coupon Title\" tooltipEvent=\"focus\" [(ngModel)]=\"couponTitle\"\n    (keypress)=\"onKeyPressed($event)\" />\n  <br /><br />\n  <p-dropdown [options]=\"types\" placeholder=\"Type:\" [(ngModel)]=\"couponType\"></p-dropdown>\n  <br /><br />\n  <material-datepicker [(date)]=\"couponStartDate\" placeholder=\"Start Date:\" dateFormat=\"DD-MM-YYYY\"></material-datepicker>\n  <br /><br />\n  <material-datepicker [(date)]=\"couponEndDate\" placeholder=\"End  Date:\" dateFormat=\"DD-MM-YYYY\"></material-datepicker>\n  <br /><br />\n  <table style=\"width: 100%\">\n    <tr>\n      <td style=\"width: 50%\">\n        <input type=\"number\" pInputText placeholder=\"Amount:\" min=\"0\" max=\"1000000\" pTooltip=\"Enter Coupon Amount\" tooltipEvent=\"focus\"\n          [(ngModel)]=\"couponAmount\" (keypress)=\"onKeyPressed($event)\" />\n      </td>\n      <td style=\"width: 50%\">\n        <input type=\"number\" pInputText placeholder=\"Price:\" min=\"0\" max=\"1000000\" pTooltip=\"Enter Coupon Price\" tooltipEvent=\"focus\"\n          [(ngModel)]=\"couponPrice\" (keypress)=\"onKeyPressed($event)\" />\n      </td>\n    </tr>\n  </table>\n  <br>\n  <textarea pInputTextarea maxlength=\"500\" autoResize=\"autoResize\" placeholder=\"Message:\" pTooltip=\"Enter Coupon Message\" tooltipEvent=\"focus\"\n    [(ngModel)]=\"couponMessage\"></textarea>\n  <br /><br />\n  <div [hidden]=\"image.content\">\n    <input #imageSelected type=\"file\" accept=\"image/*\" class=\"custom-file-input\" title=\"&nbsp;\" (change)=\"onFileUploaded($event)\"\n    />\n    <br />\n  </div>\n  <div *ngIf=\"image.content\">\n    <table>\n      <tr>\n        <td>\n          <img [src]=\"image.content\" width=\"50px\" height=\"50px\" />\n        </td>\n        <td style=\"width: 100%\">\n          <b>Name: </b>{{image.name}}<br>\n          <b>Size: </b>{{image.size}}\n        </td>\n        <td>\n          <button class=\"refresh\" (click)=\"resetImageSelected()\"><i class=\"fa fa-refresh\"></i></button>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <br />\n  <button pButton type=\"button\" label=\"Create\" (click)=\"createCoupon()\"></button>\n</div>"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n      <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"data-table\">\n  <h1>Coupons - {{coupons.length}}</h1>\n  <div class=\"search\">\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n      [(ngModel)]=\"filterValue\" />\n    <br />\n    <b [hidden]=\"isFilterValueEmpty()\">{{(couponsPerPage | filter: filterValue).length}}  Results</b>\n  </div>\n  <br>\n  <table>\n    <thead>\n      <tr>\n        <th (click)=\"onOrderChanged('id')\">\n          <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('title')\">\n          <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('type')\">\n          <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('startDate')\">\n          <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('endDate')\">\n          <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('amount')\">\n          <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('price')\">\n          <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n        </th>\n        <th>\n          <span>Image</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let coupon of couponsPerPage | filter: filterValue | orderBy: order\">\n      <tr>\n        <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n          <span>{{coupon.id}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n          <span>{{coupon.title}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.type}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.startDate}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.endDate}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.amount}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.price}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n          <span class=\"fa fa-picture-o\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p-paginator rows=\"10\" [totalRecords]=\"coupons.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n  (onPageChange)=\"onPageChanged($event)\"></p-paginator>"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #image>\n  <img [src]=\"getImage()\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<div class=\"query-box\">\n  <h1>Get Coupon</h1>\n  <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Coupon ID\" tooltipEvent=\"focus\" [(ngModel)]=\"couponID\"\n    (keypress)=\"onKeyPressed($event)\" />\n  <br><br>\n  <button pButton type=\"button\" label=\"Get\" (click)=\"getCoupon()\"></button>\n</div>\n<div class=\"data-component\" *ngIf=\"!couponIsEmpty()\">\n  <h2><i class=\"fa fa-key\"></i> ID: <span>{{selectedCoupon.id}}</span></h2>\n  <h2><i class=\"fa fa-tag\"></i> Title: <span>{{selectedCoupon.title}}</span></h2>\n  <h2><i class=\"fa fa-globe\"></i> Type: <span>{{selectedCoupon.type}}</span></h2>\n  <h2><i class=\"fa fa-calendar\"></i> Start Date: <span>{{selectedCoupon.startDate}}</span></h2>\n  <h2><i class=\"fa fa-calendar\"></i> End Date: <span>{{selectedCoupon.endDate}}</span></h2>\n  <h2><i class=\"fa fa-pie-chart\"></i> Amount: <span>{{selectedCoupon.amount}}</span></h2>\n  <h2><i class=\"fa fa-ils\"></i> Price: <span>{{selectedCoupon.price}}</span></h2>\n  <h2><i class=\"fa fa-picture-o\"></i> Image: <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = selectedCoupon\" (mouseenter)=\"image.show($event)\" (mouseleave)=\"image.hide()\"></span></h2>\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <h2><span>{{selectedCoupon.message}}</span></h2>\n  </p-fieldset>\n</div>"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"query-box\">\n  <h1>Coupons By Date - {{couponsByDate.length}}</h1>\n  <material-datepicker [(date)]=\"date\" placeholder=\"End  Date:\" dateFormat=\"DD-MM-YYYY\" (dateChange)=\"onDateChanged($event)\"></material-datepicker>\n</div>\n<div *ngIf=\"couponsByDate.length !== 0\">\n  <div class=\"data-table\">\n    <div class=\"search\">\n      <br />\n      <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"filterValue\" />\n      <br />\n      <b [hidden]=\"isFilterValueEmpty()\">{{(couponsByDatePerPage | filter: filterValue).length}}  Results</b>\n    </div>\n    <br>\n    <table>\n      <thead>\n        <tr>\n          <th (click)=\"onOrderChanged('id')\">\n            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('title')\">\n            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('type')\">\n            <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('startDate')\">\n            <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('endDate')\">\n            <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('amount')\">\n            <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('price')\">\n            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n          </th>\n          <th>\n            <span>Image</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let coupon of couponsByDatePerPage | filter: filterValue | orderBy: order\">\n        <tr>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.id}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.title}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.type}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.startDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.endDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.amount}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.price}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n            <span class=\"fa fa-picture-o\"></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p-paginator rows=\"10\" [totalRecords]=\"couponsByDate.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n    (onPageChange)=\"onPageChanged($event)\"></p-paginator>\n</div>"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"query-box\">\n  <h1>Coupons By Price - {{couponsByPrice.length}}</h1>\n  <input type=\"number\" pInputText placeholder=\"Price:\" min=\"0\" max=\"1000000\" pTooltip=\"Enter Price\" tooltipEvent=\"focus\" [(ngModel)]=\"price\"\n    (ngModelChange)=\"onPriceChanged($event)\" />\n</div>\n<div *ngIf=\"couponsByPrice.length !== 0\">\n  <div class=\"data-table\">\n    <div class=\"search\">\n      <br />\n      <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"filterValue\" />\n      <br />\n      <b [hidden]=\"isFilterValueEmpty()\">{{(couponsByPricePerPage | filter: filterValue).length}}  Results</b>\n    </div>\n    <br>\n    <table>\n      <thead>\n        <tr>\n          <th (click)=\"onOrderChanged('id')\">\n            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('title')\">\n            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('type')\">\n            <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('startDate')\">\n            <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('endDate')\">\n            <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('amount')\">\n            <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('price')\">\n            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n          </th>\n          <th>\n            <span>Image</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let coupon of couponsByPricePerPage | filter: filterValue | orderBy: order\">\n        <tr>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.id}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.title}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.type}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.startDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.endDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.amount}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.price}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n            <span class=\"fa fa-picture-o\"></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p-paginator rows=\"10\" [totalRecords]=\"couponsByPrice.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n    (onPageChange)=\"onPageChanged($event)\"></p-paginator>\n</div>"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"query-box\">\n  <h1>Coupons By Type - {{couponsByType.length}}</h1>\n  <p-dropdown [options]=\"types\" placeholder=\"Type:\" (onChange)=\"onTypeChanged($event)\"></p-dropdown>\n</div>\n<div *ngIf=\"couponsByType.length !== 0\">\n  <div class=\"data-table\">\n    <div class=\"search\">\n      <br />\n      <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"filterValue\" />\n      <br />\n      <b [hidden]=\"isFilterValueEmpty()\">{{(couponsByTypePerPage | filter: filterValue).length}}  Results</b>\n    </div>\n    <br>\n    <table>\n      <thead>\n        <tr>\n          <th (click)=\"onOrderChanged('id')\">\n            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('title')\">\n            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('type')\">\n            <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('startDate')\">\n            <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('endDate')\">\n            <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('amount')\">\n            <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('price')\">\n            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n          </th>\n          <th>\n            <span>Image</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let coupon of couponsByTypePerPage | filter: filterValue | orderBy: order\">\n        <tr>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.id}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.title}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.type}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.startDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.endDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.amount}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.price}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n            <span class=\"fa fa-picture-o\"></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p-paginator rows=\"10\" [totalRecords]=\"couponsByType.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n    (onPageChange)=\"onPageChanged($event)\"></p-paginator>\n</div>"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-tabMenu [model]=\"tabItems\"></p-tabMenu>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br />\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br />\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br />\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br />\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br />\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br />\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br />\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n\n<table border=\"0\">\n  <tr *ngFor=\"let coupons of validCouponsByType\">\n    <td *ngFor=\"let coupon of coupons\" (click)=\"showCoupon(coupon)\">\n      <b class=\"couponTitle\">{{coupon.title}}</b>\n      <br />\n      <img class=\"couponImage\" [src]=\"coupon.image\" height=\"100px\" width=\"100px\" />\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n  <h1>Remove Coupon</h1>\n  <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Coupon ID\" tooltipEvent=\"focus\" [(ngModel)]=\"couponID\"\n    (keypress)=\"onKeyPressed($event)\" />\n  <br><br>\n  <button pButton type=\"button\" label=\"Remove\" (click)=\"removeCoupon()\"></button>\n</div>"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n  <h1>Update Coupon</h1>\n  <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Coupon ID\" tooltipEvent=\"focus\" [(ngModel)]=\"couponID\"\n    (keypress)=\"onKeyPressed($event)\" />\n  <br><br>\n  <material-datepicker [(date)]=\"couponEndDate\" placeholder=\"End  Date:\" dateFormat=\"DD-MM-YYYY\"></material-datepicker>\n  <br /><br />\n  <table style=\"width: 100%\">\n    <tr>\n      <td style=\"width: 50%\">\n        <input type=\"number\" pInputText placeholder=\"Amount:\" min=\"0\" max=\"1000000\" pTooltip=\"Enter Coupon Amount\" tooltipEvent=\"focus\"\n          [(ngModel)]=\"couponAmount\" (keypress)=\"onKeyPressed($event)\" />\n      </td>\n      <td style=\"width: 50%\">\n        <input type=\"number\" pInputText placeholder=\"Price:\" min=\"0\" max=\"1000000\" pTooltip=\"Enter Coupon Price\" tooltipEvent=\"focus\"\n          [(ngModel)]=\"couponPrice\" (keypress)=\"onKeyPressed($event)\" />\n      </td>\n    </tr>\n  </table>\n  <br />\n  <button pButton type=\"button\" label=\"Update\" (click)=\"updateCoupon()\"></button>\n</div>"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br>\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n      <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"data-table\">\n  <h1>Coupons - {{coupons.length}}</h1>\n  <div class=\"search\">\n    <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n      [(ngModel)]=\"filterValue\" />\n    <br />\n    <b [hidden]=\"isFilterValueEmpty()\">{{(couponsPerPage | filter: filterValue).length}}  Results</b>\n  </div>\n  <br>\n  <table>\n    <thead>\n      <tr>\n        <th (click)=\"onOrderChanged('id')\">\n          <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('title')\">\n          <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('type')\">\n          <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('startDate')\">\n          <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('endDate')\">\n          <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('amount')\">\n          <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n        </th>\n        <th (click)=\"onOrderChanged('price')\">\n          <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n        </th>\n        <th>\n          <span>Image</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let coupon of couponsPerPage | filter: filterValue | orderBy: order\">\n      <tr>\n        <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n          <span>{{coupon.id}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n          <span>{{coupon.title}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.type}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.startDate}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.endDate}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.amount}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\">\n          <span>{{coupon.price}}</span>\n        </td>\n        <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n          <span class=\"fa fa-picture-o\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p-paginator rows=\"10\" [totalRecords]=\"coupons.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n  (onPageChange)=\"onPageChanged($event)\"></p-paginator>"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"query-box\">\n  <h1>Coupons By Price - {{couponsByPrice.length}}</h1>\n  <input type=\"number\" pInputText placeholder=\"Price:\" min=\"0\" max=\"1000000\" pTooltip=\"Enter Price\" tooltipEvent=\"focus\" [(ngModel)]=\"price\"\n    (ngModelChange)=\"onPriceChanged($event)\" />\n</div>\n<div *ngIf=\"couponsByPrice.length !== 0\">\n  <div class=\"data-table\">\n    <div class=\"search\">\n      <br />\n      <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"filterValue\" />\n      <br />\n      <b [hidden]=\"isFilterValueEmpty()\">{{(couponsByPricePerPage | filter: filterValue).length}}  Results</b>\n    </div>\n    <br>\n    <table>\n      <thead>\n        <tr>\n          <th (click)=\"onOrderChanged('id')\">\n            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('title')\">\n            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('type')\">\n            <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('startDate')\">\n            <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('endDate')\">\n            <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('amount')\">\n            <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('price')\">\n            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n          </th>\n          <th>\n            <span>Image</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let coupon of couponsByPricePerPage | filter: filterValue | orderBy: order\">\n        <tr>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.id}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.title}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.type}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.startDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.endDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.amount}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.price}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n            <span class=\"fa fa-picture-o\"></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p-paginator rows=\"10\" [totalRecords]=\"couponsByPrice.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n    (onPageChange)=\"onPageChanged($event)\"></p-paginator>\n</div>"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-overlayPanel #message>\n  <span *ngFor=\"let messageRow of messageSelected\">\n    <span>{{messageRow}}</span>\n  <br />\n  </span>\n</p-overlayPanel>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br>\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br>\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br>\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br>\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br>\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br>\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br>\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n<p-splitButton label=\"Download\" icon=\"fa fa-download\" (onClick)=\"downloadThisResults()\" [model]=\"items\"></p-splitButton>\n<div class=\"query-box\">\n  <h1>Coupons By Type - {{couponsByType.length}}</h1>\n  <p-dropdown [options]=\"types\" placeholder=\"Type:\" (onChange)=\"onTypeChanged($event)\"></p-dropdown>\n</div>\n<div *ngIf=\"couponsByType.length !== 0\">\n  <div class=\"data-table\">\n    <div class=\"search\">\n      <br />\n      <input type=\"text\" maxlength=\"50\" pInputText placeholder=\"Search...\" pTooltip=\"Enter Search Filter\" tooltipEvent=\"focus\"\n        [(ngModel)]=\"filterValue\" />\n      <br />\n      <b [hidden]=\"isFilterValueEmpty()\">{{(couponsByTypePerPage | filter: filterValue).length}}  Results</b>\n    </div>\n    <br>\n    <table>\n      <thead>\n        <tr>\n          <th (click)=\"onOrderChanged('id')\">\n            <span>ID&nbsp;&nbsp;<i [class]=\"getOrderIcon('id')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('title')\">\n            <span>Title&nbsp;&nbsp;<i [class]=\"getOrderIcon('title')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('type')\">\n            <span>Type&nbsp;&nbsp;<i [class]=\"getOrderIcon('type')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('startDate')\">\n            <span>Start Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('startDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('endDate')\">\n            <span>End Date&nbsp;&nbsp;<i [class]=\"getOrderIcon('endDate')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('amount')\">\n            <span>Amount&nbsp;&nbsp;<i [class]=\"getOrderIcon('amount')\"></i></span>\n          </th>\n          <th (click)=\"onOrderChanged('price')\">\n            <span>Price&nbsp;&nbsp;<i [class]=\"getOrderIcon('price')\"></i></span>\n          </th>\n          <th>\n            <span>Image</span>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let coupon of couponsByTypePerPage | filter: filterValue | orderBy: order\">\n        <tr>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.id}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setMessageSelected(coupon.message); message.show($event)\" (mouseleave)=\"message.hide()\">\n            <span>{{coupon.title}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.type}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.startDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.endDate}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.amount}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\">\n            <span>{{coupon.price}}</span>\n          </td>\n          <td (click)=\"onCouponClicked(coupon)\" (mouseenter)=\"setImageSelected(coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\">\n            <span class=\"fa fa-picture-o\"></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <p-paginator rows=\"10\" [totalRecords]=\"couponsByType.length\" [rowsPerPageOptions]=\"[10, 15, 20, 'All']\"\n    (onPageChange)=\"onPageChanged($event)\"></p-paginator>\n</div>"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-tabMenu [model]=\"tabItems\"></p-tabMenu>\n<p-overlayPanel #image>\n  <img [src]=\"imageSelected\" width=\"100px\" height=\"100px\" />\n</p-overlayPanel>\n<p-dialog [header]=\"displayCoupon?.title\" [visible]=\"displayCoupon !== null\" [modal]=\"true\" [positionLeft]=\"50\" [positionTop]=\"50\" (onHide)=\"displayCoupon = null\">\n  <img *ngIf=\"displayCoupon !== null\" [src]=\"displayCoupon?.image\" style=\"max-width: 500px; max-height: 500px\" />\n</p-dialog>\n<p-dialog *ngFor=\"let dialog of dialogs\" header=\"Coupon\" width=\"500\" [(visible)]=\"dialog.display\">\n  <b>ID:</b> {{dialog.coupon.id}}\n  <br />\n  <b>Title:</b> {{dialog.coupon.title}}\n  <br />\n  <b>Type:</b> {{dialog.coupon.type}}\n  <br />\n  <b>Start Date:</b> {{dialog.coupon.startDate}}\n  <br />\n  <b>End Date:</b> {{dialog.coupon.endDate}}\n  <br />\n  <b>Amount:</b> {{dialog.coupon.amount}}\n  <br />\n  <b>Price:</b> {{dialog.coupon.price}}\n  <br />\n  <b>Image:</b> <span class=\"fa fa-expand\" style=\"cursor: pointer\" (click)=\"displayCoupon = dialog.coupon\" (mouseenter)=\"setImageSelected(dialog.coupon.image); image.show($event)\" (mouseleave)=\"image.hide()\"></span>\n  <br />\n  <p-fieldset legend=\"Message:\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <span *ngFor=\"let messageRow of getSplitMessage(dialog.coupon.message)\">\n      <span>{{messageRow}}</span>\n    <br />\n    </span>\n  </p-fieldset>\n</p-dialog>\n\n<table border=\"0\">\n  <tr *ngFor=\"let coupons of validCouponsByType\">\n    <td *ngFor=\"let coupon of coupons\" (click)=\"showCoupon(coupon)\">\n      <b class=\"couponTitle\">{{coupon.title}}</b>\n      <br />\n      <div class=\"container\">\n        <img [src]=\"coupon.image\" height=\"100px\" width=\"100px\" />\n        <span class=\"purchase\" (click)=\"$event.stopPropagation(); purchaseCoupon(coupon)\">Purchase</span>\n      </div>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"query-box\">\n  <h1>Purchase Coupon</h1>\n  <input type=\"number\" pInputText placeholder=\"ID:\" min=\"0\" max=\"9999\" pTooltip=\"Enter Coupon ID\" tooltipEvent=\"focus\" [(ngModel)]=\"couponID\"\n    (keypress)=\"onKeyPressed($event)\" />\n  <br><br>\n  <button pButton type=\"button\" label=\"Purchase\" (click)=\"purchaseCoupon()\"></button>\n</div>"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"type\">\n  <admin-home *ngSwitchCase=\"'ADMIN'\"></admin-home>\n  <company-home *ngSwitchCase=\"'COMPANY'\"></company-home>\n  <customer-home *ngSwitchCase=\"'CUSTOMER'\"></customer-home>\n</div>"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-dialog [(visible)]=\"visible\" [draggable]=\"false\" [resizable]=\"false\" [closable]=\"false\" [modal]=\"true\" [width]=\"400\">\n    <p-header>\n      <b>Login</b>\n    </p-header>\n    <form (ngSubmit)=\"onSubmit()\">\n      <div class=\"login\">\n        <input pInputText type=\"text\" maxlength=\"50\" placeholder=\"Name:\" name=\"name\" [(ngModel)]=\"user.name\" />\n        <br /><br />\n        <input pInputText type=\"password\" maxlength=\"50\" placeholder=\"Password:\" name=\"password\" [(ngModel)]=\"user.password\" />\n        <br /><br />\n        <p-dropdown [options]=\"types\" name=\"type\" (onChange)=\"user.type = $event.value\"></p-dropdown>\n        <br /><br /><br /><br /><br />\n      </div>\n      <div style=\"padding: 10px; font-size: medium; text-align: center\">\n        <button pButton type=\"submit\" label=\"Login\" style=\"width: 100%\"></button>\n      </div>\n    </form>\n  </p-dialog>"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\n  <login [visible]=\"isGuest\" (loginSuccessed)=\"onLoginSuccessed($event)\"></login>\n\n  <div *ngIf=\"!isGuest\">\n    <header class=\"header\">\n      <div class=\"header-inner\">\n        <div class=\"logo\">\n          <h1>\n            <p-lightbox type=\"content\">\n              <a class=\"group\" href=\"#\">\n              <span style=\"color: darkblue\">Coupon</span><span style=\"color: #d3d3f9\">System</span>\n            </a>\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/NRv1TySSa-8\" frameborder=\"0\" allowfullscreen></iframe>\n            </p-lightbox>\n          </h1>\n        </div>\n        <div class=\"top-nav\">\n          <ul>\n            <li><span>About</span></li>\n            <li><span>Contact</span></li>\n            <li><span>FAQ</span></li>\n            <li><span>Help</span></li>\n          </ul>\n        </div>\n        <div class=\"clr\"></div>\n      </div>\n    </header>\n\n    <feature-container (updated)=\"onUpdated()\"></feature-container>\n\n    <div class=\"content\">\n\n      <menu-container (logoutClicked)=\"onLogoutClicked()\"></menu-container>\n\n      <main class=\"content-bar\">\n        <div class=\"widget\">\n          <router-outlet></router-outlet>\n        </div>\n      </main>\n\n      <div class=\"clr\"></div>\n    </div>\n\n    <footer-container></footer-container>\n\n    <footer class=\"footer\">\n      <div class=\"footer-inner\">\n        <p>&copy; Copyright Yakir Uzan 2017</p>\n      </div>\n    </footer>\n\n    <img src=\"assets/Images/ic_up.png\" alt=\"up\" class=\"goToTop\" (click)=\"goToTop()\" />\n  </div>\n</div>"

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coupon; });
var Coupon = (function () {
    function Coupon(id, title, startDate, endDate, amount, type, message, price, image) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.type = type;
        this.message = message;
        this.price = price;
        this.image = image;
    }
    return Coupon;
}());

//# sourceMappingURL=coupon.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.APP_PATH = "http://localhost:8080/coupon/";
        this.LOGIN = "Login";
        this.LOGOUT = "Logout";
        this.API = "webapi/";
    }
    AppService.prototype.login = function (user) {
        return this.http.post(this.APP_PATH + this.LOGIN, JSON.stringify(user)).map(function (res) { return res.text(); });
    };
    // Angular Methods
    AppService.prototype.post = function (path, obj) {
        return this.http.post(this.APP_PATH + this.API + path, obj).map(function (response) { return response.json(); });
    };
    AppService.prototype.put = function (path, obj) {
        return this.http.put(this.APP_PATH + this.API + path, obj).map(function (response) { return response.json(); });
    };
    AppService.prototype.delete = function (path, obj) {
        return this.http.delete(this.APP_PATH + this.API + path, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]({ body: obj })).map(function (response) { return response.json(); });
    };
    AppService.prototype.get = function (path) {
        return this.http.get(this.APP_PATH + this.API + path).map(function (response) { return response.json(); });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation; });
var Validation = (function () {
    function Validation(success, result) {
        this.success = success;
        this.result = result;
    }
    return Validation;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(id, compName, email, password, coupons) {
        this.id = id;
        this.compName = compName;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer(id, custName, password, coupons) {
        this.id = id;
        this.custName = custName;
        this.password = password;
        this.coupons = coupons;
    }
    return Customer;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(178);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.createSuccessMessage = function (summary, detail) {
        return { severity: 'success', summary: summary, detail: detail };
    };
    MessageService.prototype.createInfoMessage = function (summary, detail) {
        return { severity: 'info', summary: summary, detail: detail };
    };
    MessageService.prototype.createWarnMessage = function (summary, detail) {
        return { severity: 'warn', summary: summary, detail: detail };
    };
    MessageService.prototype.createErrorMessage = function (summary, detail) {
        return { severity: 'error', summary: summary, detail: detail };
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ })

},[698]);
//# sourceMappingURL=main.bundle.js.map