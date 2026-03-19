import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentButton } from './document-button';

describe('DocumentButton', () => {
  let component: DocumentButton;
  let fixture: ComponentFixture<DocumentButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
