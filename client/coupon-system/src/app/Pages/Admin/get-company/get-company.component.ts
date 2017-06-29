import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { Company } from "app/core/company";
import * as _ from 'underscore';
import { Coupon } from "app/Core/coupon";

@Component({
  selector: 'get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {

  private companyID: number;
  private selectedCompany: Company;
  private order: { type: string, reverse: boolean } = { type: "id", reverse: false };
  private dialogs: { display: boolean, coupon: Coupon }[] = [];
  private imageSelected: string = "";
  private displayCoupon: Coupon = null;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
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

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.getCompany();
    }
  }

  getCompany(): void {
    this.msgs = [];

    let companyInput: Company = new Company(this.companyID, null, null, null, null);

    this.adminService.getCompany(companyInput).subscribe((validation) => {
      if (validation.success) {
        this.selectedCompany = validation.result;
        this.resetInputs();
      } else {
        this.selectedCompany = null;
        this.msgs.push(this.messageService.createErrorMessage("Select Company Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.companyID = null;
  }

  companyIsEmpty(): boolean {
    return _.isEmpty(this.selectedCompany);
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

  haveCoupons(): boolean {
    return this.companyIsEmpty() ? false : this.selectedCompany.coupons.length !== 0;
  }

  getSplitMessage(message: string): string[] {
    return message.split("\n");
  }

  setImageSelected(image: string): void {
    this.imageSelected = image;
  }
}
