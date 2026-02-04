import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-find-doctor-layout',
  standalone: true,
  imports: [CommonModule, PanelMenuModule],
  templateUrl: './find-doctor-layout.component.html',
  styleUrls: ['./find-doctor-layout.component.scss']
})
export class FindDoctorLayoutComponent {

  departments = [
    {
      label: 'Primary Care',
      items: [
        { label: 'General Practitioner' },
        { label: 'Family Medicine' },
        { label: 'Internal Medicine' },
        { label: 'Pediatrics' }
      ]
    },
    {
      label: 'Medical Specialties',
      items: [
        { label: 'Cardiology' },
        { label: 'Neurology' },
        { label: 'Dermatology' },
        { label: 'Endocrinology' },
        { label: 'Gastroenterology' },
        { label: 'Pulmonology' },
        { label: 'Nephrology' },
        { label: 'Oncology' },
        { label: 'Psychiatry' },
        { label: 'Infectious Diseases' }
      ]
    },
    {
      label: 'Surgical Specialties',
      items: [
        { label: 'General Surgery' },
        { label: 'Orthopedic Surgery' },
        { label: 'Neurosurgery' },
        { label: 'Cardiothoracic Surgery' },
        { label: 'Plastic Surgery' },
        { label: 'ENT Surgery' },
        { label: 'Urology' },
        { label: 'Ophthalmology' }
      ]
    },
    {
      label: 'Diagnostic & Support',
      items: [
        { label: 'Radiology' },
        { label: 'Pathology' },
        { label: 'Anesthesiology' },
        { label: 'Nuclear Medicine' }
      ]
    }
  ];

}
