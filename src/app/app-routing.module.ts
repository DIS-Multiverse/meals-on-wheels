import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewMealsComponent } from './view-meals/view-meals.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'view-customers', component: ViewCustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'view-meals', component: ViewMealsComponent },
  { path: 'add-meal', component: AddMealComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
