import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridetablissementComponent } from './gridetablissement.component';

describe('GridetablissementComponent', () => {
  let component: GridetablissementComponent;
  let fixture: ComponentFixture<GridetablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridetablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
