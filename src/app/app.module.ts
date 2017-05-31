import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import firebaseConfig from './config/env';
import { AngularFireModule } from 'angularfire2';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdInputModule, MdRippleModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInService } from './sign-in/sign-in.service'
import { appRouter } from './app.router';
import { AngularFireDatabase } from "angularfire2/database/database";
import { AngularFireAuth } from "angularfire2/auth/auth";
import { ChatComponent } from './chat/chat.component';
import { ChatService } from "./chat/chat.service";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdMenuModule,
    MdRippleModule,
    RouterModule.forRoot(appRouter),
    ReactiveFormsModule
  ],
  providers: [
    ChatService,
    SignInService,
    AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
