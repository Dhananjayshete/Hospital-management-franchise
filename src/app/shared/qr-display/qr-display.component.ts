import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-display',
  standalone: true,
  imports: [CommonModule, QRCodeComponent],
  templateUrl: './qr-display.component.html',
  styleUrls: ['./qr-display.component.scss']
})
export class QrDisplayComponent {
  @Output() closed = new EventEmitter<void>();

  // hospitalUrl = 'https://your-hospital.com/info';
  hospitalUrl = 'http://172.20.10.3/hospital-info';

}
