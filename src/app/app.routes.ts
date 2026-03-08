import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

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
  {path: 'catalog/:filter',
    component: CatalogComponent,
    title: 'Catalog Page for Eman Robot Shopcd'
  },
  {path: 'cart',
    component: CartComponent,
    title: 'Cart Page for Eman Robot Shopcd'
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