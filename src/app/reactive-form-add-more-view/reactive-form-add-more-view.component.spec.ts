import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAddMoreViewComponent } from './reactive-form-add-more-view.component';

describe('ReactiveFormAddMoreViewComponent', () => {
  let component: ReactiveFormAddMoreViewComponent;
  let fixture: ComponentFixture<ReactiveFormAddMoreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAddMoreViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormAddMoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
