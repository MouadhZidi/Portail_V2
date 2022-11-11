import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemandeSituationComponent } from './grid-demande-situation.component';

describe('GridDemandeSituationComponent', () => {
  let component: GridDemandeSituationComponent;
  let fixture: ComponentFixture<GridDemandeSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDemandeSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDemandeSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
