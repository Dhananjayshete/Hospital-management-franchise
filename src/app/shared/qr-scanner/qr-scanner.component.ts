import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [CommonModule, ZXingScannerModule],
  templateUrl: './qr-scanner.component.html',
})
export class QrScannerComponent {

  @Output() scanned = new EventEmitter<string>();
  @Output() closed = new EventEmitter<void>();

  onScanSuccess(result: string) {
    this.scanned.emit(result);
  }

  close() {
    this.closed.emit();
  }
}
