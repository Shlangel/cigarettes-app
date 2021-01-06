import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { createPack, CurrentSmokingState, selectCurrentPack } from '../state-management';

@Component({
  selector: "app-current-pack",
  templateUrl: "./current-pack.component.html",
  styleUrls: ["./current-pack.component.scss"],
})
export class CurrentPackComponent implements OnInit {
  currentPack$ = this.store.select(selectCurrentPack).pipe(
    tap((data) => {
      console.log("Hey I got here: ", data);
    }),
    map((data) => data.currentSmoking)
  );
  constructor(private store: Store<CurrentSmokingState>) {}

  ngOnInit() {}

  initPack(): void {
    this.store.dispatch(createPack({ name: "Marlboro", count: 20 }));
  }
}
