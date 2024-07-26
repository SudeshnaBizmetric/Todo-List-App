export class Todo{
    id:number;
    todo:string;
    isDone:boolean;
    

    constructor(id:number,todo:string,isDone:boolean){
        this.id=id;
        this.todo=todo;
        this.isDone=isDone;
    }
}