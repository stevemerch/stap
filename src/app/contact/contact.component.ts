import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { faMailBulk, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faMailBulk = faMailBulk;
  faPhoneSquare = faPhoneSquare;
  form: UntypedFormGroup;
  firstname: UntypedFormControl;
  lastname: UntypedFormControl;
  email: UntypedFormControl;
  message: UntypedFormControl;
  honeypot: UntypedFormControl; // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseName: string;
  responseMessage: string; // the response message to show to the user
  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient) {
    this.initForm();
  }

  initForm() {
    this.firstname = new UntypedFormControl('', [Validators.required]);
    this.lastname = new UntypedFormControl('', [Validators.required]);
    this.email = new UntypedFormControl('', [Validators.required, Validators.email]);
    this.message = new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(512),
    ]);
    this.honeypot = new UntypedFormControl(''); // we will use this to prevent spam
    this.form = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot,
    });
  }

  ngOnInit(): void {}

  public onSubmit(formDirective: FormGroupDirective) {
    if (this.form.status == 'VALID' && this.honeypot.value == '') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('firstname', this.form.get('firstname')?.value);
      formData.append('lastname', this.form.get('lastname')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('message', this.form.get('message')?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.responseName = this.form.get('firstname')?.value;
      this.form.reset();
      formDirective.resetForm();
      this.http.post('https://formspree.io/f/xjvlyjod', formData).subscribe({
        next: (response) => {
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
          this.responseMessage =
            'Thanks, ' + this.responseName + ' for your feedback!';
        },
        error: (error) => {
          this.responseMessage =
            'Oops! An error occurred... Reload the page and try again.';
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        },
      });
    }
  }
  resetForm() {
    this.initForm();
    this.isLoading = false;
    this.submitted = false;
  }
}
