import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
@Injectable()
export class RestService {

  constructor(public db: AngularFireDatabase) { }

  getShedule(): FirebaseListObservable<any[]> {
    return this.db.list('/schedule');
  }
  saveShedule(object) {
    const items = this.db.list('/schedule');
     return items.push(object)
  }
}
