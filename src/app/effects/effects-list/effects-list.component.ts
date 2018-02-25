import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { EffectService } from '../effect.service';
import { Effect } from '../effect';

import * as ARR from 'lodash';

@Component({
  selector: 'effects-list',
  templateUrl: './effects-list.component.html',
  styleUrls: ['./effects-list.component.css']
})
export class EffectsListComponent implements OnInit {

  effects: any;
  numberItems = 10;
  nextKey: any;
  prevKeys: any[] = [];
  subscription: any;

  constructor(private effectService: EffectService) {}

  ngOnInit() {
    //this.effects = this.effectService.getEffects();
    this.getEffectsList();
  }

  getEffectsList(key?) {
    if (this.subscription) this.subscription.unsubscribe()

    this.subscription = this.effectService.getEffects(this.numberItems, key).subscribe(effects => {
      this.effects = ARR.slice(effects, 0, this.numberItems)
      this.nextKey = ARR.get(effects[this.numberItems], '$key')
    })
  }

  onNext() {
    this.prevKeys.push(ARR.first(this.effects)['$key'])
    this.getEffectsList(this.nextKey)
  }

  onPrev() {
    const prevKey = ARR.last(this.prevKeys) // get last key
    this.prevKeys = ARR.dropRight(this.prevKeys) // delete last key

    this.getEffectsList(prevKey)
  }

  deleteEffects() {
    this.effectService.deleteAll()
  }
}
