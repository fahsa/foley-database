import { CreateEffectComponent } from './effects/create-effect/create-effect.component';
import { EffectsListComponent } from './effects/effects-list/effects-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'effects', pathMatch: 'full'},
  {path: 'effects', component: EffectsListComponent},
  {path: 'add', component: CreateEffectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
