import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import { Allergies } from '../../models/allergies';
import { MealTypes } from '../../models/meal-types';
import { Meal } from '../../models/meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css'],
})
export class AddMealComponent {
  public carrotIcon = faCarrot;
  public allergies: string[] = Allergies;
  public mealTypes: string[] = MealTypes;
  public successView: boolean = false;

  public mealName!: string;
  public ingredientArr!: string[];

  constructor(private mealService: MealService) {}

  public onSubmit(): void {
    this.createMeal(
      new Meal({
        name: this.mealName,
        ingredients: this.ingredientArr,
      })
    );
  }

  public onBackClick(): void {
    this.successView = false;
  }

  private createMeal(meal: Meal) {
    this.mealService.createMeal(meal).subscribe(() => {
      this.successView = true;
      this.clearForm();
    });
  }

  private clearForm(): void {
    this.mealName = '';
    this.ingredientArr = [];
  }
}
