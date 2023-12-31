import { Component, OnInit } from '@angular/core';
import { ReactiveFormAddMoreComponent } from '../reactive-form-add-more/reactive-form-add-more.component';
import { HttpHandlerService } from '../services/http-handler.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AgeFormatterPipe } from '../pipes/age-formatter.pipe';
import { NepaliNumberPipe } from '../pipes/nepali-number.pipe';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactive-form-add-more-view',
  standalone: true,
  imports: [ReactiveFormAddMoreComponent, CommonModule, AgeFormatterPipe, NepaliNumberPipe, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [HttpHandlerService, DatePipe, AgeFormatterPipe, NepaliNumberPipe],
  templateUrl: './reactive-form-add-more-view.component.html',
  styleUrl: './reactive-form-add-more-view.component.scss'
})
export class ReactiveFormAddMoreViewComponent implements OnInit{
  page = "All Personal Details";

  formData : any;

  constructor(private httpService: HttpHandlerService, private date:DatePipe, private ageFormatter: AgeFormatterPipe, private nepaliNumber: NepaliNumberPipe){ }

  ngOnInit(): void {
    this.httpService.getPersonalDetail().subscribe(
      (result: any) => {
        this.formData = result;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
    if(this.formData){
      console.log(this.formData);
    }else{
      console.log("No Records Found!");
    }
  }

  

}
