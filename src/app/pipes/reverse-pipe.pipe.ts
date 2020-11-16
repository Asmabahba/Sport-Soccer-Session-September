import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(ch: any): any {
    let res = '';
    for (let i = 0; i < ch.length; i++) {
      res = ch[i] + res;
    }
    return res;
  }

}
