import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject'

import { EffectService } from '../effect.service';
import { Effect } from '../effect';
import { Category } from '../category';

import * as firebase from 'firebase';

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
      .subscribe(category => {
        this.category = category
        this.search(key)
      });
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

  download(category, name): void {
    var user = firebase.auth().currentUser;
    if (!user) {
      alert("Please login to download")
      return;
    }
    const storageRef = firebase.storage().ref()
    // console.log(storageRef.child())
    var itemRef = storageRef.child(category + '/' + name)
    itemRef.getDownloadURL().then(function(url) {
      // Download
      var el = document.createElement('a');
      el.download = url;
      el.href = url;
      document.body.appendChild(el);
      el.click();
      el.remove();
    })
  };

  // updateActive(isActive: boolean) {
  //   this.effectService.updateEffect(this.effect.$key, {active: isActive})
  // }

  // Deletion
  // deleteEffect() {
  //   this.effectService.deleteEffect(this.effect.$key)
  // }

}
