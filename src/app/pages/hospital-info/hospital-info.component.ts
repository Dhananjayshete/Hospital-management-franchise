import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.scss']
})
export class HospitalInfoComponent {

  hospital = {
    name: 'City Care Hospital',
    address: 'MG Road, Bangalore',
    phone: '+91 98765 43210',
    email: 'info@citycare.com',
    services: [
      '24/7 Emergency',
      'ICU',
      'Cardiology',
      'Orthopedics',
      'Diagnostics'
    ]
  };
}
