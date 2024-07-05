import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http'; // Asegúrate de que esté importado desde @angular/common/http
import { AppComponent } from './app/app.component';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from '../routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from "@angular/platform-browser";
import { CookieService } from "ngx-cookie-service";
import { provideHttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import {TranslateLoader} from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideProtractorTestingSupport(),
    provideAnimationsAsync(),
    BrowserModule,
    HttpClientModule, // Incluye HttpClientModule en los proveedores
    HttpClient,
    provideHttpClient(),
    CookieService,
    ErrorHandler,
  ]
}).catch((err) => console.error(err));
