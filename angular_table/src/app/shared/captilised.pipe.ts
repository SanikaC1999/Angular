import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'captilised'
})
export class CaptilisedPipe implements PipeTransform {

  transform(value: any) {
    if(value){
      return value.charAt(0).toUpperCase()+value.slice(1)
    }
    return value
  }

}
