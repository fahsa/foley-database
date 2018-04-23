import { Component, OnInit } from '@angular/core';
import { EffectService } from '../effect.service';
import { Subject } from 'rxjs/Subject'

import * as firebase from 'firebase';

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
    this.effectService.findByTag(this.startWith, this.endWith)
                        .subscribe(effects => this.effects = effects)
  }

  search($event) {
      const queryText = $event.target.value
      if (queryText == '') {
        this.startWith.next(' ')
        this.endWith.next(' ')
      }
      else {
        this.startWith.next(queryText)
        this.endWith.next(queryText + '\uf8ff')
      }
  }

  download(category, name): void {
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

}
