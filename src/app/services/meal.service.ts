import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Meal } from "../models/meal";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private url = "Meal";

  constructor(private http: HttpClient) { }

  public getMeals() : Observable<Meal[]> {
    return this.http.get<Meal[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateMeal(meal: Meal) : Observable<Meal[]> {
    return this.http.put<Meal[]>(`${environment.apiUrl}/${this.url}`, meal);
  }

  public createMeal(meal: Meal) : Observable<Meal[]> {
    return this.http.post<Meal[]>(`${environment.apiUrl}/${this.url}`, meal);
  }

  public deleteMeal(meal: Meal) : Observable<Meal[]> {
    return this.http.delete<Meal[]>(`${environment.apiUrl}/${this.url}/${meal.id}`);
  }
}
