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
import { ScheduleReducer } from './state-managements/reducers/schedule.reducer';
import { ScheduleEffects } from './state-managements/effects/schedule.effect';
import { AppComponent } from './app.component';
import { ScheduleModule } from './schedule/schedule.module';
import { RestService } from "app/shared/services/rest.service";
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
    StoreModule.provideStore({ ScheduleReducer }),
    EffectsModule.run(ScheduleEffects)
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
