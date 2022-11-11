import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeMainComponent } from './conge-main.component';

describe('CongeMainComponent', () => {
  let component: CongeMainComponent;
  let fixture: ComponentFixture<CongeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
