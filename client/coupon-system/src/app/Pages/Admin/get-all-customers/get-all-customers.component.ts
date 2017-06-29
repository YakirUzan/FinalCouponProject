import { Component, OnInit } from '@angular/core';
import { Customer } from "app/core/customer";
import { AdminService } from "app/Services/admin.service";
import * as _ from 'underscore';
import { Message, MenuItem } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { Angular2Csv } from "angular2-csv/Angular2-csv";
import { FilterPipe } from "app/Pipes/filter.pipe";

@Component({
  selector: 'get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  private msgs: Message[] = [];
  private customers: Customer[] = [];
  private customersPerPage: Customer[] = [];
  private order: { type: string, reverse: boolean } = { type: "id", reverse: false };
  private activeCustomerId: number;
  private filterValue: string;
  private dialogs: { display: boolean, customer: Customer }[] = [];
  private items: MenuItem[];

  constructor(private adminService: AdminService, private messageService: MessageService) { }

  ngOnInit() {
    this.initItems();

    if (this.adminService.metaDataObj) {
      this.customers = this.adminService.metaDataObj.customers.result;
      this.onPageChanged({ first: 0, rows: 10 });
    }
    this.adminService.metaDataRefresh.subscribe(() => {
      this.customers = this.adminService.metaDataObj.customers.result;
      this.onPageChanged({ first: 0, rows: 10 });
    });
  }

  initItems(): void {
    this.items = [
      {
        label: 'This Results', icon: 'fa-filter', command: () => {
          this.downloadThisResults();
        }
      },
      {
        label: 'All Customers', icon: 'fa-database', command: () => {
          this.downloadAllCustomers();
        }
      }
    ];
  }

  downloadThisResults(): void {
    this.msgs = [];
    let downlodList: Customer[];
    if (_.isEmpty(this.filterValue)) {
      downlodList = this.customersPerPage;
    } else {
      let filterList = _.filter(this.customersPerPage, (customer) => new FilterPipe().isExist(customer, this.filterValue));
      let sortByList = _.sortBy(filterList, this.order.type);
      downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
    }

    if (_.isEmpty(downlodList)) {
      this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
    } else {
      this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
      new Angular2Csv(downlodList.map((customer) => _.omit(customer, 'coupons')), `Customers_${this.getToday()}`, {showLabels: true});
    }
  }

  downloadAllCustomers(): void {
    new Angular2Csv(this.customers.map((customer) => _.omit(customer, 'coupons')), `Companies_${this.getToday()}`, {showLabels: true});
  }

  getToday(): string {
    let day: any = new Date().getDate();
    let month: any = new Date().getMonth() + 1;
    let year: any = new Date().getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return day + '-' + month + '-' + year;
  }

  onCustomerClicked(customer: Customer): void {
    if (!this.isCustomerExistInDialogs(customer)) {
      this.dialogs.push({ display: true, customer: customer });
    }
  }

  isCustomerExistInDialogs(customer: Customer) {
    let isExist = false;
    this.dialogs.forEach((dialog) => {
      if (dialog.customer === customer && dialog.display === true) {
        isExist = true;
      }
    });
    return isExist;
  }

  onPageChanged(event): void {
    this.customersPerPage = (event.rows === "All") ? this.customers : this.getCustomersPerPage(event);
  }

  getCustomersPerPage(event): Customer[] {
    return _.filter(this.customers, (customer) => { return this.isCustomerInRange(customer, event.first, event.first + Number(event.rows)) });
  }

  isCustomerInRange(customer, start, end): boolean {
    return this.customers.indexOf(customer) >= start && this.customers.indexOf(customer) < end;
  }

  onOrderChanged(type): void {
    this.order = this.order.type === type ? { type, reverse: !this.order.reverse } : { type, reverse: false };
  }

  getOrderIcon(type): string {
    if (type === this.order.type) {
      return this.order.reverse === true ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
    } else {
      return "fa fa-sort fa-lg";
    }
  }

  setActiveCustomer(customer): void {
    this.activeCustomerId = this.activeCustomerId !== customer.id ? customer.id : null;
  }

  getCustomerIsActiveIcon(customer): string {
    return this.isActiveCustomer(customer) ? "fa fa-arrow-down" : "fa fa-arrow-right";
  }

  isActiveCustomer(customer): boolean {
    return customer.id === this.activeCustomerId;
  }

  haveCoupons(customer): boolean {
    return customer.coupons.length !== 0;
  }

  isFilterValueEmpty(): boolean {
    return _.isEmpty(this.filterValue);
  }
}
