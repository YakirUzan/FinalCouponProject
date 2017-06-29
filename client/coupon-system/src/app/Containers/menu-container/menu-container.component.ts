import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {

  @Output() logoutClicked: EventEmitter<any> = new EventEmitter();

  private menuItems: any[] = [];

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
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
  }

  adminCase(): void {
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
  }

  companyCase(): void {
    this.addMenuItem(this.createMenuItem("company/create/coupon", "Create Coupon"));
    this.addMenuItem(this.createMenuItem("company/update/coupon", "Update Coupon"));
    this.addMenuItem(this.createMenuItem("company/remove/coupon", "Remove Coupon"));
    this.addMenuItem(this.createMenuItem("company/get/coupon", "Get Coupon"));
    this.addMenuItem(this.createMenuItem("company/get/all/coupons", "Get All Coupons"));
    this.addMenuItem(this.createMenuItem("company/get/coupons/by/type", "Get Coupons By Type"));
    this.addMenuItem(this.createMenuItem("company/get/coupons/by/price", "Get Coupons By Price"));
    this.addMenuItem(this.createMenuItem("company/get/coupons/by/date", "Get Coupons By Date"));
  }

  customerCase(): void {
    this.addMenuItem(this.createMenuItem("customer/purchase/coupon", "Purchase Coupon"));
    this.addMenuItem(this.createMenuItem("customer/get/all/purchased/coupons", "Get All Coupons"));
    this.addMenuItem(this.createMenuItem("customer/get/purchased/coupons/by/type", "Get Coupons By Type"));
    this.addMenuItem(this.createMenuItem("customer/get/purchased/coupons/by/price", "Get Coupons By Price"));
  }

  onMenuItemClick(menuItem): void {
    if(menuItem.name === "Logout") this.logoutClicked.emit();
  }

  getMenuItemClass(menuItem): string {
    return menuItem.name === "Logout" ? "logout" : null;
  }

  private addMenuItem(menuItem): void {
    this.menuItems.push(menuItem);
  }

  private createMenuItem(url: string, name: string): any {
    return { url, name };
  }

}
