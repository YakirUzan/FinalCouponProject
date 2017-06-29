import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'feature-container',
  templateUrl: './feature-container.component.html',
  styleUrls: ['./feature-container.component.css']
})
export class FeatureContainerComponent implements OnInit {

  @Output() updated: EventEmitter<any> = new EventEmitter();
  
  private clientType: string;

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    switch (this.storage.retrieve("type")) {
      case "ADMIN":
        this.clientType = "Admin - ";
        break;
      case "COMPANY":
        this.clientType = "Company - ";
        break;
      case "CUSTOMER":
        this.clientType = "Customer - ";
        break;
    }
    this.clientType += this.storage.retrieve("name");
  }

  update(): void {
    this.updated.emit();
  }

}
