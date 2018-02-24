import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Effect } from '../effect';
import { EffectService } from '../effect.service';

@Component({
  selector: 'create-effect',
  templateUrl: './create-effect.component.html',
  styleUrls: ['./create-effect.component.css']
})
export class CreateEffectComponent implements OnInit {

  effect: Effect = new Effect();
  submitted = false;

  constructor(private effectService: EffectService) {}

  ngOnInit() {
  }

  newEffect(): void {
    this.submitted = false;
    this.effect = new Effect();
  }

  save() {
    this.effectService.createEffect(this.effect);
    this.effect = new Effect();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
