import { Component, OnInit } from '@angular/core';
import { AdminService } from "app/Services/admin.service";
import { LocalStorageService } from 'ngx-webstorage';
import { CompanyService } from "app/Services/company.service";
import { CustomerService } from "app/Services/customer.service";

@Component({
  selector: 'footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.css']
})
export class FooterContainerComponent implements OnInit {

  private footerItems: any[] = [];

  constructor(private adminService: AdminService, private companyService: CompanyService, private customerService: CustomerService, private storage: LocalStorageService) { }

  ngOnInit() {
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
  }

  private adminCase(): void {
    this.addFooterItem(this.createFooterItem("Companies", 0, "yellow", "assets/Images/ic_company.png", "Company Icon"));
    this.addFooterItem(this.createFooterItem("Customers", 0, "green", "assets/Images/ic_customer.png", "Customer Icon"));
    this.addFooterItem(this.createFooterItem("Coupons", 0, "red", "assets/Images/ic_coupon.png", "Coupon Icon"));

    if (this.adminService.metaDataObj) {
      this.initAdminData();
    }
    this.adminService.metaDataRefresh.subscribe(() => {
      this.initAdminData();
    });
  }

  private companyCase(): void {
    this.addFooterItem(this.createFooterItem("Coupons", 0, "yellow", "assets/Images/ic_coupon.png", "Coupon Icon"));
    this.addFooterItem(this.createFooterItem("Amount", 0, "green", "assets/Images/ic_customer.png", "Amount Icon"));
    this.addFooterItem(this.createFooterItem("Price", 0, "red", "assets/Images/ic_shekel.png", "Price Icon"));
    
    if (this.companyService.metaDataObj) {
      this.initCompanyData();
    }
    this.companyService.metaDataRefresh.subscribe(() => {
      this.initCompanyData();
    });
}

  private customerCase(): void {
    this.addFooterItem(this.createFooterItem("History Purchases", 0, "yellow", "assets/Images/ic_coupon.png", "Coupon Icon"));
    this.addFooterItem(this.createFooterItem("Valid Coupons", 0, "green", "assets/Images/ic_coupon.png", "Coupon Icon"));
    this.addFooterItem(this.createFooterItem("System Coupons", 0, "red", "assets/Images/ic_coupon.png", "Coupon Icon"));

    if (this.customerService.metaDataObj) {
      this.initCustomerData();
    }
    this.customerService.metaDataRefresh.subscribe(() => {
      this.initCustomerData();
    });
  }

  private initAdminData(): void {
    this.footerItems[0].number = this.adminService.metaDataObj.companies.result.length;
    this.footerItems[1].number = this.adminService.metaDataObj.customers.result.length;
    this.footerItems[2].number = this.adminService.metaDataObj.coupons.result.length;
  }

  private initCompanyData(): void {
    this.footerItems[0].number = this.companyService.metaDataObj.coupons.result.length;
    this.footerItems[1].number = this.getCouponsAmount();
    this.footerItems[2].number = this.getCouponsPrice();
  }

  private getCouponsAmount(): number {
    let couponsAmount: number = 0;
    this.companyService.metaDataObj.coupons.result.forEach((coupon) => {
      couponsAmount += coupon.amount;
    });
    return couponsAmount;
  }

  private getCouponsPrice(): number {
    let couponsPrice: number = 0;
    this.companyService.metaDataObj.coupons.result.forEach((coupon) => {
      couponsPrice += coupon.price * coupon.amount;
    });
    return couponsPrice;
  }

  private initCustomerData(): void {
    let numberOfValidCoupons = this.getNumberOfValidCoupons();
    this.footerItems[0].number = this.customerService.metaDataObj.coupons.result.length - numberOfValidCoupons;
    this.footerItems[1].number = numberOfValidCoupons;
    this.footerItems[2].number = this.customerService.metaDataObj.validCoupons.result.length;
  }

  private getNumberOfValidCoupons(): number {
    let numberOfValidCoupons: number = 0;
    this.customerService.metaDataObj.coupons.result.forEach((coupon) => {
      if (this.getDateFromString(coupon.endDate) > new Date()) numberOfValidCoupons++;
    });
    return numberOfValidCoupons;
  }

  private getDateFromString(date: string): Date {
    let from: string[] = date.split("/");
    return new Date(from["1"] + "/" + from["0"] + "/" + from["2"]);
  }

  private addFooterItem(footerItem): void {
    this.footerItems.push(footerItem);
  }

  private createFooterItem(name, number, color, imageUrl, imageAlt): any {
    return { name, number, color, imageUrl, imageAlt };
  }

}
