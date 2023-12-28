import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgeFormatterPipe } from '../pipes/age-formatter.pipe';
import { SharedService } from '../services/shared.service';
import { HttpHandlerService } from '../services/http-handler.service';
import { NepaliNumberPipe } from '../pipes/nepali-number.pipe';

@Component({
  selector: 'app-reactive-form-add-more',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, DatePipe, AgeFormatterPipe, NepaliNumberPipe],
  providers: [DatePipe,NepaliNumberPipe, SharedService, HttpHandlerService, AgeFormatterPipe],
  templateUrl: './reactive-form-add-more.component.html',
  styleUrl: './reactive-form-add-more.component.scss'

})
export class ReactiveFormAddMoreComponent implements OnInit{

  formSubmitStatus : boolean = false;

  maxDate : any 

  personalDetailFormGroup: FormGroup = new FormGroup<any>({});

  constructor(private fb: FormBuilder,date : DatePipe, private sharedService: SharedService, private httpService: HttpHandlerService) {
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

     

    this.maxDate = date.transform(new Date(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
    
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
  
    // if(this.personalDetailFormGroup.valid){
    //   console.log(this.personalDetailFormGroup.value);
    // }

      // Enable the 'age' control temporarily
      this.personalDetailFormGroup.get('age')?.enable();

    console.log(this.personalDetailFormGroup.value);

    if(this.personalDetailFormGroup.valid){
      this.httpService.addPersonalDetail(this.personalDetailFormGroup.value).subscribe(
        (response: any) => {
          // Handle the API response
          // console.log('API Response:', response);
          console.log("Form Value Submitted by API");
        },
        (error: any) => {
          // Handle API error
          // console.error('API Error:', error);
          console.log("Error while submitting");
        }
      );
    }

  }

  calculateAge(dob:any){
    let age = this.sharedService.ageCalculation(dob);
    this.personalDetailFormGroup.get("age")?.setValue(age);
  }
  
  // calculateAge(): void {
  //   const dateOfBirthControl = this.personalDetailFormGroup.get('dateOfBirth');

  //   if (dateOfBirthControl && dateOfBirthControl.value) {
  //     const birthDate = new Date(dateOfBirthControl.value);
  //     const today = new Date();
  //     let ageDiff = today.getFullYear() - birthDate.getFullYear();

  //     // Check if the birthday has occurred this year
  //     if (
  //       today.getMonth() < birthDate.getMonth() ||
  //       (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  //     ) {
  //       ageDiff -= 1;
  //     }

  //     if(ageDiff>=0){
  //       this.personalDetailFormGroup.get('age')?.setValue(ageDiff.toString());
  //       this.futureDateError=false;
  //     }else{
  //       this.personalDetailFormGroup.get('age')?.setValue('0'.toString());
  //       this.futureDateError=true;
  //     }
  //   }
  // }


  calculateFamilyAge(index : number): void {
    const dateOfBirthControl = this.familyDetailArray.at(index).get('familyDateOfBirth')?.value;
    let age = this.sharedService.ageCalculation(dateOfBirthControl);
    this.familyDetailArray.at(index).get('familyAge')?.setValue(age);
  }

  // calculateFamilyAge(index : number): void {
  //   const dateOfBirthControl = this.familyDetailArray.at(index).get('familyDateOfBirth');

  //   if (dateOfBirthControl && dateOfBirthControl.value) {
  //     const birthDate = new Date(dateOfBirthControl.value);
  //     const today = new Date();
  //     let ageDiff = today.getFullYear() - birthDate.getFullYear();

  //     // Check if the birthday has occurred this year
  //     if (
  //       today.getMonth() < birthDate.getMonth() ||
  //       (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  //     ) {
  //       ageDiff -= 1;
  //     }

  //     if(ageDiff>=0){
  //       this.familyDetailArray.at(index).get('familyAge')?.setValue(ageDiff.toString());
  //       this.futureDateError=false;
  //     }else{
  //       this.familyDetailArray.at(index).get('familyAge')?.setValue('0'.toString());
  //       this.futureDateErrorFamily=true;
  //     }

      
  //   }
  // }

  


}


