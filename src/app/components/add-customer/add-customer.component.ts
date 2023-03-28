import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { Allergies } from '../../models/allergies'
import { Conditions } from '../../models/conditions';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  public addUserIcon = faUserPlus;
  public allergies: string[] = Allergies;
  public conditions: string[] = Conditions;
}
