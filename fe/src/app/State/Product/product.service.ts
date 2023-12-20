import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/Api';
import {
  findProductByCategoryFailure,
  findProductByCategorySuccess,
  findProductByIdFailure,
  findProductByIdSuccess,
} from './product.action';
import { catchError, map, of } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_API_URL = BASE_API_URL;

  constructor(
    private router: Router,
    private store: Store,
    private http: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  findProductsByCategory(requestData: any) {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = requestData;

    let params = new HttpParams()
      .set('color', colors)
      .set('size', sizes)
      .set('minPrice', minPrice)
      .set('maxPrice', maxPrice)
      .set('minDiscount', minDiscount)
      .set('category', category)
      .set('stock', stock)
      .set('sort', sort)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    return this.http
      .get(`${this.BASE_API_URL}/api/products`, {
        headers: this.apiService.getHeader(),
        params,
      })
      .pipe(
        map((data: any) => {
          console.log('products', data);
          return findProductByCategorySuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            findProductByCategoryFailure(this.apiService.handleError(error))
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  findProductsById(productId: any) {
    return this.http
      .get(`${this.BASE_API_URL}/api/products/id/${productId}`, {
        headers: this.apiService.getHeader(),
      })
      .pipe(
        map((data: any) => {
          console.log('productId', data);
          return findProductByIdSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(findProductByIdFailure(this.apiService.handleError(error)));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
}
