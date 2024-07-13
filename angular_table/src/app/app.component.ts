import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone:true,
  selector: 'app-root',
  template: `<app-customer></app-customer>`,
  imports: [CustomerComponent,HttpClientModule]
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
}
