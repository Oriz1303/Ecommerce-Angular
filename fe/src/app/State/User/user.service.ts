import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/Api';
import { map, catchError, of } from 'rxjs';
import {
  getUserProfileFailure,
  getUserProfileSuccess,
  logoutSuccess,
} from './user.action';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrlAPI = BASE_API_URL + '/api';

  constructor(
    private http: HttpClient,
    private store: Store,
    private apiService: ApiService
  ) {}

  getUserProfile() {
    const headers = this.apiService.getHeader();

    return this.http
      .get(`${this.baseUrlAPI}/users/profile`, {
        headers,
      })
      .pipe(
        map((user: any) => {
          console.log('User Profile', user);

          return getUserProfileSuccess({ userProfile: user });
        }),
        catchError((error) => {
          const errorMsg = this.apiService.handleError(error);
          return of(getUserProfileFailure(errorMsg));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  logout() {
    localStorage.removeItem('jwt');
    this.store.dispatch(logoutSuccess());
  }
}
