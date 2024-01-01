import { Component } from '@angular/core';
import { HttpHandlerService } from '../services/http-handler.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  page="Dashboard"
  user=""

  addressData: any 

  addressDetailFormGroup: FormGroup = new FormGroup<any>({});

  constructor(private httpService: HttpHandlerService, private fb: FormBuilder, private sharedService: SharedService) {
    this.addressDetailFormGroup = this.fb.group({
      country: '',
      state: '',
      street: ''
    })

    this.user = this.sharedService.user;
  }

  onSubmitAddress(){
    this.httpService.addAddressDetail(this.addressDetailFormGroup.value).subscribe(
      (response:any)=>{
        this.addressData = response;
        if(this.addressData.status=="Success"){
          console.log(this.addressData.message);
        }
      },
      (error)=>{console.log("While submiting form!")}
    );
  }

}
