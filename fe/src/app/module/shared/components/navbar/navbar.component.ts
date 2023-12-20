import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/module/auth/auth.component';
import { UserService } from 'src/app/State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentSection: any;
  isNavbarContentOpen: any;
  userProfile: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();

    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      this.userProfile = user.userProfile;

      if (user.userProfile) {
        this.dialog.closeAll();
      }

      console.log(user)
    });
  }

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

  handleOpenLoginModel = () => {
    this.dialog.open(AuthComponent, {
      width: '500px',
      disableClose: false,
    });
  };


  handleLogout = () => {
    this.userService.logout();
  }
}
