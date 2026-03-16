import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = {
    email: 'emy@gmail.com',
    password: '',
  };

  signInError: boolean = false;


  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    this.signInError = false;

    this.userService.signIn(this.credentials).subscribe({
      next: (user) => {
        console.log('User signed in:', user);
        this.router.navigate(['/catalog']);
      },
      error: (error) => {
        console.error('Sign-in failed:', error);
        this.signInError = true;
      },
    });
  }


}
