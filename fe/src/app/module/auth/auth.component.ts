import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoggined = true;
  changeTemplates = () => {
    this.isLoggined = !this.isLoggined;
  };
}
