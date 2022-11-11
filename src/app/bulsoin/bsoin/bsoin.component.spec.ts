import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsoinComponent } from './bsoin.component';

describe('BsoinComponent', () => {
  let component: BsoinComponent;
  let fixture: ComponentFixture<BsoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
