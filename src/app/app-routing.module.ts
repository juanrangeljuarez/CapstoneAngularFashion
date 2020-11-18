
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductsListComponent  } from './products-list/products-list.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';
import { ProductsAddComponent  } from './products-add/products-add.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { CartComponent } from './cart/cart.component';
import { ProductCustomerComponent } from './product-customer/product-customer.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate:[AuthGuard] },
  { path: 'companies-list', component:CompaniesListComponent, canActivate:[AuthGuard]},
  { path: 'companies-add', component:CompaniesAddComponent, canActivate:[AuthGuard]},
  { path: 'products-list', component:ProductsListComponent , canActivate:[AuthGuard]},
  { path: 'products-add', component:ProductsAddComponent , canActivate:[AuthGuard]},
  { path: 'products-details', component:ProductsDetailsComponent , canActivate:[AuthGuard]},
  { path: 'products-update', component:ProductsUpdateComponent , canActivate:[AuthGuard]},
  { path: 'cart', component:CartComponent , canActivate:[AuthGuard]},
  { path: 'products-customer', component:ProductCustomerComponent , canActivate:[AuthGuard]},
  { path: 'purchase-history', component:PurchaseHistoryComponent , canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
