import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

export interface ICustomer {
  id: number;
  name: string;
  city: string;
  grandTotal: number;
  customerSince: Date;
}

export interface IOderId {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
