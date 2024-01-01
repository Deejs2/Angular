import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { HttpHandlerService } from '../services/http-handler.service';

@Component({
  selector: 'app-reactive-form-add-more-edit',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, CommonModule],
  providers: [DatePipe, SharedService, HttpHandlerService],
  templateUrl: './reactive-form-add-more-edit.component.html',
  styleUrl: './reactive-form-add-more-edit.component.scss'
})
export class ReactiveFormAddMoreEditComponent{
  page = "Update Reactive Form";

  formSubmitStatus : boolean = false;

  maxDate : any 

  personalDetailFormGroup: FormGroup = new FormGroup<any>({});

  constructor(private fb: FormBuilder,private date : DatePipe, private sharedService: SharedService, private httpService: HttpHandlerService) {
    }

  ngOnInit(): void {

    this.personalDetailFormGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.max(10000000000)]],
      familyDetailArray: this.fb.array([])
    });

    this.addFamilyDetail();

     

    this.maxDate = this.date.transform(new Date(),'yyyy-MM-dd');
  
    
  }

  // getter for familyDetailArray
  get familyDetailArray() {
    return (this.personalDetailFormGroup.get('familyDetailArray') as FormArray);
  }

  addFamilyDetail() {
    this.familyDetailArray.push(this.fb.group({
      familyFirstname:['', [Validators.required]],
      familyLastname:['', [Validators.required]],
      familyDateOfBirth:['', [Validators.required]],
      familyAge:['', [Validators.required]],
      familyEmail:['', [Validators.required, Validators.email]],
      familyPhone:['', [Validators.required, Validators.max(10000000000)]]
    }));
    // console.log(this.personalDetailFormGroup.value);
  }

  removeFormArrayItem(index: number): void {
    if(index>0){
      this.familyDetailArray.removeAt(index);
    }
  }

  onSubmitForm() {

    this.formSubmitStatus = true;

      // Enable the 'age' control temporarily
      this.personalDetailFormGroup.get('age')?.enable();

    console.log(this.personalDetailFormGroup.value);

  }

  calculateAge(dob:any){
    let age = this.sharedService.ageCalculation(dob);
    this.personalDetailFormGroup.get("age")?.setValue(age);
  }



  calculateFamilyAge(index : number): void {
    const dateOfBirthControl = this.familyDetailArray.at(index).get('familyDateOfBirth')?.value;
    let age = this.sharedService.ageCalculation(dateOfBirthControl);
    this.familyDetailArray.at(index).get('familyAge')?.setValue(age);
  }
}



