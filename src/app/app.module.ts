import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '.@angular/forms';
// import { HttpModule } from '@angular/http'''
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HowComponent } from './how/how.component';
import { CorporateComponent } from './corporate/corporate.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HowComponent,
    CorporateComponent,
    PricingComponent,
    HomeComponent,
    FaqComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
