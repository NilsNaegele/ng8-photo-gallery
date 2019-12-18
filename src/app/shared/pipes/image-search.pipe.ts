import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSearch'
})
export class ImageSearchPipe implements PipeTransform {
  transform(items: any[], criteria: string): any {
    if (criteria === 'alle') {
      return items;
    } else {
        return items.filter(item =>  item.caption.toLowerCase().includes(criteria.toLowerCase()));
      }
  }
}
