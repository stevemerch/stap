import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading

  responseMessage: string = '';

  contactForm!: FormGroup;
  honeypot: FormControl = new FormControl('');

  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(512),
      ]),
      honeypot: this.honeypot // we will use this to prevent spam
    });
  }

  public onSubmit(): void {
    if (this.contactForm.status == 'VALID' && this.honeypot.value == '') {
      
      this.contactForm.disable() // disable form to prevent multiple submissions
      this.isLoading = true;

      let formData: FormData = new FormData(); // data we will be sending to formspree
      formData.append('Name', this.contactForm.get('name')?.value);
      formData.append('Email', this.contactForm.get('email')?.value);
      formData.append('message', this.contactForm.get('message')?.value);

      this.http.post('https://formspree.io/f/xdoraalw', formData).subscribe({
        next: (response) => {
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
          console.warn('Your message has been received', this.contactForm.value);
          this.contactForm.reset();
          this.contactForm.enable()
        },
        error: (error) => {
          this.responseMessage =
            'Oops! An error occurred... Reload the page and try again.';
          this.contactForm.enable(); 
          this.submitted = false; // show the response message
          this.isLoading = false; // re enable the submit button
          console.error(error);
          this.contactForm.reset();
        } 
      })
    }
  }
  resetForm() {
    this.contactForm.reset();
    this.isLoading = false;
    this.submitted = false;
  }
}
