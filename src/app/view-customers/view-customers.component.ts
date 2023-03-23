import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/users';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent {
  title = 'Users.UI';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() : void {
    this.userService.getUsers().subscribe((result: User[]) => (this.users = result));
  }
}
