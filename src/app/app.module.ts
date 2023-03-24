import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewMealsComponent } from './components/view-meals/view-meals.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealOfMonthComponent } from './components/meal-of-month/meal-of-month.component';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';
import { SubmitIdeaComponent } from './components/submit-idea/submit-idea.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ViewCustomersComponent,
    AddCustomerComponent,
    ViewMealsComponent,
    AddMealComponent,
    MealOfMonthComponent,
    BulletinBoardComponent,
    SubmitIdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
