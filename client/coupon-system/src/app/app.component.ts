import { Component } from '@angular/core';
import * as $ from 'jquery';
import { User } from "app/Core/user";
import { AppService } from "app/Services/app.service";
import { LocalStorageService } from 'ngx-webstorage';
import { AdminService } from "app/Services/admin.service";
import { CompanyService } from "app/Services/company.service";
import { CustomerService } from "app/Services/customer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isGuest: boolean;

  constructor(private storage: LocalStorageService, private adminService: AdminService, private companyService: CompanyService, private customerService: CustomerService) {
    this.initScroll();

    this.isGuest = this.storage.retrieve("type") === null;

    if (!this.isGuest) {
      this.loadData();
    }
  }

  onLoginSuccessed(user: User): void {
    this.storage.store("name", user.name);
    this.storage.store("type", user.type);

    this.loadData();

    this.isGuest = false;
  }

  loadData(): void {
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
  }

  onUpdated(): void {
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
  }

  onLogoutClicked(): void {
    this.storage.clear();
    this.isGuest = true;
  }

  initScroll(): void {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.goToTop').fadeIn();
      } else {
        $('.goToTop').fadeOut();
      }
    });
  }

  goToTop(): void {
    $("html, body").animate({ scrollTop: 0 }, 500);
  }
}
