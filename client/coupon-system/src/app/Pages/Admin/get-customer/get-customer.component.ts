import { Component, OnInit } from '@angular/core';
import { Customer } from "app/core/customer";
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import * as _ from 'underscore';
import { Coupon } from "app/Core/coupon";

@Component({
  selector: 'get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  customerID: number;
  private selectedCustomer: Customer;
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
      this.getCustomer();
    }
  }

  getCustomer(): void {
    this.msgs = [];

    let customerInput: Customer = new Customer(this.customerID, null, null, null);

    this.adminService.getCustomer(customerInput).subscribe((validation) => {
      if (validation.success) {
        this.selectedCustomer = validation.result;
        this.resetInputs();
      } else {
        this.selectedCustomer = null;
        this.msgs.push(this.messageService.createErrorMessage("Select Customer Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.customerID = null;
  }

  customerIsEmpty(): boolean {
    return _.isEmpty(this.selectedCustomer);
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
    return this.customerIsEmpty() ? false : this.selectedCustomer.coupons.length !== 0;
  }

  getSplitMessage(message: string): string[] {
    return message.split("\n");
  }

  setImageSelected(image: string): void {
    this.imageSelected = image;
  }
}
