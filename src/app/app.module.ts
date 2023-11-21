import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { ViewBillProductsComponent } from './material-component/dialog/view-bill-products/view-bill-products.component';
import { AccordionDirectiveDirective } from './shared/accordin/accordion-directive.directive';
import { AccordionAnchorDirectiveDirective } from './shared/accordin/accordion-anchor-directive.directive';
import { AccordionLinkDirectiveDirective } from './shared/accordin/accordion-link-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BestSellerComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ViewBillProductsComponent,
    AccordionDirectiveDirective,
    AccordionAnchorDirectiveDirective,
    AccordionLinkDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
