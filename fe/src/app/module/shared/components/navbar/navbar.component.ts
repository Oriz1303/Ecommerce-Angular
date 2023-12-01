import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentSection: any;

  isNavbarContentOpen: any;

  constructor(private router: Router) {}

  openNavbarContent(menu: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = menu;
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  @HostListener('document: click', [`$event`])
  onDocumentClick(path: any) {
    const modalContainer = document.querySelector('.modal-container');
    const openBtns = document.querySelectorAll('.open-btn');

    let clickInsideBtn = false;

    openBtns.forEach((btn: Element) => {
      if (btn.contains(event?.target as Node)) clickInsideBtn = true;
    });

    if (modalContainer && !clickInsideBtn && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }
}
