import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAddMoreComponent } from './reactive-form-add-more.component';

describe('ReactiveFormAddMoreComponent', () => {
  let component: ReactiveFormAddMoreComponent;
  let fixture: ComponentFixture<ReactiveFormAddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAddMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormAddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
