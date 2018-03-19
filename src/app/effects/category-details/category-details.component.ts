import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject'

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

  startWith = new Subject()
  endWith = new Subject()
  effects: any[]

  constructor(
    private effectService: EffectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCategory();
    this.effectService.findByCategory(this.startWith, this.endWith)
                        .subscribe(effects => this.effects = effects)
  }

  getCategory(): void {
    const key = this.route.snapshot.paramMap.get('$key');
    this.effectService.getCategory(key)
      .subscribe(category => this.category = category);
  }

  search(queryText): void {
    if (queryText == '') {
      this.startWith.next(' ')
      this.endWith.next(' ')
    }
    else {
      this.startWith.next(queryText)
      this.endWith.next(queryText + '\uf8ff')
    }
  }

  goBack(): void {
    this.location.back();
  }

  // updateActive(isActive: boolean) {
  //   this.effectService.updateEffect(this.effect.$key, {active: isActive})
  // }

  // Deletion
  // deleteEffect() {
  //   this.effectService.deleteEffect(this.effect.$key)
  // }

}
