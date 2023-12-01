import { Component } from '@angular/core';
import { menJackets } from 'src/data/home/men_jackets';
import { menPants } from 'src/data/home/men_pants';
import { menPolo } from 'src/data/home/men_polo';
import { menShirts } from 'src/data/home/men_shirts';
import { setSuit } from 'src/data/home/men_suit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menShirts: any;
  menJackets: any;
  menPolo: any;
  menPants: any;
  setSuit: any;

  ngOnInit() {
    this.menShirts = menShirts.slice(0, 6);
    this.menJackets = menJackets;
    this.menPolo = menPolo;
    this.menPants = menPants;
    this.setSuit = setSuit;
  }
}
