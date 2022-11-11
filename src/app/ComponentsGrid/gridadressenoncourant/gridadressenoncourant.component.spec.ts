import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridadressenoncourantComponent } from './gridadressenoncourant.component';

describe('GridadressenoncourantComponent', () => {
  let component: GridadressenoncourantComponent;
  let fixture: ComponentFixture<GridadressenoncourantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridadressenoncourantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridadressenoncourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
