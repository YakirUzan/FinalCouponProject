import { Component, OnInit } from '@angular/core';
import { MessageService } from "app/Services/message.service";
import { Message } from "primeng/primeng";
import { AdminService } from "app/Services/admin.service";
import { Customer } from "app/core/customer";

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerName: string;
  customerPassword: string;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
  }

  onKeyPressed($event): void {
    if ($event.charCode === 13) {
      this.createCustomer();
    }
  }

  createCustomer(): void {
    this.msgs = [];

    let customer = new Customer(0,this.customerName, this.customerPassword, null);

    this.adminService.createCustomer(customer).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Customer Created", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Create Customer Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.customerName = "";
    this.customerPassword = "";
  }

}
