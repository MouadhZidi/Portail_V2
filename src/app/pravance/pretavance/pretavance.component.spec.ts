import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretavanceComponent } from './pretavance.component';

describe('PretavanceComponent', () => {
  let component: PretavanceComponent;
  let fixture: ComponentFixture<PretavanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretavanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
