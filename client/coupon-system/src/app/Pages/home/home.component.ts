import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private type: string;

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    this.type = this.storage.retrieve("type");
  }

}
