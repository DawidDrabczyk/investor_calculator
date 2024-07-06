import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disabledButton',
})
export class DisabledButtonPipe implements PipeTransform {
  transform(values: string[]): boolean {
    return values.includes('0');
  }
}
