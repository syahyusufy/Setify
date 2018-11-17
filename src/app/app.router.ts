import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { HowComponent } from './how/how.component';
import { CorporateComponent } from './corporate/corporate.component';
import { PricingComponent } from './pricing/pricing.component';
import { UploadComponent } from './upload/upload.component';

export const router: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'how', component: HowComponent },
    { path: 'corporate', component: CorporateComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'upload', component: UploadComponent } 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);