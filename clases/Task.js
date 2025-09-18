export default class Task{
 
    constructor(id_task,task_description, task_date){
       this.id=id_task;
       this.description=task_description;
       this.date=task_date;
       this.status="IN PROGRESS";
    }

    get(varName){
        return this[varName];
    }

    set(varName,newValue){
        this[varName]=newValue;
    }
}