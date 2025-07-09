import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app.routes';
import { UserDetail } from './components/user-detail/user-detail';
import { UserList } from './components/user-list/user-list';

@NgModule({
  // <- NO declarations
  // declarations: [App, UserList, UserDetail],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    App, // <- standalone components imported here
    UserList,
    UserDetail,
    AppRoutingModule,
  ],
  // you can still bootstrap a standalone component from here
  // bootstrap: [App],
})
export class AppModule {}
