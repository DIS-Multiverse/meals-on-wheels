import { Component } from '@angular/core';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meal-of-month',
  templateUrl: './meal-of-month.component.html',
  styleUrls: ['./meal-of-month.component.css']
})
export class MealOfMonthComponent {
  public medalicon = faMedal;
}
