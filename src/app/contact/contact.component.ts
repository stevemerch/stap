import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
  myForm: FormGroup;
  feedback: Feedback;
  feedbackCopy: Feedback = <Feedback>{};
  spinnerVisibility: boolean = false;
  errMess: string;
  @ViewChild('fform') feedbackFormDirective: { resetForm: () => void; };

  formErrors: any = {
         'firstname': '',
         'lastname': '',
         'email': ''
       };

       validationMessages: any = {
         'firstname': {
           'required': 'First Name is required.',
           'minlength': 'First Name must be at least 2 characters long.',
           'maxlength': 'FirstName cannot be more than 25 characters long.'
         },
         'lastname': {
           'required': 'Last Name is required.',
           'minlength': 'Last Name must be at least 2 characters long.',
           'maxlength': 'Last Name cannot be more than 25 characters long.'
         },
         'email': {
           'required': 'Email is required.',
           'email': 'Email not in valid format.'
         },
       };

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      message: ''
    });

    this.myForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //(re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.myForm) { return; }
    const form = this.myForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
    onSubmit() {
      this.spinnerVisibility = true;
      this.feedbackCopy = this.myForm.value;

      // show spinner until comfirmation || don't at all
      console.log(this.feedbackCopy);
      this.myForm.reset({
               firstname: '',
               lastname: '',
               email: '',
               message: ''
             });
      this.feedbackFormDirective.resetForm();
  }
}
