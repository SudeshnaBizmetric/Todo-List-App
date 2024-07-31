export class Todo{
    id:number;
    todo:string;
    isDone:boolean;
    isPriority:boolean

    constructor(id:number,todo:string,isDone:boolean , isPriority:boolean ){
        this.id=id;
        this.todo=todo;
        this.isDone=isDone;
        this.isPriority=isPriority;
    }
}