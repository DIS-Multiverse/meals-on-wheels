import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css'],
})
export class EditMealComponent implements OnInit {
  @Input() meal?: Meal;
  @Output() mealUpdated = new EventEmitter<Meal[]>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {}

  updateMeal(meal: Meal) {
    this.mealService
      .updateMeal(meal)
      .subscribe((meal) => this.mealUpdated.emit(meal));
  }

  deleteMeal(meal: Meal) {
    this.mealService
      .deleteMeal(meal)
      .subscribe((meal) => this.mealUpdated.emit(meal));
  }

  createMeal(meal: Meal) {
    this.mealService
      .createMeal(meal)
      .subscribe((meal) => this.mealUpdated.emit(meal));
  }
}
