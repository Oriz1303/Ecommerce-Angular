import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/Api';
import { catchError, map, of } from 'rxjs';
import { ApiService } from '../api.service';
import * as OrderActions from './order.action';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  BASE_API_URL = BASE_API_URL;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  createOrder(requestData: any) {
    console.log('create order', requestData);

    const url = `${this.BASE_API_URL}/api/orders/`;

    return this.http
      .post(url, requestData, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          if (data.id) {
            this.router.navigate([`/checkout/payment/${data.id}`], {
              queryParams: { step: 3, order_id: data.id },
            });
          }
          console.log('create order return', data);

          return OrderActions.createOrderSuccess({ order: data });
        }),
        catchError((error: any) => {
          return of(
            OrderActions.createOrderFailure(this.apiService.handleError(error))
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getOrderById(orderId: string) {
    const url = `${this.BASE_API_URL}/api/orders/${orderId}`;

    return this.http
      .get(url, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          console.log('get order by id', data);

          return OrderActions.getOrderByIdSuccess({ order: data });
        }),
        catchError((error: any) => {
          return of(
            OrderActions.getOrderByIdFailure(this.apiService.handleError(error))
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getOrderHistory() {
    const url = `${this.BASE_API_URL}/api/orders/user`;

    this.store.dispatch(OrderActions.getOrderHistoryRequest());

    return this.http
      .get<any>(url, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          console.log('get order history', data);
          return OrderActions.getOrderHistorySuccess({ orders: data });
        }),
        catchError((error: any) => {
          return of(
            OrderActions.getOrderHistoryFailure(
              this.apiService.handleError(error)
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getAllOrders() {}

  confirmedOrder() {}

  shipOrder() {}

  deliverOrder() {}

  deleteOrder(orderId: number) {
    const url = `${this.BASE_API_URL}/api/admin/orders/${orderId}/delete`;
    return this.http
      .delete(url, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          console.log('delete order', data);
          return OrderActions.deleteOrderSuccess({ payload: orderId });
        }),
        catchError((error: any) => {
          return of(
            OrderActions.deleteOrderFailure(this.apiService.handleError(error))
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
}
