import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

import { GamesService } from './services/games.service'
import { AuthModule } from '@auth0/auth0-angular';
//import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';
import { OrdersComponent } from './components/orders/orders.component';
//import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
   // HomeComponent,
    ProfileComponent,
    SpinnerComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-ir5w33m0payzy7ge.us.auth0.com',
      clientId: '7mepSfFjZ6HzqZgwO8VyRGMC7bvBIF8L',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [
    GamesService,
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
