import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../header/header.component';
import { LoginComponent } from '../../auth/login/login.component';
import { HeroComponent } from '../../features/home/hero/hero.component';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,   // ✅ REQUIRED for <router-outlet>
    HeaderComponent,
    LoginComponent,
    // HeroComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  showLogin = false;

  openLogin() {
    this.showLogin = true;
  }

  closeLogin() {
    this.showLogin = false;
  }
}
