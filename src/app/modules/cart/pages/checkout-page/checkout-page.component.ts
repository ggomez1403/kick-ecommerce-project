import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  public addressForm!: FormGroup;
  public checkoutForm!: FormGroup;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.addressForm = this.initAddressForm();
    this.checkoutForm = this.initCheckoutForm();
  }

  initAddressForm(): FormGroup {
    return this.fb.group({
      address: ['', [Validators.required, Validators.minLength(5)]],
      references: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  initCheckoutForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          this.cardNumberValidator.bind(this),
        ],
      ],
      expirationMonth: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.min(1),
          Validators.max(12),
          this.expirationNumberValidator.bind(this),
        ],
      ],
      expirationYear: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.min(24),
          this.expirationNumberValidator.bind(this),
        ],
      ],
      cvc: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          this.CVCNumberValidator.bind(this),
        ],
      ],
    });
  }

  cardNumberValidator(control: FormControl) {
    const cardNumber = control.value;
    if (cardNumber && cardNumber.length !== 15) {
      return { invalidCardNumber: true };
    }
    return null;
  }

  expirationNumberValidator(control: FormControl) {
    const expNumber = control.value;
    if (expNumber && expNumber.length !== 2) {
      return { invalidExpNumber: true };
    }
    return null;
  }

  CVCNumberValidator(control: FormControl) {
    const cvcNumber = control.value;
    if (cvcNumber && cvcNumber.length !== 3) {
      return { invalidCVCNumber: true };
    }
    return null;
  }

  get address(): AbstractControl | null {
    return this.addressForm.get('address');
  }

  get references(): AbstractControl | null {
    return this.addressForm.get('references');
  }

  get name(): AbstractControl | null {
    return this.checkoutForm.get('name');
  }

  get cardNumber(): AbstractControl | null {
    return this.checkoutForm.get('cardNumber');
  }

  get expirationMonth(): AbstractControl | null {
    return this.checkoutForm.get('expirationMonth');
  }

  get expirationYear(): AbstractControl | null {
    return this.checkoutForm.get('expirationYear');
  }

  get cvc(): AbstractControl | null {
    return this.checkoutForm.get('cvc');
  }

  onNumberInput(event: any) {
    const input = event.target.value;
    const pattern = /^[0-9]+$/;
    if (!pattern.test(input)) {
      event.target.value = input.replace(/[^0-9]/g, '');
    }
  }
}
