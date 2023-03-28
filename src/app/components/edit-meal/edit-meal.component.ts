import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css'],
})
export class EditMealComponent {
  @Input() meal!: Meal;
  @Output() mealUpdated = new EventEmitter<null>();

  constructor(private mealService: MealService) {}

  public updateMeal(): void {
    this.mealService.updateMeal(this.meal!).subscribe(() => {
      this.mealUpdated.emit();
    });
  }
}
