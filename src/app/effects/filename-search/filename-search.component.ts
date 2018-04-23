import { Component, OnInit } from '@angular/core';
import { EffectService } from '../effect.service';
import { Subject } from 'rxjs/Subject'

import * as firebase from 'firebase';

@Component({
  selector: 'filename-search',
  templateUrl: './filename-search.component.html',
  styleUrls: ['./filename-search.component.css']
})

export class FilenameSearchComponent implements OnInit {

  startWith = new Subject()
  endWith = new Subject()
  effects: any[]

  constructor(private effectService: EffectService) {}

  ngOnInit() {
    this.effectService.findByName(this.startWith, this.endWith)
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

}
