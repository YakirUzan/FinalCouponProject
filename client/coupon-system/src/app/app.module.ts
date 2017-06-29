import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { InputTextModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { LightboxModule } from 'primeng/primeng';

import { Ng2Webstorage } from 'ngx-webstorage';

import { DatepickerModule } from 'angular2-material-datepicker';

import { AppComponent } from './app.component';

import { AppService } from "app/Services/app.service";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { CompanyService } from "app/Services/company.service";
import { CustomerService } from "app/Services/customer.service";

import { OrderByPipe } from './Pipes/order-by.pipe';
import { FilterPipe } from './Pipes/filter.pipe';

import { MenuContainerComponent } from './Containers/menu-container/menu-container.component';
import { FooterContainerComponent } from "./Containers/footer-container/footer-container.component";
import { FeatureContainerComponent } from './Containers/feature-container/feature-container.component';

import { AdminHomeComponent } from "./Pages/Admin/home/home.component";
import { CreateCompanyComponent } from './Pages/Admin/create-company/create-company.component';
import { UpdateCompanyComponent } from './Pages/Admin/update-company/update-company.component';
import { RemoveCompanyComponent } from './Pages/Admin/remove-company/remove-company.component';
import { GetCompanyComponent } from './Pages/Admin/get-company/get-company.component';
import { GetAllCompaniesComponent } from './Pages/Admin/get-all-companies/get-all-companies.component';
import { CreateCustomerComponent } from './Pages/Admin/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './Pages/Admin/update-customer/update-customer.component';
import { RemoveCustomerComponent } from './Pages/Admin/remove-customer/remove-customer.component';
import { GetCustomerComponent } from './Pages/Admin/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './Pages/Admin/get-all-customers/get-all-customers.component';

import { CompanyHomeComponent } from './Pages/Company/home/home.component';
import { CreateCouponComponent } from './Pages/Company/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './Pages/Company/update-coupon/update-coupon.component';
import { RemoveCouponComponent } from './Pages/Company/remove-coupon/remove-coupon.component';
import { GetCouponComponent } from './Pages/Company/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './Pages/Company/get-all-coupons/get-all-coupons.component';
import { GetCouponsByTypeComponent } from './Pages/Company/get-coupons-by-type/get-coupons-by-type.component';
import { GetCouponsByPriceComponent } from './Pages/Company/get-coupons-by-price/get-coupons-by-price.component';
import { GetCouponsByDateComponent } from './Pages/Company/get-coupons-by-date/get-coupons-by-date.component';

import { CustomerHomeComponent } from './Pages/Customer/home/home.component';
import { PurchaseCouponComponent } from "app/Pages/Customer/purchase-coupon/purchase-coupon.component";
import { GetAllPurchasedCouponsComponent } from "app/Pages/Customer/get-all-purchased-coupons/get-all-purchased-coupons.component";
import { GetPurchasedCouponsByTypeComponent } from "app/Pages/Customer/get-purchased-coupons-by-type/get-purchased-coupons-by-type.component";
import { GetPurchasedCouponsByPriceComponent } from "app/Pages/Customer/get-purchased-coupons-by-price/get-purchased-coupons-by-price.component";
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';

let routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'admin/create/company', component: CreateCompanyComponent },
  { path: 'admin/update/company', component: UpdateCompanyComponent },
  { path: 'admin/remove/company', component: RemoveCompanyComponent },
  { path: 'admin/get/company', component: GetCompanyComponent },
  { path: 'admin/get/all/companies', component: GetAllCompaniesComponent },
  { path: 'admin/create/customer', component: CreateCustomerComponent },
  { path: 'admin/update/customer', component: UpdateCustomerComponent },
  { path: 'admin/remove/customer', component: RemoveCustomerComponent },
  { path: 'admin/get/customer', component: GetCustomerComponent },
  { path: 'admin/get/all/customers', component: GetAllCustomersComponent },

  { path: 'company/create/coupon', component: CreateCouponComponent },
  { path: 'company/update/coupon', component: UpdateCouponComponent },
  { path: 'company/remove/coupon', component: RemoveCouponComponent },
  { path: 'company/get/coupon', component: GetCouponComponent },
  { path: 'company/get/all/coupons', component: GetAllCouponsComponent },
  { path: 'company/get/coupons/by/type', component: GetCouponsByTypeComponent },
  { path: 'company/get/coupons/by/price', component: GetCouponsByPriceComponent },
  { path: 'company/get/coupons/by/date', component: GetCouponsByDateComponent },

  { path: 'customer/purchase/coupon', component: PurchaseCouponComponent },
  { path: 'customer/get/all/purchased/coupons', component: GetAllPurchasedCouponsComponent },
  { path: 'customer/get/purchased/coupons/by/type', component: GetPurchasedCouponsByTypeComponent },
  { path: 'customer/get/purchased/coupons/by/price', component: GetPurchasedCouponsByPriceComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuContainerComponent,
    FooterContainerComponent,
    FeatureContainerComponent,

    AdminHomeComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    RemoveCompanyComponent,
    GetCompanyComponent,
    GetAllCompaniesComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    RemoveCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,

    CompanyHomeComponent,
    CreateCouponComponent,
    UpdateCouponComponent,
    RemoveCouponComponent,
    GetCouponComponent,
    GetAllCouponsComponent,
    GetCouponsByTypeComponent,
    GetCouponsByPriceComponent,
    GetCouponsByDateComponent,

    CustomerHomeComponent,
    PurchaseCouponComponent,
    GetAllPurchasedCouponsComponent,
    GetPurchasedCouponsByTypeComponent,
    GetPurchasedCouponsByPriceComponent,

    OrderByPipe,
    FilterPipe,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    InputTextModule,
    TooltipModule,
    PasswordModule,
    ButtonModule,
    GrowlModule,
    ChartModule,
    PaginatorModule,
    FieldsetModule,
    ContextMenuModule,
    DialogModule,
    TabMenuModule,
    SplitButtonModule,
    CalendarModule,
    DatepickerModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    OverlayPanelModule,
    LightboxModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    AppService,
    MessageService,
    AdminService,
    CompanyService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
