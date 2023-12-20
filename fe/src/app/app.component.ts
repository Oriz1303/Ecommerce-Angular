import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { CartService } from './State/Cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'fe';

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();

    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
    });
  }
}
