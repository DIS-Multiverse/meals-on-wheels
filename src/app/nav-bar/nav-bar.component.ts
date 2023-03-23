import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit,
  HostListener
 } from '@angular/core';
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
export class NavBarComponent implements OnInit {
  @Input() navOpen!: boolean;
  @Output() toggleNavBar = new EventEmitter<boolean>();
  public screenWidth!: Number;
  public smallScreen!: boolean;

  // Icons
  public caretRightIcon = faCaretRight;
  public caretLeftIcon = faCaretLeft;
  public houseIcon = faHouse;
  public usersIcon = faUsers;
  public addUserIcon = faUserPlus;
  public utensilsIcon = faUtensils;
  public carrotIcon = faCarrot;

  public ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.setSmallScreen();
  }

  @HostListener('window:resize', ['$event'])  
  onResize() {  
    this.screenWidth = window.innerWidth;
    this.setSmallScreen();  
  } 
  
  private setSmallScreen(): void {
    if (this.screenWidth < 1023) {
      this.smallScreen = true;
      this.navOpen = true;
      this.toggleNavBar.emit(this.navOpen);
    } else {
      this.smallScreen = false;
    }
  }

  public onNavClick() {
    this.navOpen = !this.navOpen;
    this.toggleNavBar.emit(this.navOpen);
  }
}
