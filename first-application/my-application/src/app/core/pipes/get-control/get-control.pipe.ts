import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'getControl'
})
export class GetControlPipe implements PipeTransform {

  transform(control: any): FormControl {
    return control as FormControl;
  }

}
