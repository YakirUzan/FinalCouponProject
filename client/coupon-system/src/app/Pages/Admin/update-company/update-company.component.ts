import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { Company } from "app/core/company";

@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  companyID: number;
  companyName: string;
  companyEmail: string;
  companyPassword: string;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.updateCompany();
    }
  }

  updateCompany(): void {
    this.msgs = [];

    let company: Company = new Company(this.companyID, this.companyName, this.companyEmail, this.companyPassword, null);

    this.adminService.updateCompany(company).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Company Updated", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Update Company Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.companyID = null;
    this.companyName = "";
    this.companyEmail = "";
    this.companyPassword = "";
  }

}
