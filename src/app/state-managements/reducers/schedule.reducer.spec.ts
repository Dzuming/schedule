/**
 * Created by jlynch on 12/2/16.
 */
/* tslint:disable:no-unused-variable */
import { async, TestBed, inject } from '@angular/core/testing';
import { ScheduleReducer } from "./schedule.reducer";
import { StoreModule } from "@ngrx/store";
import { State } from "../states/schedule.state";
import { Store } from "@ngrx/store";
import { GOT_FIREBASE_ARRAY, PULL_ARRAY_FROM_FIREBASE } from "../actions/schedule.action";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { AngularFireDatabase } from "angularfire2/database";

let fixtureTodos = [
  { 'text': 'Get milk' },
  { 'text': 'Take out the trash' },
  { 'text': 'Get gas for the car' },
  { 'text': 'Pay parking ticket' },
  { 'text': 'Pick up dry cleaning' },
];
let angularFireDatabaseStub = { list: () => { } };
let mockTodos$ = Observable.of(fixtureTodos);

describe('Reducer', () => {

  beforeEach(() => {
    spyOn(angularFireDatabaseStub, 'list').and.returnValue(mockTodos$);
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: AngularFireDatabase, useValue: angularFireDatabaseStub },
      ],
      imports: [StoreModule.provideStore({ ScheduleReducer })]

    })
      .compileComponents();
  });

  it('should have return object from firebase action', inject([Store], (store: Store<State>) => {
    expect(store).toBeTruthy();

    store.dispatch({ type: PULL_ARRAY_FROM_FIREBASE });
    let data = store.select('MainReducer')
      .subscribe((data: State) => {

        expect(data.payloadArray).toEqual(10);
      });

    // let data = store.select(GOT_FIREBASE_ARRAY)
    //   .subscribe((data:State)=> {
    //     console.log(data)
    //     expect(data.payloadArray).toEqual(2);

    //   });

  }));
});