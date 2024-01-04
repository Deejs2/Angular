import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormAddMoreComponent } from '../reactive-form-add-more/reactive-form-add-more.component';
import { HttpHandlerService } from '../services/http-handler.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AgeFormatterPipe } from '../pipes/age-formatter.pipe';
import { NepaliNumberPipe } from '../pipes/nepali-number.pipe';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToastrModule, ToastrService, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-reactive-form-add-more-view',
  standalone: true,
  imports: [ReactiveFormAddMoreComponent, CommonModule, AgeFormatterPipe, NepaliNumberPipe, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [HttpHandlerService, DatePipe, AgeFormatterPipe, NepaliNumberPipe],
  templateUrl: './reactive-form-add-more-view.component.html',
  styleUrl: './reactive-form-add-more-view.component.scss'
})
export class ReactiveFormAddMoreViewComponent implements OnInit{

  formData : any;
  formDataStatus : boolean = false
  id: number = 0
  idStatus: boolean = false

  constructor(private httpService: HttpHandlerService, private date:DatePipe, private router: Router,
     private ageFormatter: AgeFormatterPipe, private nepaliNumber: NepaliNumberPipe,
     private aRouter: ActivatedRoute,
    //  private toastr: ToastrService
     ){ }

  ngOnInit(): void {
    
    this.getDetails();

    

    
  }

  getDetails(){
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
  }

  onClickAddPersonalDetail(){
    this.router.navigate(['personal-detail/add'])
  }
  
  onClickShowPersonalDetail(id: any){
    this.router.navigate(['personal-detail/view'],{queryParams: {id:id}})
  }

  onClickEditPersonalDetail(id: any){
    this.router.navigate(['personal-detail/edit'], {queryParams: {id:id}})
  }

  onClickDelete(id: number){

    // this.toastr.success("This is From Toast!")
    if(confirm("Do You Really Want To Delete ID: "+id+" ?")){
      this.httpService.removePersonalDetailById(id).subscribe(
        (response:any) => {
          console.log(response.data)
          this.getDetails();
        },
        (error:any) => {
          console.log("Error While Deleting")
          this.getDetails();
        }
      )
    }

  }


}
