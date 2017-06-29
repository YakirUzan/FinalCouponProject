import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { AppService } from "app/Services/app.service";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { Customer } from "app/core/customer";

@Component({
  selector: 'update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerID: number;
  customerName: string;
  customerPassword: string;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.updateCustomer();
    }
  }

  updateCustomer(): void {
    this.msgs = [];

    let customer: Customer = new Customer(this.customerID, this.customerName, this.customerPassword, null);

    this.adminService.updateCustomer(customer).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Customer Updated", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Update Customer Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.customerID = null;
    this.customerName = "";
    this.customerPassword = "";
  }

}
