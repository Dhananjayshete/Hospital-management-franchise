import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HospitalInfoComponent } from './pages/hospital-info/hospital-info.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DepartmentComponent } from './features/department/department.component';

export const routes: Routes = [

  // 🟢 FIND DOCTOR (NO HEADER) — MUST BE FIRST
  {
    path: 'find-doctor',
    loadComponent: () =>
      import('./find-doctor-layout/find-doctor-layout.component')
        .then(m => m.FindDoctorLayoutComponent)
  },

  // 🔵 MAIN SITE (WITH HEADER)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'hospital-info', component: HospitalInfoComponent },
      { path: 'department', component: DepartmentComponent }
    ]
  },

  // SAFETY
  { path: '**', redirectTo: '' }
];
