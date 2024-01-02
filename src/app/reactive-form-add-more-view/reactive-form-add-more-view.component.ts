import { Component, OnInit } from '@angular/core';
import { ReactiveFormAddMoreComponent } from '../reactive-form-add-more/reactive-form-add-more.component';
import { HttpHandlerService } from '../services/http-handler.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AgeFormatterPipe } from '../pipes/age-formatter.pipe';
import { NepaliNumberPipe } from '../pipes/nepali-number.pipe';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  formDataStatus : boolean = false
  id: number = 0
  idStatus: boolean = false

  constructor(private httpService: HttpHandlerService, private date:DatePipe, private router: ActivatedRoute, private ageFormatter: AgeFormatterPipe, private nepaliNumber: NepaliNumberPipe){ }

  ngOnInit(): void {
    this.httpService.getPersonalDetail().subscribe(
      (result: any) => {
        this.formData = result;
        this.formDataStatus = true;
      },
      (error: any) => {
        if(this.formDataStatus==false){
          console.log("No Records Found!");
        }
      }
    );

    

    this.router.params.subscribe(
      (response: any) => {
        this.id = response.id;
        this.idStatus = true;
        console.log(this.id)
      },
      (error: any) => {
        console.log("Error while getting id")
      }
    )
    
    if(this.id == this.httpService.removePersonalDetailById(this.id)){
      console.log("ID : "+this.id+" deleted Successfully!")
    }



    

  }

  

}
