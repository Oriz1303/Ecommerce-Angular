import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menPolo } from 'src/data/home/men_polo';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  selectedSize: any;
  reviews = [1, 1, 1, 1, 1];

  relatedProducts: any;

  constructor(private router: Router){

  }

  ngOnInit() {
    this.relatedProducts = menPolo;
  }

  handleAddToCart() {
    console.log('Size: ', this.selectedSize);
    this.router.navigate(['cart'])
  }
}
