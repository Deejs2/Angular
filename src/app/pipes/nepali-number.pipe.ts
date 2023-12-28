import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nepaliNumber',
  standalone: true
})
export class NepaliNumberPipe implements PipeTransform {

  transform(value: number): string {
    const nepaliNumber = ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२', '१३', '१४'];
    const numberStr = value.toString();
    let nepaliNumberStr = '';
    for (let i = 0; i < numberStr.length; i++) {
      const digit = parseInt(numberStr[i], 10);
      nepaliNumberStr += nepaliNumber[digit];
    }
    return nepaliNumberStr;
  }

}
