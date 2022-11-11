import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemandeFormationComponent } from './grid-demande-formation.component';

describe('GridDemandeFormationComponent', () => {
  let component: GridDemandeFormationComponent;
  let fixture: ComponentFixture<GridDemandeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDemandeFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDemandeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
