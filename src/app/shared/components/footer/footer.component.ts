import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  public discountForm!: FormGroup;

  ngOnInit(): void {
    this.discountForm = this.initForm();
  }

  onSubmit(): void {
    this.email?.reset();
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email(): AbstractControl | null {
    return this.discountForm.get('email');
  }
}
