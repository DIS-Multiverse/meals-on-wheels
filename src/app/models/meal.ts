export class Meal {
  id?: number;
  name: string;
  ingredients: string[];

  constructor(meal: Meal) {
    {
      this.id = meal.id;
      this.name = meal.name || '';
      this.ingredients = meal.ingredients || [];
    }
  }
}
