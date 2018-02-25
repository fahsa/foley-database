import { CreateEffectComponent } from './effects/create-effect/create-effect.component';
import { EffectsListComponent } from './effects/effects-list/effects-list.component';
import { SearchEffectsComponent } from './effects/search-effects/search-effects.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'effects', pathMatch: 'full'},
  {path: 'effects', component: EffectsListComponent},
  {path: 'add', component: CreateEffectComponent},
  {path: 'find', component: SearchEffectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
