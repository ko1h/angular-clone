import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Frontend Component

import { CardComponent } from './card/card.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TheLastestComponent } from './the-lastest/the-lastest.component';
import { CityBestComponent } from './city-best/city-best.component';
import { routing } from './app.routing';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { EditCardComponent } from './edit-card/edit-card.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SubscribeComponent,
    AdminComponent,
    WelcomeComponent,
    TheLastestComponent,
    CityBestComponent,
    CardDetailComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
