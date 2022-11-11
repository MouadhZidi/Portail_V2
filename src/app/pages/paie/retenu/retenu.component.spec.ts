import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenuComponent } from './retenu.component';

describe('RetenuComponent', () => {
  let component: RetenuComponent;
  let fixture: ComponentFixture<RetenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
