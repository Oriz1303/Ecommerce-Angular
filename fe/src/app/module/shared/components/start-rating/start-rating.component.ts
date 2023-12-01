import { Component } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss'],
})
export class StartRatingComponent {
  stars: any;
  maxRating=5;
  initialRating=3;
  currentRating=0;

  constructor() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
    this.currentRating = this.initialRating
  }

  rate(rating : number) {
    this.currentRating = rating
  }
}
