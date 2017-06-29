import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { Customer } from "app/core/customer";

@Component({
  selector: 'remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  customerID: number;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.removeCustomer();
    }
  }

  removeCustomer(): void {
    this.msgs = [];

    let customer: Customer = new Customer(this.customerID, null, null, null);

    this.adminService.removeCustomer(customer).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Customer Removed", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Remove Customer Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.customerID = null;
  }

}
