import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../models/users';
import { Allergies } from '../../models/allergies';
import { Conditions } from '../../models/conditions';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  @ViewChild('addUserForm') form!: NgForm;
  public addUserIcon = faUserPlus;
  public allergies: string[] = Allergies;
  public conditions: string[] = Conditions;
  public successView: boolean = false;

  public firstName!: string;
  public lastName!: string;
  public formAddress!: string;
  public formAge!: Number;

  constructor(private userService: UserService) {}

  public onSubmit(): void {
    this.createUser(
      new User({
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.formAddress,
        age: this.formAge,
        allergies: 'allergies',
        conditions: 'conditions',
      })
    );
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
