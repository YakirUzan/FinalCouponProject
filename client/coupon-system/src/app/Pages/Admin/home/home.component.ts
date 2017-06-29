import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from "primeng/primeng";
import { AdminService } from "app/Services/admin.service";
import { Coupon } from "app/Core/coupon";
import { Company } from "app/core/company";
import { Customer } from "app/core/customer";
import { Validation } from "app/Core/validation";
import * as _ from "underscore";
import { MessageService } from "app/Services/message.service";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AdminHomeComponent implements OnInit {

  private coupons: Coupon[] = [];
  private validCoupons: Coupon[] = [];
  private companies: Company[] = [];
  private customers: Customer[] = [];

  private pieData: any;
  private lineData: any;
  private barData: any;
  private options: any;

  constructor(private adminService: AdminService) {
    this.options = {
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit() {
    if (this.adminService.metaDataObj) {
      this.initData();
      this.initChartsData();
    }
    this.adminService.metaDataRefresh.subscribe(() => {
      this.initData();
      this.initChartsData();
    });
  }

  initData(): void {
    this.coupons = this.adminService.metaDataObj.coupons.result;
    this.validCoupons = this.adminService.metaDataObj.validCoupons.result;
    this.companies = this.adminService.metaDataObj.companies.result;
    this.customers = this.adminService.metaDataObj.customers.result;
  }

  initChartsData() {
    this.initPieData();
    this.initLineData();
    this.initBarData();
  }

  initPieData(): void {
    this.pieData = {
      labels: ['Companies', 'Customers', 'Coupons'],
      datasets: [
        {
          data: [this.companies.length, this.customers.length, this.coupons.length],
          backgroundColor: [
            "#f39c12",
            "#00a65a",
            "#dd4b39"
          ],
          hoverBackgroundColor: [
            "#e38a05",
            "#009649",
            "#cc382b"
          ]
        }]
    };
  }

  initLineData(): void {
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Valid Coupons',
          data: this.getNumberOfValidCouponsByMonthOfThisYear(),
          fill: true,
          borderColor: '#4bc0c0'
        }
      ]
    };
  }

  initBarData(): void {
    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'New Coupons',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: this.getNumberOfCouponsByMonthOfThisYear()
        },
        {
          label: 'Expired Coupons',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: this.getNumberOfExpiredCouponsByMonthOfThisYear()
        }
      ]
    };
  }

  getNumberOfCouponsByMonthOfThisYear(): number[] {
    let numberOfCoupons: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.coupons.forEach((coupon) => {
      let startDate = coupon.startDate.toString().split("/");
      if (startDate[2] === new Date().getFullYear().toString()) {
        numberOfCoupons[Number(startDate[1]) - 1]++;
      }
    });
    return numberOfCoupons;
  }

  getNumberOfExpiredCouponsByMonthOfThisYear(): number[] {
    let numberOfExpiredCoupons: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.coupons.forEach((coupon) => {
      let endDate = coupon.endDate.toString().split("/");
      if (endDate[2] === new Date().getFullYear().toString()) {
        numberOfExpiredCoupons[Number(endDate[1]) - 1]++;
      }
    });
    return numberOfExpiredCoupons;
  }

  getNumberOfValidCouponsByMonthOfThisYear(): number[] {
    let numberOfValidCoupons: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let numberOfCoupons: number[] = this.getNumberOfCouponsByMonthOfThisYear();
    let numberOfExpiredCoupons: number[] = this.getNumberOfExpiredCouponsByMonthOfThisYear();

    for (let i = 0; i < 12; i++) {
      if (i === 0) {
        numberOfValidCoupons[i] = numberOfCoupons[i] - numberOfExpiredCoupons[i];
      } else {
        numberOfValidCoupons[i] = numberOfValidCoupons[i - 1] + numberOfCoupons[i] - numberOfExpiredCoupons[i];
      }
    }

    return numberOfValidCoupons;
  }

}
