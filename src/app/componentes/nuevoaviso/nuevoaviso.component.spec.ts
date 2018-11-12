import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoavisoComponent } from './nuevoaviso.component';

describe('NuevoavisoComponent', () => {
  let component: NuevoavisoComponent;
  let fixture: ComponentFixture<NuevoavisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoavisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoavisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
