import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  /* Ejemplo1
  transform(value: string, seg:string,):unknown {
    return value.toUpperCase();
  } */

  transform(value: string, upperOrLower: string):unknown {
    if (upperOrLower === 'upper'){
      return value.toUpperCase();
    } else {
    return value.toLowerCase();
  }
}

}
