import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailFormComponent } from './personal-detail-form.component';

describe('PersonalDetailFormComponent', () => {
  let component: PersonalDetailFormComponent;
  let fixture: ComponentFixture<PersonalDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
