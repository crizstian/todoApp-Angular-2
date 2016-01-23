export class Todo {

  _id:string;
  text:string;
  isCompleted:boolean;

  constructor(_id?:string,text:string = '',isCompleted:boolean = false){
    this._id = _id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

  toggle():void{
    this.isCompleted = (this.isCompleted) ? false : true;
  }

}
