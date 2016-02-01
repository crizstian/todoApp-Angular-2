import {Pipe} from 'angular2/core';

@Pipe({
  name : 'searchCompleted'
})
export class SearchCompleted{
  transform(value, [isCompleted]){
    return value.filter((item) => {
      if (item.isCompleted === isCompleted) return item;
      if ('all' === isCompleted) return item;
    });
  }
}
