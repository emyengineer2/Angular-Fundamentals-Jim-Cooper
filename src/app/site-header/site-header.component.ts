import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class SiteHeaderComponent implements OnInit {
  user : IUser | null = null;
  showSignOutMenu: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getUser().
      subscribe({next: (user) => {
        this.user = user;
      }});
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.user = null;
    this.showSignOutMenu = false;
  }

}
