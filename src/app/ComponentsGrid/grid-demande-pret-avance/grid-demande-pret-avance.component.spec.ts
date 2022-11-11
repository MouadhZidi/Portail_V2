import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemandePretAvanceComponent } from './grid-demande-pret-avance.component';

describe('GridDemandePretAvanceComponent', () => {
  let component: GridDemandePretAvanceComponent;
  let fixture: ComponentFixture<GridDemandePretAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDemandePretAvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDemandePretAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
