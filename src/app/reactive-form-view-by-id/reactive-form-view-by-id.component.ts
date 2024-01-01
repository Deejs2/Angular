import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../services/http-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullnamePipe } from '../pipes/fullname.pipe';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { AgeFormatterPipe } from '../pipes/age-formatter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-view-by-id',
  standalone: true,
  imports: [FullnamePipe, CommonModule, AgeFormatterPipe, ReactiveFormsModule, NgFor],
  providers: [FullnamePipe, DatePipe, AgeFormatterPipe],
  templateUrl: './reactive-form-view-by-id.component.html',
  styleUrl: './reactive-form-view-by-id.component.scss'
})
export class ReactiveFormViewByIdComponent implements OnInit{
  page="View Personal Detail"
  id : number = 0
  formData: any

  constructor(private httpService: HttpHandlerService, private router: ActivatedRoute, private fullname: FullnamePipe, private date: DatePipe, private ageFormatter: AgeFormatterPipe){ 
    this.router.params.subscribe(
      (response:any) => {
        this.id = response.id;
      }
    )
  }

  ngOnInit(): void {
    this.httpService.getPersonalDetailById(this.id).subscribe(
      (response:any) => {
        this.formData = response
        console.log(this.formData)
      },
      (error: any) => {console.log("Error while Fetch by Id!")}
    )
  }



  
  
}
