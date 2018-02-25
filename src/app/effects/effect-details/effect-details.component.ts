import { Component, OnInit, Input } from '@angular/core';

import { EffectService } from '../effect.service';
import { Effect } from '../effect';

@Component({
  selector: 'effect-details',
  templateUrl: './effect-details.component.html',
  styleUrls: ['./effect-details.component.css']
})
export class EffectDetailsComponent implements OnInit {

  @Input() effect: Effect;

  constructor(private effectService: EffectService) {}

  ngOnInit() {
  }

  // updateActive(isActive: boolean) {
  //   this.effectService.updateEffect(this.effect.$key, {active: isActive})
  // }

  // Deletion
  // deleteEffect() {
  //   this.effectService.deleteEffect(this.effect.$key)
  // }

}
