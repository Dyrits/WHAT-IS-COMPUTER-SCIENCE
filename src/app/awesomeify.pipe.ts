import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesomeify'
})
export class AwesomeifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} is awesome!`;
  }

}
