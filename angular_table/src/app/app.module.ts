import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
