import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { EffectService } from '../effect.service';
import { Effect } from '../effect';

@Component({
  selector: 'effects-list',
  templateUrl: './effects-list.component.html',
  styleUrls: ['./effects-list.component.css']
})
export class EffectsListComponent implements OnInit {

  effects: FirebaseListObservable<Effect[]>;

  constructor(private effectService: EffectService) {}

  ngOnInit() {
    this.effects = this.effectService.getEffectsList();
  }

  deleteEffects() {
    this.effectService.deleteAll()
  }
}
