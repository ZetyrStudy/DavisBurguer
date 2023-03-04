import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectionProds'
})
export class SectionProdsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
