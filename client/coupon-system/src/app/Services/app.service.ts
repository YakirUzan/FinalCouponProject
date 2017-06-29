import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import * as _ from 'underscore';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Company } from "app/core/company";
import { Customer } from "app/core/customer";
import { User } from "app/Core/user";

@Injectable()
export class AppService {

  private APP_PATH: string = "http://localhost:8080/coupon/";
  private LOGIN: string = "Login";
  private LOGOUT: string = "Logout";
  private API: string = "webapi/";

  constructor(private http: Http) {

  }

  login(user: User): Observable<any> {
    return this.http.post(this.APP_PATH + this.LOGIN, JSON.stringify(user)).map((res) => res.text());
  }

  // Angular Methods
  post(path: string, obj: any): Observable<any> {
    return this.http.post(this.APP_PATH + this.API + path, obj).map((response) => response.json());
  }

  put(path: string, obj: any): Observable<any> {
    return this.http.put(this.APP_PATH + this.API + path, obj).map((response) => response.json());
  }

  delete(path: string, obj: any): Observable<any> {
    return this.http.delete(this.APP_PATH + this.API + path, new RequestOptions({ body: obj })).map((response) => response.json());
  }

  get(path: string): Observable<any> {
    return this.http.get(this.APP_PATH + this.API + path).map((response) => response.json());
  }

}
