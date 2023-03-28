import { Component } from '@angular/core';
import { Meal } from '../../models/meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'view-meals',
  templateUrl: './view-meals.component.html',
  styleUrls: ['./view-meals.component.css'],
})
export class ViewMealsComponent {
  title = 'Mow.UI';
  meals: Meal[] = [];
  mealToEdit?: Meal;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.getAllMeals();
  }

  initNewMeal() {
    this.mealToEdit = new Meal();
    this.getAllMeals();
  }

  editMeal(meal: Meal) {
    this.mealToEdit = meal;
    this.getAllMeals();
  }

  getAllMeals(): void {
    this.mealService
      .getMeals()
      .subscribe((result: Meal[]) => (this.meals = result));
  }
}
