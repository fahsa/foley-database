import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { EffectsListComponent } from './effects/effects-list/effects-list.component';
import { EffectDetailsComponent } from './effects/effect-details/effect-details.component';
import { CreateEffectComponent } from './effects/create-effect/create-effect.component';

import { EffectService } from './effects/effect.service';

@NgModule({
  declarations: [
    AppComponent,
    EffectsListComponent,
    EffectDetailsComponent,
    CreateEffectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [ EffectService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
