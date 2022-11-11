import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCongeComponent } from './grid-conge.component';

describe('GridCongeComponent', () => {
  let component: GridCongeComponent;
  let fixture: ComponentFixture<GridCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
