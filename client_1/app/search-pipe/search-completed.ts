import {Pipe} from 'angular2/core';

@Pipe({
  name : 'searchCompleted'
})
export class SearchCompleted{
  transform(value){
    return value.filter((item) => item.isCompleted === 'started');
  }
}
