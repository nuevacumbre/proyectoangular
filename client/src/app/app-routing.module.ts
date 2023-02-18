import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Guard } from './guard/auth0.guard';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
//import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },{
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent,
    canActivate:[Auth0Guard]
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent,
    canActivate:[Auth0Guard]
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[Auth0Guard]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate:[Auth0Guard]
  },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'clients', loadChildren: () => import('./components/clients/clients.module').then(m => m.ClientsModule), canActivate:[Auth0Guard] }//,{path: '', pathMatch:'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

