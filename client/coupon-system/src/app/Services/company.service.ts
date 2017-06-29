import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import { AppService } from "app/Services/app.service";
import { Company } from "app/core/company";
import { Validation } from "app/Core/validation";
import { OperationType } from "app/Core/operation-type.enum";
import { Coupon } from "app/Core/coupon";

@Injectable()
export class CompanyService {

  private COMPANY_PATH = "company/";

  private coupons: Validation;

  public metaDataObj: any;
  public metaDataRefresh: Subject<any> = new Subject<any>();

  constructor(private appService: AppService) { }

  refreshData(): void {
    this.coupons = undefined;

    this.loadData();
  }

  loadData(): void {
    this.getAllCoupons().subscribe((coupons) => {
      this.coupons = coupons;
      this.setData();
    });
  }

  setData(): void {
    if (!_.isUndefined(this.coupons)) {
      this.metaDataObj = { coupons: this.coupons };
      this.metaDataRefresh.next();
    }
  }

  createCoupon(coupon: Coupon): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let couponValidation = this.validateCoupon(OperationType.CREATE, coupon);

    if (couponValidation.success) {
      this.appService.post(this.COMPANY_PATH + "create/coupon", coupon).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, couponValidation.result)));
    }
    return sub;
  }

  updateCoupon(coupon: Coupon): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let couponValidation = this.validateCoupon(OperationType.UPDATE, coupon);

    if (couponValidation.success) {
      this.appService.put(this.COMPANY_PATH + "update/coupon", coupon).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, couponValidation.result)));
    }
    return sub;
  }

  removeCoupon(coupon: Coupon): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let couponValidation = this.validateCoupon(OperationType.REMOVE, coupon);

    if (couponValidation.success) {
      this.appService.delete(this.COMPANY_PATH + "remove/coupon", coupon).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, couponValidation.result)));
    }
    return sub;
  }

  getCoupon(coupon: Coupon): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let couponValidation = this.validateCoupon(OperationType.GET, coupon);

    if (couponValidation.success) {
      this.appService.get(this.COMPANY_PATH + `get/coupon/${coupon.id}`).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, couponValidation.result)));
    }
    return sub;
  }

  getAllCoupons(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.COMPANY_PATH + "get/all/coupons").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getCouponsByType(type: string): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.COMPANY_PATH + `get/coupons/by/type/${type}`).subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getCouponsByPrice(price: number): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    if (this.validatePrice(price).success) {
      this.appService.get(this.COMPANY_PATH + `get/coupons/by/price/${price}`).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    }

    return sub;
  }

  getCouponsByDate(date: number): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    if (this.validateEndDate(new Date(date)).success) {
      this.appService.get(this.COMPANY_PATH + `get/coupons/by/date/${date}`).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    }

    return sub;
  }

  validateCoupon(type: OperationType, coupon: Coupon): Validation {
    let idValidation: Validation;
    let titleValidation: Validation;
    let startDateValidation: Validation;
    let endDateValidation: Validation;
    let rangeDatesValidation: Validation;
    let amountValidation: Validation;
    let typeValidation: Validation;
    let messageValidation: Validation;
    let priceValidation: Validation;
    let imageValidation: Validation;

    switch (type) {
      case OperationType.CREATE:
        idValidation = new Validation(true);
        titleValidation = this.validateTitle(coupon.title);
        startDateValidation = this.validateStartDate(coupon.startDate);
        endDateValidation = this.validateEndDate(coupon.endDate);
        rangeDatesValidation = this.validateRangeDates(coupon.startDate, coupon.endDate);
        amountValidation = this.validateAmount(coupon.amount);
        typeValidation = this.validateType(coupon.type);
        messageValidation = this.validateMessage(coupon.message);
        priceValidation = this.validatePrice(coupon.price);
        imageValidation = this.validateImage(coupon.image);
        break;
      case OperationType.UPDATE:
        idValidation = this.validateID(coupon.id);
        titleValidation = new Validation(true);
        startDateValidation = new Validation(true);
        endDateValidation = this.validateEndDate(coupon.endDate);
        rangeDatesValidation = new Validation(true);
        amountValidation = this.validateAmount(coupon.amount);
        typeValidation = new Validation(true);
        messageValidation = new Validation(true);
        priceValidation = this.validatePrice(coupon.price);
        imageValidation = new Validation(true);
        break;
      case OperationType.REMOVE:
      case OperationType.GET:
        idValidation = this.validateID(coupon.id);
        titleValidation = new Validation(true);
        startDateValidation = new Validation(true);
        endDateValidation = new Validation(true);
        rangeDatesValidation = new Validation(true);
        amountValidation = new Validation(true);
        typeValidation = new Validation(true);
        messageValidation = new Validation(true);
        priceValidation = new Validation(true);
        imageValidation = new Validation(true);
        break;

    }

    if (idValidation.success && titleValidation.success && startDateValidation.success
      && endDateValidation.success && rangeDatesValidation.success && amountValidation.success && typeValidation.success
      && messageValidation.success && priceValidation.success && imageValidation.success) {
      return new Validation(true);
    } else {
      let errorMessage = "";
      if (!idValidation.success) {
        errorMessage += idValidation.result + "<br>";
      }
      if (!titleValidation.success) {
        errorMessage += titleValidation.result + "<br>";
      }
      if (!typeValidation.success) {
        errorMessage += typeValidation.result + "<br>";
      }
      if (!startDateValidation.success) {
        errorMessage += startDateValidation.result + "<br>";
      }
      if (!endDateValidation.success) {
        errorMessage += endDateValidation.result + "<br>";
      }
      if (startDateValidation.success && endDateValidation.success && !rangeDatesValidation.success) {
        errorMessage += rangeDatesValidation.result + "<br>";
      }
      if (!amountValidation.success) {
        errorMessage += amountValidation.result + "<br>";
      }
      if (!priceValidation.success) {
        errorMessage += priceValidation.result + "<br>";
      }
      if (!messageValidation.success) {
        errorMessage += messageValidation.result + "<br>";
      }
      if (!imageValidation.success) {
        errorMessage += imageValidation.result + "<br>";
      }
      return new Validation(false, errorMessage);
    }
  }

  validateID(id: number): Validation {
    if (_.isUndefined(id)) {
      return new Validation(false, "Field id is empty");
    } else if (!_.isFinite(id) || id < 0 || id % 1 !== 0 || id > 10000) {
      return new Validation(false, "Field id is invalid");
    }
    return new Validation(true);
  }

  validateTitle(title: string): Validation {
    if (_.isEmpty(title)) {
      return new Validation(false, "Field title is empty");
    }
    return new Validation(true);
  }

  validateStartDate(startDate: Date): Validation {
    if (_.isUndefined(startDate)) {
      return new Validation(false, "Field start date is empty");
    }
    return new Validation(true);
  }

  validateEndDate(endDate: Date): Validation {
    if (_.isUndefined(endDate)) {
      return new Validation(false, "Field end date is empty");
    }
    return new Validation(true);
  }

  validateRangeDates(startDate: Date, endDate: Date): Validation {
    if (startDate > endDate) {
      return new Validation(false, "The range between dates is invalid");
    }
    return new Validation(true);
  }

  validateAmount(amount: number): Validation {
    if (_.isUndefined(amount)) {
      return new Validation(false, "Field amount is empty");
    } else if (!_.isFinite(amount) || amount < 0 || amount % 1 !== 0 || amount > 1000000) {
      return new Validation(false, "Field amount is invalid");
    }
    return new Validation(true);
  }

  validateType(type: string): Validation {
    if (_.isEmpty(type)) {
      return new Validation(false, "Field type is empty");
    }
    return new Validation(true);
  }

  validateMessage(message: string): Validation {
    if (_.isEmpty(message)) {
      return new Validation(false, "Field message is empty");
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

  validateImage(image: string): Validation {
    if (_.isEmpty(image)) {
      return new Validation(false, "Field image is empty");
    }
    return new Validation(true);
  }

}
