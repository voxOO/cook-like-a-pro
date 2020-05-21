import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbaSveComponent } from './proba-sve.component';

describe('ProbaSveComponent', () => {
  let component: ProbaSveComponent;
  let fixture: ComponentFixture<ProbaSveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbaSveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbaSveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
