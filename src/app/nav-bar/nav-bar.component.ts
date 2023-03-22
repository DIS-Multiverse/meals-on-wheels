import { Component } from '@angular/core';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public caretRightIcon = faCaretRight;
  public caretLeftIcon = faCaretLeft;

  public navOpen: Boolean = true;
}
