import { Component, OnInit } from '@angular/core';
import { CompanyService } from "app/Services/company.service";
import { Message } from "primeng/primeng";
import { Coupon } from "app/Core/coupon";
import { MessageService } from "app/Services/message.service";

@Component({
  selector: 'update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  private couponID: number;
  private couponEndDate: Date;
  private couponAmount: number;
  private couponPrice: number;

  private msgs: Message[] = [];

  constructor(private messageService: MessageService, private companyService: CompanyService) { }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.updateCoupon();
    }
  }

  updateCoupon() {
    this.msgs = [];

    let coupon: Coupon = new Coupon(this.couponID, null, null, this.couponEndDate, this.couponAmount, null, null, this.couponPrice, null);

    this.companyService.updateCoupon(coupon).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Coupon Updated", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Update Coupon Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.couponID = null;
    this.couponEndDate = null;
    this.couponAmount = null;
    this.couponPrice = null;
  }

}
