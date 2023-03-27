import { Component } from '@angular/core';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-submit-idea',
  templateUrl: './submit-idea.component.html',
  styleUrls: ['./submit-idea.component.css']
})
export class SubmitIdeaComponent {
  public pepperIcon = faPepperHot;
}
