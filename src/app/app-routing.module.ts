import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ViewMealsComponent } from './components/view-meals/view-meals.component';

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
