import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FetchUserComponent } from './users/fetch-user/fetch-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FetchUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
