import { Component } from '@angular/core';
import { UserDetailFormModel } from '../Model/form-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
    model = new UserDetailFormModel();

    userDetailList: Array<UserDetailFormModel> = new Array<UserDetailFormModel>();



    onSubmit(form : any){
      this.userDetailList.push({
        firstname:this.model.firstname,
        lastname:this.model.lastname,
        dateOfBirth:this.model.dateOfBirth,
        age:this.model.age,
        email:this.model.email,
        phone:this.model.phone,
      });

      alert("Form Submitted Successfully!");
    }

    calculateAge(): void {
      if (this.model.dateOfBirth) {
        const birthDate = new Date(this.model.dateOfBirth);
        const today = new Date();
        const ageDiff = today.getFullYear() - birthDate.getFullYear();
  
        // Check if the birthday has occurred this year
        if (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
          this.model.age = ageDiff - 1;
        } else {
          this.model.age = ageDiff;
        }
      }
    }
}
