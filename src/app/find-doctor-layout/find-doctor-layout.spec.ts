import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoctorLayout } from './find-doctor-layout.component';

describe('FindDoctorLayout', () => {
  let component: FindDoctorLayout;
  let fixture: ComponentFixture<FindDoctorLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDoctorLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDoctorLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
