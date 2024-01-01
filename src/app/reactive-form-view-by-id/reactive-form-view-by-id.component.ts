import { Component } from '@angular/core';
import { HttpHandlerService } from '../services/http-handler.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form-view-by-id',
  standalone: true,
  imports: [],
  templateUrl: './reactive-form-view-by-id.component.html',
  styleUrl: './reactive-form-view-by-id.component.scss'
})
export class ReactiveFormViewByIdComponent {
  page="View Personal Detail"
  id:string = ''

  constructor(private httpService: HttpHandlerService, private router: ActivatedRoute){ 
    this.router.params.subscribe(
      (response:any) => {
        this.id = response.id;
      }
    )
  }

  
  
}
