import { Component } from '@angular/core';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import { Allergies } from '../../models/allergies'
import { MealTypes } from '../../models/meal-types';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  public carrotIcon = faCarrot;
  public allergies: string[] = Allergies;
  public mealTypes: string[] = MealTypes;


  
  // createMeal(meal: Meal) {
  //   this.mealService
  //     .createMeal(meal)
  //     .subscribe((meal) => this.mealUpdated.emit(meal));
  // }
}
