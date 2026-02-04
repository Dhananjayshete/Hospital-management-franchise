import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDisplay } from './qr-display.component';

describe('QrDisplay', () => {
  let component: QrDisplay;
  let fixture: ComponentFixture<QrDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
