import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeHeaderComponent } from './conge-header.component';

describe('CongeHeaderComponent', () => {
  let component: CongeHeaderComponent;
  let fixture: ComponentFixture<CongeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
