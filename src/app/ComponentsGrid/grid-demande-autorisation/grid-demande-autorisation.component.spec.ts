import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemandeAutorisationComponent } from './grid-demande-autorisation.component';

describe('GridDemandeAutorisationComponent', () => {
  let component: GridDemandeAutorisationComponent;
  let fixture: ComponentFixture<GridDemandeAutorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDemandeAutorisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDemandeAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
