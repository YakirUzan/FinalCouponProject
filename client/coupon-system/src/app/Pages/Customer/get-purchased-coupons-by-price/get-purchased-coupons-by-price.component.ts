import { Component, OnInit } from '@angular/core';
import { CustomerService } from "app/Services/customer.service";
import { Coupon } from "app/core/coupon";
import * as _ from 'underscore';
import { MessageService } from "app/Services/message.service";
import { Message, MenuItem } from "primeng/primeng";
import { FilterPipe } from "app/Pipes/filter.pipe";
import { Angular2Csv } from "angular2-csv/Angular2-csv";

@Component({
  selector: 'get-purchased-coupons-by-price',
  templateUrl: './get-purchased-coupons-by-price.component.html',
  styleUrls: ['./get-purchased-coupons-by-price.component.css']
})
export class GetPurchasedCouponsByPriceComponent implements OnInit {

  private price: number;

  private msgs: Message[] = [];
  private couponsByPrice: Coupon[] = [];
  private couponsByPricePerPage: Coupon[] = [];
  private order: { type: string, reverse: boolean } = { type: "id", reverse: false };
  private filterValue: string;
  private dialogs: { display: boolean, coupon: Coupon }[] = [];
  private items: MenuItem[];
  private messageSelected: string[] = [""];
  private imageSelected: string = "";
  private displayCoupon: Coupon = null;

  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
    this.initItems();

    // if (this.companyService.metaDataObj) {
    //   this.couponsByPrice = this.companyService.metaDataObj.couponsByPrice.result;
    //   this.onPageChanged({ first: 0, rows: 10 });
    // }
    // this.companyService.metaDataRefresh.subscribe(() => {
    //   this.couponsByPrice = this.companyService.metaDataObj.couponsByPrice.result;
    //   this.onPageChanged({ first: 0, rows: 10 });
    // });
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

  onPriceChanged(event): void {
    this.customerService.getPurchasedCouponsByPrice(this.price).subscribe((couponsByPrice) => {
      this.couponsByPrice = couponsByPrice.result;
      this.onPageChanged({ first: 0, rows: 10 });
    });
  }

  downloadThisResults(): void {
    this.msgs = [];
    let downlodList: Coupon[];
    if (_.isEmpty(this.filterValue)) {
      downlodList = this.couponsByPricePerPage;
    } else {
      let filterList = _.filter(this.couponsByPricePerPage, (coupon) => new FilterPipe().isExist(coupon, this.filterValue));
      let sortByList = _.sortBy(filterList, this.order.type);
      downlodList = this.order.reverse ? sortByList.reverse() : sortByList;
    }

    if (_.isEmpty(downlodList)) {
      this.msgs.push(this.messageService.createErrorMessage("Download Failed", "Your list is empty"));
    } else {
      this.msgs.push(this.messageService.createInfoMessage("Download", "Your download will start immediately"));
      new Angular2Csv(downlodList.map((coupon) => _.omit(coupon, 'image')), `Coupons_${this.getToday()}`, {showLabels: true});
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
    this.couponsByPricePerPage = (event.rows === "All") ? this.couponsByPrice : this.getCouponsPerPage(event);
  }

  getCouponsPerPage(event): Coupon[] {
    return _.filter(this.couponsByPrice, (coupon) => { return this.isCouponInRange(coupon, event.first, event.first + Number(event.rows)) });
  }

  isCouponInRange(coupon, start, end): boolean {
    return this.couponsByPrice.indexOf(coupon) >= start && this.couponsByPrice.indexOf(coupon) < end;
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
