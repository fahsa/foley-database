import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Effect } from './effect';

@Injectable()
export class EffectService {

  private dbPath: string = '/effects';

  effect: FirebaseObjectObservable<Effect> = null;
  effects: FirebaseListObservable<Effect[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getEffect(key: string): FirebaseObjectObservable<Effect> {
    this.effect = this.db.object(`${this.dbPath}/${key}`);
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

  getEffectsList(query = {}): FirebaseListObservable<Effect[]> {
    this.effects = this.db.list(this.dbPath, {
      query: query
    });
    return this.effects;
  }

  deleteAll(): void {
    this.effects.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
