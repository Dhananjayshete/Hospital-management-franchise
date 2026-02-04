import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanCareComponent } from './human-care.component';

describe('HumanCareComponent', () => {
  let component: HumanCareComponent;
  let fixture: ComponentFixture<HumanCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanCareComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(HumanCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
