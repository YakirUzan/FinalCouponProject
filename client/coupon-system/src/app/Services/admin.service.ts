import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import { AppService } from "app/Services/app.service";
import { Company } from "app/core/company";
import { Validation } from "app/Core/validation";
import { Customer } from "app/core/customer";
import { OperationType } from "app/Core/operation-type.enum";
import { Coupon } from "app/Core/coupon";

@Injectable()
export class AdminService {

  private ADMIN_PATH: string = "admin/";

  private coupons: Validation;
  private validCoupons: Validation;
  private companies: Validation;
  private customers: Validation;

  public metaDataObj: any;
  public metaDataRefresh: Subject<any> = new Subject<any>();

  constructor(private appService: AppService) { }

  refreshData(): void {
    this.companies = undefined;
    this.customers = undefined;
    this.coupons = undefined;
    this.validCoupons = undefined;

    this.loadData();
  }

  loadData(): void {
    this.getAllCoupons().subscribe((coupons) => {
      this.coupons = coupons;
      this.setData();
    });

    this.getAllValidCoupons().subscribe((validCoupons) => {
      this.validCoupons = validCoupons;
      this.setData();
    });

    this.getAllCompanies().subscribe((companies) => {
      this.companies = companies;
      this.setData();
    });

    this.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
      this.setData();
    });
  }

  setData(): void {
    if (!_.isUndefined(this.coupons) && !_.isUndefined(this.validCoupons) && !_.isUndefined(this.companies) && !_.isUndefined(this.customers)) {
      this.metaDataObj = { coupons: this.coupons, validCoupons: this.validCoupons, companies: this.companies, customers: this.customers };
      this.metaDataRefresh.next();
    }
  }

  createCompany(company: Company): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let companyValidation = this.validateCompany(OperationType.CREATE, company);

    if (companyValidation.success) {
      this.appService.post(this.ADMIN_PATH + "create/company", company).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, companyValidation.result)));
    }
    return sub;
  }

  updateCompany(company: Company): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let companyValidation = this.validateCompany(OperationType.UPDATE, company);

    if (companyValidation.success) {
      this.appService.put(this.ADMIN_PATH + "update/company", company).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, companyValidation.result)));
    }
    return sub;
  }

  removeCompany(company: Company): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let companyValidation = this.validateCompany(OperationType.REMOVE, company);

    if (companyValidation.success) {
      this.appService.delete(this.ADMIN_PATH + "remove/company", company).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, companyValidation.result)));
    }
    return sub;
  }

  getCompany(company: Company): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let companyValidation = this.validateCompany(OperationType.GET, company);

    if (companyValidation.success) {
      this.appService.get(this.ADMIN_PATH + `get/company/${company.id}`).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, companyValidation.result)));
    }
    return sub;
  }

  getAllCompanies(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.ADMIN_PATH + "get/all/companies").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  createCustomer(customer: Customer): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let customerValidation = this.validateCustomer(OperationType.CREATE, customer);

    if (customerValidation.success) {
      this.appService.post(this.ADMIN_PATH + "create/customer", customer).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, customerValidation.result)));
    }
    return sub;
  }

  updateCustomer(customer: Customer): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let customerValidation = this.validateCustomer(OperationType.UPDATE, customer);

    if (customerValidation.success) {
      this.appService.put(this.ADMIN_PATH + "update/customer", customer).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, customerValidation.result)));
    }
    return sub;
  }

  removeCustomer(customer: Customer): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let customerValidation = this.validateCustomer(OperationType.REMOVE, customer);

    if (customerValidation.success) {
      this.appService.delete(this.ADMIN_PATH + "remove/customer", customer).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, customerValidation.result)));
    }
    return sub;
  }

  getCustomer(customer: Customer): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();
    let customerValidation = this.validateCustomer(OperationType.GET, customer);

    if (customerValidation.success) {
      this.appService.get(this.ADMIN_PATH + `get/customer/${customer.id}`).subscribe(
        (result) => sub.next(new Validation(true, result)),
        (error) => sub.next(new Validation(false, error.json())));
    } else {
      setTimeout(() => sub.next(new Validation(false, customerValidation.result)));
    }
    return sub;
  }

  getAllCustomers(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.ADMIN_PATH + "get/all/customers").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getAllValidCoupons(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.ADMIN_PATH + "get/all/valid/coupons").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  getAllCoupons(): Subject<Validation> {
    let sub: Subject<Validation> = new Subject();

    this.appService.get(this.ADMIN_PATH + "get/all/coupons").subscribe(
      (result) => sub.next(new Validation(true, result)),
      (error) => sub.next(new Validation(false, error.json())));

    return sub;
  }

  validateCompany(type: OperationType, company: Company): Validation {
    let idValidation: Validation;
    let nameValidation: Validation;
    let emailValidation: Validation;
    let passwordValidation: Validation;

    switch (type) {
      case OperationType.CREATE:
        idValidation = new Validation(true);
        nameValidation = this.validateName(company.compName);
        emailValidation = this.validateEmail(company.email);
        passwordValidation = this.validatePassword(company.password);
        break;
      case OperationType.UPDATE:
        idValidation = this.validateID(company.id);
        nameValidation = this.validateName(company.compName);
        emailValidation = this.validateEmail(company.email);
        passwordValidation = this.validatePassword(company.password);
        break;
      case OperationType.REMOVE:
      case OperationType.GET:
        idValidation = this.validateID(company.id);
        nameValidation = new Validation(true);
        emailValidation = new Validation(true);
        passwordValidation = new Validation(true);
        break;
    }

    if (idValidation.success && nameValidation.success && emailValidation.success && passwordValidation.success) {
      return new Validation(true);
    } else {
      let errorMessage = "";
      if (!idValidation.success) {
        errorMessage += idValidation.result + "<br>";
      }
      if (!nameValidation.success) {
        errorMessage += nameValidation.result + "<br>";
      }
      if (!emailValidation.success) {
        errorMessage += emailValidation.result + "<br>";
      }
      if (!passwordValidation.success) {
        errorMessage += passwordValidation.result + "<br>";
      }
      return new Validation(false, errorMessage);
    }
  }

  validateCustomer(type: OperationType, customer: Customer): Validation {
    let idValidation: Validation;
    let nameValidation: Validation;
    let passwordValidation: Validation;

    switch (type) {
      case OperationType.CREATE:
        idValidation = new Validation(true);
        nameValidation = this.validateName(customer.custName);
        passwordValidation = this.validatePassword(customer.password);
        break;
      case OperationType.UPDATE:
        idValidation = this.validateID(customer.id);
        nameValidation = this.validateName(customer.custName);
        passwordValidation = this.validatePassword(customer.password);
        break;
      case OperationType.REMOVE:
      case OperationType.GET:
        idValidation = this.validateID(customer.id);
        nameValidation = new Validation(true);
        passwordValidation = new Validation(true);
        break;
    }

    if (idValidation.success && nameValidation.success && passwordValidation.success) {
      return new Validation(true);
    } else {
      let errorMessage = "";
      if (!idValidation.success) {
        errorMessage += idValidation.result + "<br>";
      }
      if (!nameValidation.success) {
        errorMessage += nameValidation.result + "<br>";
      }
      if (!passwordValidation.success) {
        errorMessage += passwordValidation.result + "<br>";
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

  validateName(name: string): Validation {
    if (_.isEmpty(name)) {
      return new Validation(false, "Field name is empty");
    }
    return new Validation(true);
  }

  validateEmail(email: string): Validation {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (_.isEmpty(email)) {
      return new Validation(false, "Field email is empty");
    } else if (!re.test(email)) {
      return new Validation(false, "Field email is invalid");
    }
    return new Validation(true)
  }

  validatePassword(password: string): Validation {
    if (_.isEmpty(password)) {
      return new Validation(false, "Field password is empty");
    } else if (password.length < 6) {
      return new Validation(false, "Field password must be 6+ characters");
    }
    return new Validation(true);
  }

}
