import { Component, OnInit } from '@angular/core';
import { CompanyService } from "app/Services/company.service";
import { MessageService } from "app/Services/message.service";
import { Coupon } from "app/Core/coupon";
import { Message } from "primeng/primeng";

@Component({
  selector: 'remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit {

  private couponID: number;

  private msgs: Message[] = [];

  constructor(private messageService: MessageService, private companyService: CompanyService) { }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.removeCoupon();
    }
  }

  removeCoupon() {
    this.msgs = [];

    let coupon: Coupon = new Coupon(this.couponID, null, null, null, 0, null, null, 0, null);

    this.companyService.removeCoupon(coupon).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Coupon Removed", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Remove Coupon Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.couponID = null;
  }

}
