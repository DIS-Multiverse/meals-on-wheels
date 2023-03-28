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
  @Output() mealUpdated = new EventEmitter<null>();
  @Output() editCancelled = new EventEmitter<null>();
  public pencilIcon = faPencil;

  constructor(private mealService: MealService) {}

  public updateMeal(): void {
    this.mealService.updateMeal(this.meal!).subscribe(() => {
      this.mealUpdated.emit();
    });
  }

  public cancelUpdate(): void {
    this.editCancelled.emit();
  }
}
