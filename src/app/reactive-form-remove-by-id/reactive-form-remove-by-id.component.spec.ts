import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormRemoveByIdComponent } from './reactive-form-remove-by-id.component';

describe('ReactiveFormRemoveByIdComponent', () => {
  let component: ReactiveFormRemoveByIdComponent;
  let fixture: ComponentFixture<ReactiveFormRemoveByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormRemoveByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormRemoveByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
