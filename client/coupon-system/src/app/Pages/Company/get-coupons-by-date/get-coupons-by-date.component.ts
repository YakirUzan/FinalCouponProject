import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CompanyService } from "app/Services/company.service";
import { Coupon } from "app/core/coupon";
import * as _ from 'underscore';
import { MessageService } from "app/Services/message.service";
import { Message, MenuItem } from "primeng/primeng";
import { FilterPipe } from "app/Pipes/filter.pipe";
import { Angular2Csv } from "angular2-csv/Angular2-csv";

@Component({
  selector: 'get-coupons-by-date',
  templateUrl: './get-coupons-by-date.component.html',
  styleUrls: ['./get-coupons-by-date.component.css']
})
export class GetCouponsByDateComponent implements OnInit {

  private date: Date;

  private msgs: Message[] = [];
  private couponsByDate: Coupon[] = [];
  private couponsByDatePerPage: Coupon[] = [];
  private order: { type: string, reverse: boolean } = { type: "id", reverse: false };
  private filterValue: string;
  private dialogs: { display: boolean, coupon: Coupon }[] = [];
  private items: MenuItem[];
  private messageSelected: string[] = [""];
  private imageSelected: string = "";
  private displayCoupon: Coupon = null;

  constructor(private companyService: CompanyService, private messageService: MessageService) { }

  ngOnInit() {
    this.initItems();
  }

  onDateChanged(event: Date): void {
    if(!event) return;
    this.companyService.getCouponsByDate(event.getTime()).subscribe((couponsByDate) => {
      this.couponsByDate = couponsByDate.result;
      this.onPageChanged({ first: 0, rows: 10 });
    });
  }

  initItems(): void {
    this.items = [
      {
        label: 'This Results', icon: 'fa-filter', command: () => {
          this.downloadThisResults();
        }
      }
    ];
  }

  downloadThisResults(): void {
    this.msgs = [];
    let downlodList: Coupon[];
    if (_.isEmpty(this.filterValue)) {
      downlodList = this.couponsByDatePerPage;
    } else {
      let filterList = _.filter(this.couponsByDatePerPage, (coupon) => new FilterPipe().isExist(coupon, this.filterValue));
      let sortByList = _.sortBy(filterList, this.order.type);
      downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
    }

    if (_.isEmpty(downlodList)) {
      this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
    } else {
      this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
      new Angular2Csv(downlodList.map((coupon) => _.omit(coupon, 'image')), `Coupons_${this.getToday()}`, { showLabels: true });
    }
  }

  getToday(): string {
    let day: any = new Date().getDate();
    let month: any = new Date().getMonth() + 1;
    let year: any = new Date().getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return day + '-' + month + '-' + year;
  }

  onCouponClicked(coupon: Coupon): void {
    if (!this.isCouponExistInDialogs(coupon)) {
      this.dialogs.push({ display: true, coupon: coupon });
    }
  }

  isCouponExistInDialogs(coupon: Coupon) {
    let isExist = false;
    this.dialogs.forEach((dialog) => {
      if (dialog.coupon === coupon && dialog.display === true) {
        isExist = true;
      }
    });
    return isExist;
  }

  onPageChanged(event): void {
    this.couponsByDatePerPage = (event.rows === "All") ? this.couponsByDate : this.getCouponsPerPage(event);
  }

  getCouponsPerPage(event): Coupon[] {
    return _.filter(this.couponsByDate, (coupon) => { return this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)) });
  }

  isCouponInRange(coupon, start, end): boolean {
    return this.couponsByDate.indexOf(coupon) >= start && this.couponsByDate.indexOf(coupon) < end;
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

  isFilterValueEmpty(): boolean {
    return _.isEmpty(this.filterValue);
  }

  setMessageSelected(message: string): void {
    this.messageSelected = message.split("\n");
  }

  getSplitMessage(message: string): string[] {
    return message.split("\n");
  }

  setImageSelected(image: string): void {
    this.imageSelected = image;
  }

}
