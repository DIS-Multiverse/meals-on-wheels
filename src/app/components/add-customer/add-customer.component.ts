import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../models/users';
import { Allergy } from '../../models/allergy';
import { Allergies } from '../../models/allergies';
import { Condition } from 'src/app/models/condition';
import { Conditions } from '../../models/conditions';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  @ViewChild('addUserForm') form!: NgForm;
  public successView: boolean = false;
  public addUserIcon = faUserPlus;
  public allergies: Allergy[] = Allergies;
  public conditions: Condition[] = Conditions;
  
  public firstName!: string;
  public lastName!: string;
  public formAddress!: string;
  public formAge!: Number;

  private selectedAllergies: string[] = [];
  private selectedConditions: string[] = [];

  constructor(private userService: UserService) {}

  public onSubmit(): void {
    this.createUser(
      new User({
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.formAddress,
        age: this.formAge,
        allergies: this.selectedAllergies.join(' '),
        conditions: this.selectedConditions.join(' '),
      })
    );
  }

  public onAllergyChange(allergy: Allergy): void {
    if (allergy.isSelected) {
      this.selectedAllergies.push(allergy.name);
    } else {
      this.selectedAllergies.forEach((name, index) => {
        if (name === allergy.name) {
          this.selectedAllergies.splice(index, 1);
        }
      });
    }
  }

  public onConditionChange(condition: Condition): void {
    if (condition.isSelected) {
      this.selectedConditions.push(condition.name);
    } else {
      
      this.selectedConditions.forEach((name, index) => {
        if (name === condition.name) {
          this.selectedConditions.splice(index, 1);
        }
      });
    }
  }

  public onBackClick(): void {
    this.successView = false;
  }

  public onClearClick(): void {
    this.form.reset();
  }

  private createUser(user: User) {
    this.userService.createUser(user).subscribe(() => {
      this.successView = true;
      this.form.reset();
    });
  }
}
