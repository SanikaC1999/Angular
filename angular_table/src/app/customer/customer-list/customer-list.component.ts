import { Component, Input, OnInit } from '@angular/core';
import { FilterComponent } from './filter.component';
import { ICustomer } from '../../shared/shared.service';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { CaptilisedPipe } from '../../shared/captilised.pipe';
import { SortService } from '../../shared/sort.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  standalone: true,
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [FilterComponent, CommonModule, HighlightDirective, CaptilisedPipe]
})
export class CustomerListComponent implements OnInit {
  private _customer: ICustomer[] = [];
  private filterSubject: Subject<string> = new Subject<string>();

  constructor(private sortService: SortService) {}

  @Input()
  get customers(): ICustomer[] {
    return this._customer;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.fileteredCustomer = this._customer = value;
      this.calculateTotalEarnings();
    }
  }

  public fileteredCustomer: ICustomer[] = [];
  public customerOrderTotal: number = 0;
  public countryCode: string = 'USD';

  ngOnInit(): void {
    this.filterSubject.pipe(debounceTime(1000)).subscribe(data => {
      this.filter(data);
    });
  }

  filter(data: string) {
    if (data) {
      this.fileteredCustomer = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().includes(data.toLowerCase()) ||
          cust.city.toLowerCase().includes(data.toLowerCase()) ||
          cust.grandTotal.toString().includes(data)
        );
      });
    } else {
      this.fileteredCustomer = this.customers;
    }
    this.calculateTotalEarnings();
  }

  calculateTotalEarnings(): void {
    this.customerOrderTotal = this.fileteredCustomer.reduce((total, customer) => total + customer.grandTotal, 0);
  }

  sort(prop: string, direction: 'asc' | 'desc' = 'asc'): void {
    this.customers = this.sortService.sort(this.customers, prop, direction);
  }
}
