import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '@angular/fire/storage';
//import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule, FirebaseApp } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import { FIREBASE_OPTIONS } from '@angular/fire/compat';



import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment.prod';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { LoginComponent } from './auth/login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent,
    AllPostComponent,
    NewPostComponent,
    LoginComponent,
    SubscribersComponent
  ],
  imports: [
    BrowserModule,
    FirestoreModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
