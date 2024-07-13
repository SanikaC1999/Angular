import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sort(array: any[], prop: string, direction: 'asc' | 'desc' = 'asc'): any[] {
    return array.sort((a, b) => {
      if (a[prop] < b[prop]) {
        return direction === 'asc' ? -1 : 1;
      } else if (a[prop] > b[prop]) {
        return direction === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
