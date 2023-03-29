import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { UserService } from './../services/user.service';
import { User } from './../models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() user!: User;
  @Output() exitUserView = new EventEmitter<null>();
  public pencilIcon = faPencil;

  constructor(private userService: UserService) {}

  public updateUser(): void {
    this.userService.updateUser(this.user!).subscribe(() => {
      this.exitUserView.emit();
    });
  }

  public cancelUpdate(): void {
    this.exitUserView.emit();
  }
}
