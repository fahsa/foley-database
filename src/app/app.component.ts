import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})

export class AppComponent {
  title = 'Sound Effects Database';
  //description = 'Angular4-Firebase Demo';

  email: string;
  password: string;

  itemValue = '';
  items: FirebaseListObservable<any[]>;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

  // constructor(db: AngularFireDatabase) {
  //   this.items = db.list('/items');
  // }
  //
  // onSubmit() {
  //   this.items.push({content: this.itemValue});
  //   this.itemValue = '';
  // }
}
