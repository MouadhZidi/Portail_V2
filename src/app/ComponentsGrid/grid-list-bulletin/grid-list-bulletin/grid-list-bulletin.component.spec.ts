import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListBulletinComponent } from './grid-list-bulletin.component';

describe('GridListBulletinComponent', () => {
  let component: GridListBulletinComponent;
  let fixture: ComponentFixture<GridListBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListBulletinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
