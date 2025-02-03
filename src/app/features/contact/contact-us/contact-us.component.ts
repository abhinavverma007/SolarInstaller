import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsFormGroup!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.constructForm();
  }

  constructForm() {
    this.contactUsFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[6789]\d{9}$')]],
      inquiryType: ['', Validators.required],
      zipCode: ['', Validators.required],
      roofType: ['', Validators.required],
      energyBill: ['', Validators.required],
      budgetRange: ['', Validators.required],
      preferredTimeline: ['', Validators.required],
      referralSource: [''],
      consent: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactUsFormGroup.valid) {
      console.log('fdfvd');
    }
  }
}
