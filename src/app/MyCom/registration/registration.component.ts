import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/MyService/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = {
    username: null,
    // nid: null,
    email:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';




  
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
