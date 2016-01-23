export class Todo {

  _id:string;
  text:string;
  isCompleted:string;

  constructor(_id?:string,text:string = '',isCompleted:string = 'started'){
    this._id = _id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

  toggle():void{
    this.isCompleted = (this.isCompleted === 'started') ? 'completed' : 'started';
  }

}
