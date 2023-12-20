import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/Api';
import { map, catchError, of } from 'rxjs';
import {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
} from './auth.action';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrlAPI = BASE_API_URL + '/auth';

  constructor(
    private http: HttpClient,
    private store: Store,
    private apiService: ApiService
  ) {}

  login(loginData: any) {
    return this.http
      .post(`${this.baseUrlAPI}/signin`, loginData)
      .pipe(
        map((user: any) => {
          console.log('login user', user);
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
          }

          return loginSuccess({ user });
        }),
        catchError((error) => {
          const errorMsg = this.apiService.handleError(error);
          return of(loginFailure(errorMsg));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  register(user: any) {
    return this.http
      .post(`${this.baseUrlAPI}/signup`, user)
      .pipe(
        map((user: any) => {
          console.log('register user', user);
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
          }

          return registerSuccess({ user });
        }),
        catchError((error) => {
          const errorMsg = this.apiService.handleError(error);
          return of(registerFailure(errorMsg));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
}
