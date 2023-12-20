import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword = true;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  @Input() changeTemplate: any;

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        // Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/),
      ],
    ],
  });

  submitForm() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
    }
  }

  toggleVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
