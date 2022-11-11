import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemandeDocumentComponent } from './grid-demande-document.component';

describe('GridDemandeDocumentComponent', () => {
  let component: GridDemandeDocumentComponent;
  let fixture: ComponentFixture<GridDemandeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDemandeDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDemandeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
