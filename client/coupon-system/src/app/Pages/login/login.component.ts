import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from "app/Core/user";
import { AppService } from "app/Services/app.service";
import { SelectItem, Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import * as _ from "underscore";
import { Validation } from "app/Core/validation";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() visible: boolean;
  @Output() loginSuccessed: EventEmitter<User> = new EventEmitter();

  private msgs: Message[] = [];
  private user: User = new User("", "", "ADMIN");
  private types: SelectItem[] = [];

  constructor(private appService: AppService, private messageService: MessageService) { }

  ngOnInit() {
    this.initTypeItems();
  }

  initTypeItems(): void {
    this.types.push({ label: "Admin", value: "ADMIN" });
    this.types.push({ label: "Company", value: "COMPANY" });
    this.types.push({ label: "Customer", value: "CUSTOMER" });
  }

  onSubmit() {
    this.msgs = [];
    let validtion: Validation = this.validateUser();

    if (validtion.success) {
      this.appService.login(this.user).subscribe(this.onLoginSuccessed.bind(this), this.onLoginFailed.bind(this));
    } else {
      this.msgs.push(this.messageService.createErrorMessage("Login Failed", validtion.result));
    }
  }

  validateUser(): Validation {
    let errorMessage: string = "";

    if (_.isEmpty(this.user.name)) {
      errorMessage += "Field name is empty" + "<br>";
    }

    if (_.isEmpty(this.user.password)) {
      errorMessage += "Field password is empty" + "<br>";
    }

    if (_.isEmpty(this.user.type)) {
      errorMessage += "Field type is empty" + "<br>";
    }

    return new Validation(_.isEmpty(errorMessage), errorMessage);
  }

  onLoginSuccessed(): void {
    this.loginSuccessed.emit(this.user);
    this.msgs.push(this.messageService.createSuccessMessage("Login Successed", "Welcome " + this.user.name + " !"))
  }

  onLoginFailed(error: any): void {
    this.msgs.push(this.messageService.createErrorMessage("Login Failed", error.text()))
  }

}
