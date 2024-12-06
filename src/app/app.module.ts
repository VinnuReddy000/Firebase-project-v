import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "projectId":"fir-project-v",
      "appId":"1:998707427974:web:3638cc10dc9a9ae7f62f07",
      "storageBucket":"fir-project-v.firebasestorage.app",
      "apiKey":"AIzaSyCGOh2K-h_qEfVEXEEzBQczY3KdjB2eWYQ",
      "authDomain":"fir-project-v.firebaseapp.com",
      "messagingSenderId":"998707427974",
      "measurementId":"G-WTM3WSK5ED"
    })),

    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
