import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { Allergies } from '../../models/allergies'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  public addUserIcon = faUserPlus;
  public allergies: string[] = Allergies;

  //TODO: Create Meal model and GET meals onInit
  public meals: string[] = ['mockmeal1', 'mockMeal2', 'mockmeal3'];
}
