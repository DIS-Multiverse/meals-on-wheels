import { Component } from '@angular/core';
import { faUtensils, faTruckFast } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public utensilsIcon = faUtensils;
  public truckIcon = faTruckFast;

}
