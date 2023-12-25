import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFormatter',
  standalone: true
})
export class AgeFormatterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value+" years";
  }

}
