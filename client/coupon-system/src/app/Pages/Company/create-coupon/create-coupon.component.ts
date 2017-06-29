import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, ContentChild, ElementRef } from '@angular/core';
import { CompanyService } from "app/Services/company.service";
import { Coupon } from "app/Core/coupon";
import { SelectItem, Message } from "primeng/primeng";
import { MessageService } from "app/Services/message.service";

@Component({
  selector: 'create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  private types: SelectItem[] = [];

  private couponTitle: string;
  private couponType: string;
  private couponStartDate: Date;
  private couponEndDate: Date;
  private couponAmount: number;
  private couponPrice: number;
  private couponMessage: string;
  private couponImage: string;

  @ViewChild('imageSelected')
  private imageSelected: any;

  private image: any = {};
  private msgs: Message[] = [];

  constructor(private messageService: MessageService, private companyService: CompanyService) {
    this.initItems();
  }

  ngOnInit() {
  }

  initItems(): void {
    this.types.push({ label: "Resturants", value: "RESTURANS" });
    this.types.push({ label: "Electricity", value: "ELECTRICITY" });
    this.types.push({ label: "Food", value: "FOOD" });
    this.types.push({ label: "Health", value: "HEALTH" });
    this.types.push({ label: "Sports", value: "SPORTS" });
    this.types.push({ label: "Camping", value: "CAMPING" });
    this.types.push({ label: "Travelling", value: "TRAVELLING" });
  }

  onKeyPressed(event): void {
    if (event.charCode === 13) {
      this.createCoupon();
    }
  }

  onFileUploaded(event) {
    let file: File = event.target.files[0];
    let fileReader: FileReader = new FileReader();

    fileReader.onloadend = (e) => {
      this.couponImage = fileReader.result;
      this.image.content = fileReader.result;
      this.image.name = file.name;
      this.image.size = file.size / 1000 + " KB";
    }

    fileReader.readAsDataURL(file);
  }

  createCoupon() {
    this.msgs = [];

    let coupon: Coupon = new Coupon(0, this.couponTitle, this.couponStartDate, this.couponEndDate, this.couponAmount,
      this.couponType, this.couponMessage, this.couponPrice, this.couponImage);

    this.companyService.createCoupon(coupon).subscribe((validation) => {
      if (validation.success) {
        this.msgs.push(this.messageService.createSuccessMessage("Coupon Created", validation.result));
        this.resetInputs();
      } else {
        this.msgs.push(this.messageService.createErrorMessage("Create Coupon Failed", validation.result));
      }
    });
  }

  resetImageSelected(): void {
    this.imageSelected.nativeElement.value = "";
    this.image = {};
  }

  resetInputs(): void {
    this.couponTitle = "";
    this.couponStartDate = null;
    this.couponEndDate = null;
    this.couponAmount = null;
    this.couponType = "";
    this.couponMessage = "";
    this.couponPrice = null;
    this.couponImage = "";

    this.image = {};
  }

}
