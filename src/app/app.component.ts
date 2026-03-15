import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';   // <<– import this
                                                      // call forRoot/forCh
import { AppRoutingModule } from './app.routes';  // <<– add this
import { SignInComponent } from './user/sign-in/sign-in.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CatalogComponent, SiteHeaderComponent, CartComponent, SignInComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eman-robot-shop';
}
