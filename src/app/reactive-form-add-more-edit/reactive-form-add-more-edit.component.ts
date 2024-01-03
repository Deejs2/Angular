import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import { HttpHandlerService } from '../services/http-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-reactive-form-add-more-edit',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, CommonModule],
  providers: [DatePipe, SharedService, HttpHandlerService],
  templateUrl: './reactive-form-add-more-edit.component.html',
  styleUrl: './reactive-form-add-more-edit.component.scss'
})
export class ReactiveFormAddMoreEditComponent{
  id:number=0

  formSubmitStatus : boolean = false;

  maxDate : any 

  formData : any

  personalDetailFormGroup: FormGroup = new FormGroup<any>({});

  constructor(private fb: FormBuilder,private date : DatePipe, private sharedService: SharedService, private router: ActivatedRoute ,private httpService: HttpHandlerService) {
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

    this.router.queryParams.subscribe(
      (response: any) => {this.id=response.id},
      (error: any) => {}
    )
  
    this.httpService.getPersonalDetailById(this.id).subscribe(
      (response: any) => {
        this.personalDetailFormGroup.patchValue(response)
      console.log(response);
    }


    )
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



