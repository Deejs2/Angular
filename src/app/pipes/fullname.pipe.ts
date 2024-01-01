import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {

  transform(value: string, fname: string, lname: string): string {
    const fullname = fname+" "+lname;
    return fullname;
  }

}
