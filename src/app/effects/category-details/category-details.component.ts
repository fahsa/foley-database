import { Component, OnInit, Input } from '@angular/core';

import { EffectService } from '../effect.service';
import { Effect } from '../effect';
import { Category } from '../category';

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input() category: Category;

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
