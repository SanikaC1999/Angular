import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add a new header
    const clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer your-token-here') });

    // Handle the request
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
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
      })
    );
  }
}
