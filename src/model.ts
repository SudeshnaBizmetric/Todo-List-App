export class Todo{
    _id?: string;
    todo_name: string
    isDone:boolean
    isPriority:boolean
    deadline:string
    id: any;

    constructor(todo_name:string,isDone:boolean , isPriority:boolean , deadline:string ,id:any){
        
        this.todo_name=todo_name;
        this.isDone=isDone;
        this.isPriority=isPriority;
        this.deadline=deadline
        this.id=id
    }
}