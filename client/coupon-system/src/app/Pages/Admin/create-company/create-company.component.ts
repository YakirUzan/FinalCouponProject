import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { AppService } from "app/Services/app.service";
import { Company } from "app/core/company";

@Component({
  selector: 'create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  companyName: string;
  companyEmail: string;
  companyPassword: string;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
  }

  onKeyPressed($event): void {
    if ($event.charCode === 13) {
      this.createCompany();
    }
  }

  createCompany(): void {
    this.msgs = [];

    let company: Company = new Company(0, this.companyName, this.companyEmail, this.companyPassword, null);

    this.adminService.createCompany(company).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Company Created", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Create Company Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.companyName = "";
    this.companyEmail = "";
    this.companyPassword = "";
  }

}
