// import { Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Output } from '@angular/core';
// import { QrDisplayComponent } from '../shared/qr-display/qr-display.component';

import { Component, HostListener, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrDisplayComponent } from '../shared/qr-display/qr-display.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, QrDisplayComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // 🔴 MUST MATCH FILE
})
export class HeaderComponent {

  @Output() getStarted = new EventEmitter<void>();

onGetStartedClick() {
  this.getStarted.emit();
}
 // Services dropdown
servicesOpen = false;

// About dropdown
aboutOpen = false;

// Department dropdown
departmentOpen = false;


toggleServices(event: MouseEvent): void {
  event.stopPropagation();
  this.servicesOpen = !this.servicesOpen;
  this.aboutOpen = false; // close other dropdown
}

toggleAbout(event: MouseEvent): void {
  event.stopPropagation();
  this.aboutOpen = !this.aboutOpen;
  this.servicesOpen = false; // close other dropdown
}

toggleDepartment(event: MouseEvent): void {
  event.stopPropagation();
  this.departmentOpen = !this.departmentOpen;
  this.servicesOpen = false;
  this.aboutOpen = false;
}


// ✅ ONE document click listener ONLY
@HostListener('document:click')
closeDropdowns(): void {
  this.servicesOpen = false;
  this.aboutOpen = false;
  this.departmentOpen = false;
}

  // QR logic
  showQr = false;

  openScanner(): void {
    this.showQr = true;
  }

  closeQr(): void {
    this.showQr = false;
  }
}
