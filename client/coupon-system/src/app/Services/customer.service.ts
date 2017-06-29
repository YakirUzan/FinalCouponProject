import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import { Validation } from "app/Core/validation";
import { AppService } from "app/Services/app.service";
import { Coupon } from "app/Core/coupon";

@Injectable()
export class CustomerService {

  private CUSTOMER_PATH = "customer/";

  private validCoupons: Validation;
  private coupons: Validation;

  public metaDataObj: any;
  public metaDataRefresh: Subject<any> = new Subject<any>();

  constructor(private appService: AppService) { }

  refreshData(): void {
    this.validCoupons = undefined;
    this.coupons = undefined;

    this.loadData();
  }

  loadData(): void {
    this.getAllValidCoupons().subscribe((validCoupons) => {
      this.validCoupons = validCoupons;
      this.setData();
    });

    this.getAllPurchasedCoupons().subscribe((coupons) => {
      this.coupons = coupons;
      this.setData();
    });
  }

  setData(): void {
    if (!_.isUndefined(this.validCoupons) && !_.isUndefined(this.coupons)) {
      this.metaDataObj = { validCoupons: this.validCoupons, coupons: this.coupons };
      this.metaDataRefresh.next();
    }
  }

  purchaseCoupon(coupon: Coupon): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let idValidation = this.validateID(coupon.id);

    if (idValidation.success) {
      this.appService.post(this.CUSTOMER_PATH + "purchase/coupon", coupon).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, idValidation.result)));
    }
    return sub;
  }

  getAllValidCoupons(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.CUSTOMER_PATH + "get/all/valid/coupons").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getAllPurchasedCoupons(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.CUSTOMER_PATH + "get/all/purchased/coupons").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getPurchasedCouponsByType(type: string): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.CUSTOMER_PATH + `get/purchased/coupons/by/type/${type}`).subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getPurchasedCouponsByPrice(price: number): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    if (this.validatePrice(price).success) {
      this.appService.get(this.CUSTOMER_PATH + `get/purchased/coupons/by/price/${price}`).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    }

    return sub;
  }

  validateID(id: number): Validation {
    if (_.isUndefined(id)) {
      return new Validation(false, "Field id is empty");
    } else if (!_.isFinite(id) || id < 0 || id % 1 !== 0 || id > 10000) {
      return new Validation(false, "Field id is invalid");
    }
    return new Validation(true);
  }

  validatePrice(price: number): Validation {
    if (_.isUndefined(price)) {
      return new Validation(false, "Field price is empty");
    } else if (!_.isFinite(price) || price < 0 || price > 1000000) {
      return new Validation(false, "Field price is invalid");
    }
    return new Validation(true);
  }

}
