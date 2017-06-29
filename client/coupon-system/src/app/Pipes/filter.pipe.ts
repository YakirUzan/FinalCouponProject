import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    if (!_.isArray(values) || _.isEmpty(args)) return values;
    return values.filter((value) => {
      return this.isExist(value, args);
    });
  }

  isExist(value, args): boolean {
    let exist: boolean = false;
    _.keys(value).forEach((key) => {
      if (key !== "coupons" && key !== "image" && value[key].toString().indexOf(args) !== -1) {
        exist = true;
      }
    });
    return exist;
  }

}
