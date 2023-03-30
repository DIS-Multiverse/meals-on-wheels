import { Meal } from "./meal";

export class User {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  age: Number;
  allergies: string;
  conditions: string;
  currentMeal?: Meal;

  constructor(user: User) {
    {
      this.id = user.id;
      this.firstName = user.firstName || '';
      this.lastName = user.lastName || '';
      this.address = user.address || '';
      this.age = user.age || 0;
      this.allergies = user.allergies || '';
      this.conditions = user.conditions || '';
      this.currentMeal = user.currentMeal;
    }
  }
}
