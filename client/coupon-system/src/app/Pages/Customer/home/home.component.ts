import { Component, OnInit } from '@angular/core';
import { CustomerService } from "app/Services/customer.service";
import { Coupon } from "app/Core/coupon";
import { MenuItem, Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";

@Component({
  selector: 'customer-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  private tabItems: MenuItem[] = [];
  private validsCoupons: any;
  private validCouponsByType: Coupon[];
  private dialogs: { display: boolean, coupon: Coupon }[] = [];
  private imageSelected: string = "";
  private displayCoupon: Coupon = null;
  private msgs: Message[] = [];

  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
    this.initTabItems();
    if (this.customerService.metaDataObj) {
      this.setValidCouponsByType("RESTURANS");
    }

    this.customerService.metaDataRefresh.subscribe(() => {
      this.setValidCouponsByType("RESTURANS");
    });
  }

  initTabItems(): void {
    this.tabItems.push({ label: "Resturants", command: () => this.setValidCouponsByType("RESTURANS") });
    this.tabItems.push({ label: "Electricity", command: () => this.setValidCouponsByType("ELECTRICITY") });
    this.tabItems.push({ label: "Food", command: () => this.setValidCouponsByType("FOOD") });
    this.tabItems.push({ label: "Health", command: () => this.setValidCouponsByType("HEALTH") });
    this.tabItems.push({ label: "Sports", command: () => this.setValidCouponsByType("SPORTS") });
    this.tabItems.push({ label: "Camping", command: () => this.setValidCouponsByType("CAMPING") });
    this.tabItems.push({ label: "Travelling", command: () => this.setValidCouponsByType("TRAVELLING") });
  }

  setValidCouponsByType(type: string): void {
    this.validCouponsByType = [];
    let couponsByType = this.customerService.metaDataObj.validCoupons.result.filter((coupon) => coupon.type === type);

    while (couponsByType.length > 0) {
      this.validCouponsByType.push(couponsByType.splice(0, 7));
    }
  }

  showCoupon(coupon: Coupon): void {
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

  getSplitMessage(message: string): string[] {
    return message.split("\n");
  }

  setImageSelected(image: string): void {
    this.imageSelected = image;
  }

  purchaseCoupon(coupon: Coupon) {
    this.msgs = [];
    this.customerService.purchaseCoupon(coupon).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Coupon Purchased", validation.result));
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Purchase Coupon Failed", validation.result));
      }
    });
  }

}
