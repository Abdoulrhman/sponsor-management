import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { SponsorService } from '../sponsor.service';
import { Router } from '@angular/router';  // Import the Router service

@Component({
  selector: 'app-sponsor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sponsor-form.component.html',
  styleUrls: ['./sponsor-form.component.scss']
})
export class SponsorFormComponent {
  sponsorForm: FormGroup;

  constructor(private fb: FormBuilder, private sponsorService: SponsorService, private router: Router) {  // Inject the Router service
    this.sponsorForm = this.fb.group({
      sponsor_code: ['', Validators.required],
      sponsor_name: ['', Validators.required],
      sponsor_name_latin: ['', Validators.required],
      sponsor_type: ['', Validators.required],
      address: ['', Validators.required],
      postal_code: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      max_limit: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      financial_limit: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      time_limit: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      active: [true, Validators.required],
      contactOfficers: this.fb.array([this.createContactOfficer()])
    });
  }

  get contactOfficers(): FormArray {
    return this.sponsorForm.get('contactOfficers') as FormArray;
  }

  createContactOfficer(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]+$')]
    });
  }

  addContactOfficer() {
    this.contactOfficers.push(this.createContactOfficer());
  }

  removeContactOfficer(index: number) {
    this.contactOfficers.removeAt(index);
  }

  prepareFormData(formGroup: FormGroup): FormData {
    const formData = new FormData();
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormArray) {
        (control as FormArray).controls.forEach((arrayControl, index) => {
          const arrayGroup = arrayControl as FormGroup;
          Object.keys(arrayGroup.controls).forEach(arrayKey => {
            formData.append(`contactOfficers[${index}][${arrayKey}]`, arrayGroup.get(arrayKey)?.value);
          });
        });
      } else {
        formData.append(key, control?.value);
      }
    });
    return formData;
  }

  onSubmit() {
    if (this.sponsorForm.valid) {
      const formData = this.prepareFormData(this.sponsorForm);

      this.sponsorService.createSponsor(formData).subscribe(response => {
        console.log('Sponsor created', response);
        alert('Sponsor created successfully!');
        this.router.navigate(['/sponsors']);  // Redirect to /sponsors after successful form submission
      }, error => {
        console.error('Error creating sponsor', error);
        alert('Error creating sponsor');
      });
    }
  }
}
