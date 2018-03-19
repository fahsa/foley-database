import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Effect } from './effect';
import { Category } from './category';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as Lodash from 'lodash';

@Injectable()
export class EffectService {

  private dbEffectPath: string = '/effects';
  private dbCategoryPath: string = '/categories';

  effect: FirebaseObjectObservable<Effect> = null;
  effects: FirebaseListObservable<Effect[]> = null;
  category: FirebaseObjectObservable<Category> = null;
  categories: FirebaseListObservable<Category[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getEffect(key: string): FirebaseObjectObservable<Effect> {
    this.effect = this.db.object(`${this.dbEffectPath}/${key}`);
    return this.effect;
  }

  createEffect(effect: Effect): void {
    this.effects.push(effect).catch(error => this.handleError(error));
  }

  updateEffect(key: string, value: any): void {
    this.effects.update(key, value).catch(error => this.handleError(error));
  }

  deleteEffect(key: string): void {
    this.effects.remove(key).catch(error => this.handleError(error));
  }

  // Pagination
  // getEffects(numberItems, startKey?): FirebaseListObservable<Effect[]> {
  //   this.effects = this.db.list(this.dbEffectPath, {
  //     query: {
  //       orderByKey: true,
  //       startAt: startKey,
  //       limitToFirst: numberItems + 1
  //     }
  //   });
  //   return this.effects;
  // }

  getEffects(query = {}): FirebaseListObservable<Effect[]> {
    this.effects = this.db.list(this.dbEffectPath, {
      query: query
    });
    return this.effects;
  }

  getCategory(key: string): FirebaseObjectObservable<Category> {
    this.category = this.db.object(`${this.dbCategoryPath}/${key}`);
    return this.category;
  }

  getCategories(query = {}): FirebaseListObservable<Category[]> {
    this.categories = this.db.list(this.dbCategoryPath, {
      query: query
    });
    return this.categories;
  }

  // findEffects(start, end): FirebaseListObservable<Effect[]> {
  //   return this.db.list(this.dbEffectPath, {
  //     query: {
  //       orderByChild: 'tag',
  //       startAt: start,
  //       endAt: end
  //     }
  //   });
  // }

  findByTag(start, end): Observable<any> {
    return this.db.list(this.dbEffectPath, {
      query: {
        orderByChild: 'tag',
        startAt: start,
        endAt: end
      }
    }).map(_effects => Lodash.uniqBy(_effects, function(a) {
      return a.name
    }));
  }

  findByCategory(start, end): Observable<any> {
    return this.db.list(this.dbEffectPath, {
      query: {
        orderByChild: 'category',
        startAt: start,
        endAt: end
      }
    })
  }

  // Deletion
  // deleteAll(): void {
  //   this.effects.remove().catch(error => this.handleError(error));
  // }

  private handleError(error) {
    console.log(error);
  }
}
