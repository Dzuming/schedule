import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { MainReducer } from './state-managements/reducers/main.reducer';
import { MainEffects } from './state-managements/effects/main.effects';
import { AppComponent } from './app.component';
import { ScheduleModule } from './schedule/schedule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScheduleModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'schedule'),
    AngularFireDatabaseModule,
    StoreModule.provideStore({ MainReducer }),
     EffectsModule.run(MainEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
