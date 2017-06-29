import { Component, OnInit } from '@angular/core';
import { AdminService } from "app/Services/admin.service";
import { Company } from "app/core/company";
import * as _ from 'underscore';
import { MessageService } from "app/Services/message.service";
import { Message, MenuItem } from "primeng/primeng";
import { FilterPipe } from "app/Pipes/filter.pipe";
import { Angular2Csv } from "angular2-csv/Angular2-csv";

@Component({
  selector: 'get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  private msgs: Message[] = [];
  private companies: Company[] = [];
  private companiesPerPage: Company[] = [];
  private order: { type: string, reverse: boolean } = { type: "id", reverse: false };
  private activeCompanyId: number;
  private filterValue: string;
  private dialogs: { display: boolean, company: Company }[] = [];
  private items: MenuItem[];

  constructor(private adminService: AdminService, private messageService: MessageService) { }

  ngOnInit() {
    this.initItems();

    if (this.adminService.metaDataObj) {
      this.companies = this.adminService.metaDataObj.companies.result;
      this.onPageChanged({ first: 0, rows: 10 });
    }
    this.adminService.metaDataRefresh.subscribe(() => {
      this.companies = this.adminService.metaDataObj.companies.result;
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
        label: 'All Companies', icon: 'fa-database', command: () => {
          this.downloadAllCompanies();
        }
      }
    ];
  }

  downloadThisResults(): void {
    this.msgs = [];
    let downlodList: Company[];
    if (_.isEmpty(this.filterValue)) {
      downlodList = this.companiesPerPage;
    } else {
      let filterList = _.filter(this.companiesPerPage, (company) => new FilterPipe().isExist(company, this.filterValue));
      let sortByList = _.sortBy(filterList, this.order.type);
      downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
    }

    if (_.isEmpty(downlodList)) {
      this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
    } else {
      this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
      new Angular2Csv(downlodList.map((company) => _.omit(company, 'coupons')), `Companies_${this.getToday()}`, {showLabels: true});
    }
  }

  downloadAllCompanies(): void {
      new Angular2Csv(this.companies.map((company) => _.omit(company, 'coupons')), `Companies_${this.getToday()}`, {showLabels: true});
  }

  getToday(): string {
    let day: any = new Date().getDate();
    let month: any = new Date().getMonth() + 1;
    let year: any = new Date().getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return day + '-' + month + '-' + year;
  }

  onCompanyClicked(company: Company): void {
    if (!this.isCompanyExistInDialogs(company)) {
      this.dialogs.push({ display: true, company: company });
    }
  }

  isCompanyExistInDialogs(company: Company) {
    let isExist = false;
    this.dialogs.forEach((dialog) => {
      if (dialog.company === company && dialog.display === true) {
        isExist = true;
      }
    });
    return isExist;
  }

  onPageChanged(event): void {
    this.companiesPerPage = (event.rows === "All") ? this.companies : this.getCompaniesPerPage(event);
  }

  getCompaniesPerPage(event): Company[] {
    return _.filter(this.companies, (company) => { return this.isCompanyInRange(company, event.first, event.first + Number(event.rows)) });
  }

  isCompanyInRange(company, start, end): boolean {
    return this.companies.indexOf(company) >= start && this.companies.indexOf(company) < end;
  }

  onOrderChanged(type): void {
    this.order = (this.order.type === type) ? { type, reverse: !this.order.reverse } : { type, reverse: false };
  }

  getOrderIcon(type): string {
    if (type === this.order.type) {
      return (this.order.reverse === true) ? "fa fa-sort-asc fa-lg" : "fa fa-sort-desc fa-lg";
    } else {
      return "fa fa-sort fa-lg";
    }
  }

  setActiveCompany(company): void {
    this.activeCompanyId = this.activeCompanyId !== company.id ? company.id : null;
  }

  getCompanyIsActiveIcon(company): string {
    return this.isActiveCompany(company) ? "fa fa-arrow-down" : "fa fa-arrow-right";
  }

  isActiveCompany(company): boolean {
    return company.id === this.activeCompanyId;
  }

  haveCoupons(company): boolean {
    return company.coupons.length !== 0;
  }

  isFilterValueEmpty(): boolean {
    return _.isEmpty(this.filterValue);
  }
}
