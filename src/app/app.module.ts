import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CategoryListComponent } from './effects/category-list/category-list.component';
// import { EffectsListComponent } from './effects/effects-list/effects-list.component';
import { CategoryDetailsComponent } from './effects/category-details/category-details.component';
import { CreateEffectComponent } from './effects/create-effect/create-effect.component';
import { KeywordSearchComponent } from './effects/keyword-search/keyword-search.component';
import { FilenameSearchComponent } from './effects/filename-search/filename-search.component';
import { EffectService } from './effects/effect.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    // EffectsListComponent,
    CategoryDetailsComponent,
    CreateEffectComponent,
    KeywordSearchComponent,
    FilenameSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFireAuthModule, // for authentication
  ],
  providers: [ EffectService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
