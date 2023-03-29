import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons'


import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css'],
})
export class EditMealComponent {
  @Input() meal!: Meal;
  @Output() exitMealView = new EventEmitter<null>();
  public pencilIcon = faPencil;

  constructor(private mealService: MealService) {}

  public updateMeal(): void {
    this.mealService.updateMeal(this.meal!).subscribe(() => {
      this.exitMealView.emit();
    });
  }

  public cancelUpdate(): void {
    this.exitMealView.emit();
  }
}
