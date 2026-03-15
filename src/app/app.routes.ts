import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    component: HomeComponent,
    title: 'Home Page for Eman Robot Shopcd'
  },
  {path: 'catalog',
    component: CatalogComponent,
    title: 'Catalog Page for Eman Robot Shopcd'
  },
  // {path: 'catalog/:filter',
  //   component: CatalogComponent,
  //   title: 'Catalog Page for Eman Robot Shopcd'
  // },
  {path: 'cart',
    component: CartComponent,
    title: 'Cart Page for Eman Robot Shopcd'
  },
  {path: 'sign-in',
    component: SignInComponent,
    title: 'Sign In Page for Eman Robot Shopcd'
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'prefix' }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  /* ,
  /* …other routes… */
  //{ path: '**', redirectTo: '/home' }          // catch‑all */
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }