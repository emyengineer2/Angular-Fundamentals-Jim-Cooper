import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = {
    email: 'emy@gmail.com',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    this.userService.signIn(this.credentials).subscribe({
      next: (user) => {
        console.log('User signed in:', user);
        this.router.navigate(['/catalog']);
      },
      error: (error) => {
        console.error('Sign-in failed:', error);
      },
    });
  }


}
