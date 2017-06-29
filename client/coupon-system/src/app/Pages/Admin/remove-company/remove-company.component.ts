import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";
import { AdminService } from "app/Services/admin.service";
import { Company } from "app/core/company";

@Component({
  selector: 'remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  companyID: number;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, private adminService: AdminService) {

  }

  ngOnInit() {
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.removeCompany();
    }
  }

  removeCompany(): void {
    this.msgs = [];

    let company: Company = new Company(this.companyID, null, null, null, null);

    this.adminService.removeCompany(company).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Company Removed", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Remove Company Failed", validation.result));
      }
    });
  }

  resetInputs(): void {
    this.companyID = null;
  }

}
