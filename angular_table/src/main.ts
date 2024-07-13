import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(HttpClientModule)
    // other providers
  ]
}).catch(err => console.error(err));
export { AppServerModule as default } from './app/app.module.server';

