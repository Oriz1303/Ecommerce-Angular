import { Component } from '@angular/core';
import { filters, singleFilter } from './filterListData';
import { menPolo } from 'src/data/home/men_polo';

// get infor about the currently activated route (current url)
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { ProductService } from 'src/app/State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { max } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;
  mensPolo: any;
  products: any;
  levelThree: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.mensPolo = menPolo;

    this.activatedRoute.paramMap.subscribe((params) => {
      console.log('params', params);
      this.levelThree = params.get('levelThree');
      let requestData = {
        category: params.get('levelThree'),
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 10000,
        minDiscount: 0,
        pageNumber: 0,
        pageSize: 9,
        stock: null,
      };

      this.productService.findProductsByCategory(requestData);
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      const color = params['color'];
      const size = params['size'];
      const price = params['price'];
      const discount = params['discount'];
      const stock = params['stock'];
      const sort = params['sort'];
      const pageNumber = params['pageNumber'];
      const pageSize = params['pageSize'];
      const minPrice = price?.split('-')[0];
      const maxPrice = price?.split('-')[1];

      let requestData = {
        category: this.levelThree,
        colors: color ? color : [],
        sizes: size ? size : [],
        minPrice: minPrice ? minPrice : 0,
        maxPrice: maxPrice ? maxPrice : 10000,
        minDiscount: discount ? discount : 0,
        pageNumber: pageNumber ? pageNumber : 0,
        pageSize: pageSize ? pageSize : 9,
        sort: sort ? sort : 'price_low',
        stock: null,
      };

      this.productService.findProductsByCategory(requestData);
    });

    // this.store.pipe(select((store: AppState) => store.product)).subscribe((product) => {
    //   this.products = product.products.content
    // })

    this.store.pipe(select((store) => store.product)).subscribe((product) => {
      this.products = product.products;
      console.log('89', product.products.totalElements);
    });
  }

  handleMultipleSelectFilters(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], { queryParams });
  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams });
  }

  handlePaginator(pageEvent: PageEvent) {
    console.log('pageEvent', pageEvent);

    console.log(pageEvent.pageIndex);

    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams['pageNumber'] = pageEvent.pageIndex;
    queryParams['pageSize'] = pageEvent.pageSize;

    this.router.navigate([], {queryParams})
  }
}
