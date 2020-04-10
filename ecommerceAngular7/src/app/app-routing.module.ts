import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { ShopcategoryComponent } from './shopcategory/shopcategory.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { CartviewComponent } from './cartview/cartview.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoplist', component: ShoplistComponent },
  { path: 'shopcategory', component: ShopcategoryComponent },
  { path: 'shopdetails', component: ShopdetailsComponent },
  { path: 'cartview', component: CartviewComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
