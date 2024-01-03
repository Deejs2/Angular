import { DatePipe, Location, NgFor, NgIf } from '@angular/common';
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

  constructor(
    private fb: FormBuilder,
    private date : DatePipe, 
    private sharedService: SharedService, 
    private httpService: HttpHandlerService,
    private location: Location
    ) {}

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

  onClickCancel(){
    this.location.back();
  }

  onSubmitForm() {

    this.formSubmitStatus = true;


    console.log(this.personalDetailFormGroup.value);

    if(this.personalDetailFormGroup.valid){
      this.httpService.addPersonalDetail(this.personalDetailFormGroup.value).subscribe(
        (response: any) => {
          // Handle the API response
          // console.log('API Response:', response);
          console.log("Form Value Submitted by API");
          this.onClickCancel();
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



  calculateFamilyAge(index : number): void {
    const dateOfBirthControl = this.familyDetailArray.at(index).get('familyDateOfBirth')?.value;
    let age = this.sharedService.ageCalculation(dateOfBirthControl);
    this.familyDetailArray.at(index).get('familyAge')?.setValue(age);
  }


  

}


