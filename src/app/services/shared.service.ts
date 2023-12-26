import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  ageCalculation(dob:any): number {
    const dateOfBirthControl = dob;

    if (dateOfBirthControl) {
      const birthDate = new Date(dateOfBirthControl);
      const today = new Date();
      let ageDiff = today.getFullYear() - birthDate.getFullYear();

      // Check if the birthday has occurred this year
      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
      ) {
        ageDiff -= 1;
      }

      return ageDiff;
    }
    return 0;
  }
}
