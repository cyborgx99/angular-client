import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { isLoggedIn } from './auth/auth.selectors';
import { StoreState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = new Observable();

  constructor(private store: Store<StoreState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  }
}
