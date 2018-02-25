import {Component, OnInit} from '@angular/core';
import {EffectService} from '../effect.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-search-effects',
  templateUrl: './search-effects.component.html',
  styleUrls: ['./search-effects.component.css']
})

export class SearchEffectsComponent implements OnInit {

  startWith = new Subject()
  endWith = new Subject()
  effects: any[]

  constructor(private effectService: EffectService) {}

  ngOnInit() {
    this.effectService.findEffects(this.startWith, this.endWith)
                        .subscribe(effects => this.effects = effects)
  }

  search($event) {
      const queryText = $event.target.value
      this.startWith.next(queryText)
      this.endWith.next(queryText + '\uf8ff')
  }

}
