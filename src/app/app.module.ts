import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"workhub-cf3d8","appId":"1:22894850849:web:1f3161aea0823e511dc460","databaseURL":"https://workhub-cf3d8-default-rtdb.firebaseio.com","storageBucket":"workhub-cf3d8.appspot.com","apiKey":"AIzaSyDYrtcZh-notfLX7F5Rn3taV6e7k7OYX6c","authDomain":"workhub-cf3d8.firebaseapp.com","messagingSenderId":"22894850849","measurementId":"G-W5RL8J4M80"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
