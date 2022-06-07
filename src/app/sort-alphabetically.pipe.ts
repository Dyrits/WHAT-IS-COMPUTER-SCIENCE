import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabetically'
})
export class SortAlphabeticallyPipe implements PipeTransform {

  transform(array: string[], order: string): string[] {
    return array.sort((item$a, item$b) => {
      return order === "descending" ? item$b.localeCompare(item$a) : item$a.localeCompare(item$b);  });
  }

}
