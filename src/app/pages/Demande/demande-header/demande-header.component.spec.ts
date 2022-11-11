import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeHeaderComponent } from './demande-header.component';

describe('DemandeHeaderComponent', () => {
  let component: DemandeHeaderComponent;
  let fixture: ComponentFixture<DemandeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
