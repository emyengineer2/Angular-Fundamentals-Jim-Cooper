import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserCredentials } from '../user.model';

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

  constructor() {}
}
