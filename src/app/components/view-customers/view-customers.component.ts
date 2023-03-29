import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent {
  public userToEdit: User | undefined;
  public trashIcon = faTrash;
  public pencilIcon = faPencil;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() : void {
    this.userService.getUsers().subscribe((result: User[]) => (this.users = result));
  }

  private getAllUsers(): void {
    this.userService
      .getUsers()
      .subscribe((result: User[]) => (this.users = result));
  }

  public editUser(user: User) {
    this.userToEdit = user;
  }

  public deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => this.getAllUsers());
  }

  public onExitUserView(): void {
    this.userToEdit = undefined;
    this.getAllUsers();
  }
}
