import {Pipe} from 'angular2/core';

@Pipe({
  name : 'searchCompleted'
})
export class SearchCompleted{
  transform(value, [isCompleted]){
    return value.filter((item) => item.isCompleted === isCompleted);
  }
}
