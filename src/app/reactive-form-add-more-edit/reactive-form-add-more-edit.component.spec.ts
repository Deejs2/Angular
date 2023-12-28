import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAddMoreEditComponent } from './reactive-form-add-more-edit.component';

describe('ReactiveFormAddMoreEditComponent', () => {
  let component: ReactiveFormAddMoreEditComponent;
  let fixture: ComponentFixture<ReactiveFormAddMoreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAddMoreEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormAddMoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
