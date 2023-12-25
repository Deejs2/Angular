import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{
    userDetail = new FormGroup({
      firstname : new FormControl('',[ Validators.required]),
      lastname : new FormControl('',[ Validators.required]),
      dateOfBirth : new FormControl('',[ Validators.required]),
      age : new FormControl('',[ Validators.required]),
      email : new FormControl('',[ Validators.required, Validators.email]),
      phone : new FormControl('',[ Validators.required, Validators.max(10000000000)])
    });

    ngOnInit(): void {
      
    }

    get f(){
      return this.userDetail.controls;
    }

    onSubmit(){
      if(this.userDetail.status=='VALID'){
        alert("Form Submitted Successfully!");
        console.table(this.userDetail.value);
      }else{
        alert("Please Fill up the required Field!");
      }
    }
}
