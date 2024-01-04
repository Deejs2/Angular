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
    

    this.editPersonalDetailById();

    

   
    
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return this.date.transform(date, 'yyyy-MM-dd') || '';
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

  initPersonalDetailResponse(data: any){
    this.personalDetailFormGroup = this.fb.group({
      firstname: [data.firstname, Validators.required],
      lastname: [data.lastname, Validators.required],
      dateOfBirth: [this.formatDate(data.dateOfBirth), Validators.required],
      age: [data.age, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phone: [data.phone, [Validators.required]],
      familyDetailArray: this.fb.array([])
    });

    const familyDetailsArray = this.personalDetailFormGroup.get('familyDetailArray') as FormArray;
    data.familyDetailArray.forEach((familyDetail: any) => {
      familyDetailsArray.push(this.fb.group({
        familyFirstname: [familyDetail.familyFirstname, Validators.required],
        familyLastname: [familyDetail.familyLastname, Validators.required],
        familyDateOfBirth: [this.formatDate(familyDetail.familyDateOfBirth), Validators.required],
        familyAge: [familyDetail.familyAge, Validators.required],
        familyEmail: [familyDetail.familyEmail, [Validators.required, Validators.email]],
        familyPhone: [familyDetail.familyPhone, [Validators.required]]
      }));
    });
  }

  editPersonalDetailById(){

    this.router.queryParams.subscribe(
      (response: any) => {this.id=response.id},
      (error: any) => {}
    )
  
    this.httpService.getPersonalDetailById(this.id).subscribe(
      (response: any) => {
        this.initPersonalDetailResponse(response);
    })
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



