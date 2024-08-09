import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbAuthSocialLink } from '@nebular/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted = false;
  socialLinks!: NbAuthSocialLink[];

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Login Submitted!', formData);
      // Handle login logic here, e.g., send data to a server
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper method to get form controls
  get f() {
    return this.loginForm.controls;
  }

}
