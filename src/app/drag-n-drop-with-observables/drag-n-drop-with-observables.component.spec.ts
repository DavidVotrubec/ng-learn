import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropWithObservablesComponent } from './drag-n-drop-with-observables.component';

describe('DragNDropWithObservablesComponent', () => {
  let component: DragNDropWithObservablesComponent;
  let fixture: ComponentFixture<DragNDropWithObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragNDropWithObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropWithObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
