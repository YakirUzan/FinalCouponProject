import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { CompanyService } from "app/Services/company.service";
import { Coupon } from "app/Core/coupon";
import * as _ from 'underscore';

@Component({
  selector: 'get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

  private couponID: number;
  private selectedCoupon: Coupon;
  private displayCoupon: Coupon = null;

  private msgs: Message[] = [];

  constructor(private messageService: MessageService, private companyService: CompanyService) { }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.getCoupon();
    }
  }

  getCoupon() {
    this.msgs = [];

    let coupon: Coupon = new Coupon(this.couponID, null, null, null, 0, null, null, 0, null);

    this.companyService.getCoupon(coupon).subscribe((validation) => {
      if (validation.success) {
        this.selectedCoupon = validation.result;
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Select Coupon Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.couponID = null;
  }

  couponIsEmpty(): boolean {
    return _.isEmpty(this.selectedCoupon);
  }

  getImage(): string {
    return this.couponIsEmpty() ? "" : this.selectedCoupon.image;
  }

}
