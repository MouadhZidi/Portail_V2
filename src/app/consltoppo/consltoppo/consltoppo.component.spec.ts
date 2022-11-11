import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsltoppoComponent } from './consltoppo.component';

describe('ConsltoppoComponent', () => {
  let component: ConsltoppoComponent;
  let fixture: ComponentFixture<ConsltoppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsltoppoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsltoppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
