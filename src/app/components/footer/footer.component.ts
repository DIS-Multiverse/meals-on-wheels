import { Component } from '@angular/core';
import { faFacebookSquare, faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public facebookIcon = faFacebookSquare;
  public instagramIcon = faInstagram;
  public githubIcon = faGithub;
  public linkedInIcon = faLinkedin;
  public twitterIcon = faTwitter;
}
