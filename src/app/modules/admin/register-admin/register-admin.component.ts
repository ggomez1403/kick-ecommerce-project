import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../../core/models/User.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css'],
})
export class RegisterAdminComponent implements OnInit, OnDestroy {
  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService
  ) {}

  public registerForm!: FormGroup;
  public errorSession!: boolean;

  private subscription!: Subscription;
  private userRole: string = 'ADMIN';

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.registerForm = this.initForm();

    this.subscription = this.authService.errorLogin$.subscribe((error) => {
      this.errorSession = error;
    });
  }

  onSubmit(): void {
    const { firstName, lastName, phoneNumber, email, password } =
      this.registerForm.value;

    const user: User = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      role: this.userRole,
    };

    this.subscription = this.authService.registerUser(user).subscribe(
      () => {
        console.log('Register completed');
      },
      (error) => {
        console.log('Failed to register', error);
      }
    );
  }

  initForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          this.phoneNumberValidator.bind(this),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  phoneNumberValidator(control: FormControl) {
    const phoneNumber = control.value;
    if (phoneNumber && phoneNumber.length !== 10) {
      return { invalidPhoneNumber: true };
    }
    return null;
  }

  get firstName(): AbstractControl | null {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.registerForm.get('lastName');
  }

  get phoneNumber(): AbstractControl | null {
    return this.registerForm.get('phoneNumber');
  }

  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  onPhoneNumberInput(event: any) {
    const input = event.target.value;
    const pattern = /^[0-9]+$/;
    if (!pattern.test(input)) {
      event.target.value = input.replace(/[^0-9]/g, '');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.authService.resetErrorSession();
  }
}
