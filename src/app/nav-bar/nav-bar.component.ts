import { Component, Input, Output, EventEmitter } from '@angular/core';
import { 
  faCaretRight, 
  faCaretLeft, 
  faHouse, 
  faUsers, 
  faUserPlus,
  faUtensils,
  faCarrot
 } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() navOpen!: boolean;
  @Output() toggleNavBar = new EventEmitter<boolean>();
  public caretRightIcon = faCaretRight;
  public caretLeftIcon = faCaretLeft;
  public houseIcon = faHouse;
  public usersIcon = faUsers;
  public addUserIcon = faUserPlus;
  public utensilsIcon = faUtensils;
  public carrotIcon = faCarrot;

  public onNavClick() {
    this.navOpen = !this.navOpen;
    this.toggleNavBar.emit(this.navOpen);
  }
}
