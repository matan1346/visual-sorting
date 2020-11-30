import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualSortingComponent } from './visual-sorting.component';

describe('VisualSortingComponent', () => {
  let component: VisualSortingComponent;
  let fixture: ComponentFixture<VisualSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
