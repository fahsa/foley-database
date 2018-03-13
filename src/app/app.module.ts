import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CategoryListComponent } from './effects/category-list/category-list.component';
import { EffectsListComponent } from './effects/effects-list/effects-list.component';
import { CategoryDetailsComponent } from './effects/category-details/category-details.component';
import { CreateEffectComponent } from './effects/create-effect/create-effect.component';

import { EffectService } from './effects/effect.service';
import { SearchEffectsComponent } from './effects/search-effects/search-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    EffectsListComponent,
    CategoryDetailsComponent,
    CreateEffectComponent,
    SearchEffectsComponent
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
