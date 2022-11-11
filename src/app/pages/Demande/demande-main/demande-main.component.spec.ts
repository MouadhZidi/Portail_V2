import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMainComponent } from './demande-main.component';

describe('DemandeMainComponent', () => {
  let component: DemandeMainComponent;
  let fixture: ComponentFixture<DemandeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
