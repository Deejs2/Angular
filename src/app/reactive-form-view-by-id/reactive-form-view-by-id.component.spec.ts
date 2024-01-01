import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormViewByIdComponent } from './reactive-form-view-by-id.component';

describe('ReactiveFormViewByIdComponent', () => {
  let component: ReactiveFormViewByIdComponent;
  let fixture: ComponentFixture<ReactiveFormViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormViewByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
