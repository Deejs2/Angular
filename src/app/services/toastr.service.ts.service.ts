import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceTsService {

  constructor(private toastrService: ToastrService) { }

  showSuccess(message: string): void {
    this.toastrService.success(message);
  }
}
