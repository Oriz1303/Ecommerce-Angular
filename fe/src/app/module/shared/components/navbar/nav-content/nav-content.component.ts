import { Component, Input } from '@angular/core';
import { navigation } from './nav-content-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent {
  category: any;

  @Input() selectedSection: any;

  ngOnInit() {
    this.category = navigation;
  }

  constructor(private router: Router) {}

  handleNavigate(path: any) {
    this.router.navigate([path]);
  }
}
