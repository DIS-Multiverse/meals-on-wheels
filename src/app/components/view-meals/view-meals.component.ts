import { Component } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

import { Meal } from '../../models/meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'view-meals',
  templateUrl: './view-meals.component.html',
  styleUrls: ['./view-meals.component.css'],
})
export class ViewMealsComponent {
  public meals: Meal[] = [];
  public mealToEdit: Meal | undefined;
  public trashIcon = faTrash;
  public pencilIcon = faPencil;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.getAllMeals();
  }

  private getAllMeals(): void {
    this.mealService
      .getMeals()
      .subscribe((result: Meal[]) => (this.meals = result));
  }

  public editMeal(meal: Meal) {
    this.mealToEdit = meal;
  }

  public deleteMeal(meal: Meal) {
    this.mealService.deleteMeal(meal).subscribe(() => this.getAllMeals());
  }

  public onMealUpdated(): void {
    this.mealToEdit = undefined;
    this.getAllMeals();
  }

  public onEditCancelled(): void {
    this.mealToEdit = undefined;
  }
}
