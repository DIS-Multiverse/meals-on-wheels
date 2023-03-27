import { Component } from '@angular/core';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css']
})
export class BulletinBoardComponent {
  public tackIcon = faThumbTack;
}
