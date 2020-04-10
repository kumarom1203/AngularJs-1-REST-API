import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { ShopcategoryComponent } from './shopcategory/shopcategory.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { CartviewComponent } from './cartview/cartview.component';
import { OrderComponent } from './order/order.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShoplistComponent,
    ShopcategoryComponent,
    ShopdetailsComponent,
    CartviewComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
