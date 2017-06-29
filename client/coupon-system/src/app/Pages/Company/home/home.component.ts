import { Component, OnInit } from '@angular/core';
import { CompanyService } from "app/Services/company.service";
import { Coupon } from "app/Core/coupon";
import { MessageService } from "app/Services/message.service";
import { MenuItem, Message } from "primeng/primeng";

@Component({
  selector: 'company-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  private tabItems: MenuItem[] = [];
  private validsCoupons: any;
  private validCouponsByType: Coupon[];
  private dialogs: { display: boolean, coupon: Coupon }[] = [];
  private imageSelected: string = "";
  private displayCoupon: Coupon = null;
  private msgs: Message[] = [];

  constructor(private companyService: CompanyService, private messageService: MessageService) { }

  ngOnInit() {
    this.initTabItems();
    if (this.companyService.metaDataObj) {
      this.setValidCouponsByType("RESTURANS");
    }

    this.companyService.metaDataRefresh.subscribe(() => {
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
    let couponsByType = this.companyService.metaDataObj.coupons.result.filter((coupon) => coupon.type === type);

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

}
