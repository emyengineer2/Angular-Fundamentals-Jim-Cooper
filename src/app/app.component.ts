import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CatalogComponent, SiteHeaderComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eman-robot-shop';
}
