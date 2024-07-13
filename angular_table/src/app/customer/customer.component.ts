import { Component, OnInit } from '@angular/core';
import { ICustomer, SharedService} from '../shared/shared.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterComponent } from './customer-list/filter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone:true,
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  imports: [CustomerListComponent, FilterComponent, CommonModule, FormsModule, HttpClientModule]
})
export class CustomerComponent implements OnInit{
public title:string = ""
public people:ICustomer[] = []
public isVisible = true
public searchText: string = "";

onChange(){
  this.isVisible = !this.isVisible
}

constructor(private sharedService: SharedService){}

ngOnInit(): void {
  this.title = "Customer Data Management"
  this.sharedService.getCustomers().subscribe(customers => {
    this.people = customers;
  });
}
}
