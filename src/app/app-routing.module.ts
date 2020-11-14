
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductsListComponent  } from './products-list/products-list.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate:[AuthGuard] },
  { path: 'companies-list', component:CompaniesListComponent, canActivate:[AuthGuard]},
  { path: 'companies-add', component:CompaniesAddComponent, canActivate:[AuthGuard]},
  { path: 'products-list', component:ProductsListComponent , canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
