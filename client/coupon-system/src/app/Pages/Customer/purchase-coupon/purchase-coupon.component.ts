import { Component, OnInit } from '@angular/core';
import { CustomerService } from "app/Services/customer.service";
import { MessageService } from "app/Services/message.service";
import { Message } from "primeng/primeng";
import { Coupon } from "app/Core/coupon";

@Component({
  selector: 'purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  private couponID: number;

  private msgs: Message[] = [];

  constructor(private messageService: MessageService, private customerService: CustomerService) { 

  }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.purchaseCoupon();
    }
  }

  purchaseCoupon(): void {
    this.msgs = [];

    let coupon: Coupon = new Coupon(this.couponID, null, null, null, 0, null, null, 0, null);

    this.customerService.purchaseCoupon(coupon).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Coupon Purchased", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Purchase Coupon Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.couponID = null;
  }

}
