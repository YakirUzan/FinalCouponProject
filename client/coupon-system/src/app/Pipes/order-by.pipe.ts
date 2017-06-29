import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(values: any, args?: { type: string, reverse: boolean }): any {
    if (!_.isArray(values) || _.isEmpty(args)) return;
    values.sort((a: any, b: any) => {
      if (_.isNumber(a[args.type]) && _.isNumber(b[args.type])) {
        return this.numbersCase(a, b, args);
      } else if (this.isDate(a[args.type]) && this.isDate(b[args.type])) {
        return this.datesCase(a, b, args);
      } else {
        return this.stringsCase(a, b, args);
      }
    });
    return values;
  }

  isDate(a: string): boolean {
    let date: string[] = a.split("/");
    return (!isNaN(Date.parse(date["1"] + "/" + date["0"] + "/" + date["2"])))
  }

  datesCase(a: any, b: any, args: { type: string, reverse: boolean }): number {
    if (this.getDateFromString(a[args.type]) < this.getDateFromString(b[args.type])) {
      return args.reverse ? 1 : -1;
    } else if (this.getDateFromString(a[args.type]) > this.getDateFromString(b[args.type])) {
      return args.reverse ? -1 : 1;
    } else {
      return 0;
    }
  }

  getDateFromString(date: string): Date {
    let from: string[] = date.split("/");
    return new Date(from["1"] + "/" + from["0"] + "/" + from["2"]);
  }

  numbersCase(a: any, b: any, args: { type: string, reverse: boolean }): number {
    if (a[args.type] < b[args.type]) {
      return args.reverse ? 1 : -1;
    } else if (a[args.type] > b[args.type]) {
      return args.reverse ? -1 : 1;
    } else {
      return 0;
    }
  }

  stringsCase(a: any, b: any, args: { type: string, reverse: boolean }): number {
    if (a[args.type].toString().toLowerCase() < b[args.type].toString().toLowerCase()) {
      return args.reverse ? 1 : -1;
    } else if (a[args.type].toString().toLowerCase() > b[args.type].toString().toLowerCase()) {
      return args.reverse ? -1 : 1;
    } else {
      return 0;
    }
  }
}
