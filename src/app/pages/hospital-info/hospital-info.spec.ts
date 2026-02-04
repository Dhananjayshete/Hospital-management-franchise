import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalInfo } from './hospital-info.component';

describe('HospitalInfo', () => {
  let component: HospitalInfo;
  let fixture: ComponentFixture<HospitalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
