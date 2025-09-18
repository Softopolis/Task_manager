export default class TaskManager{
   constructor(){
     this.setTasks=[];
    }

    addTask(task){
      this.setTasks.push(task);
      this.calcBalance();
    }

    deleteAction(id){
       var indexToDelete= this.setTasks.findIndex((task)=>{
          return task.id==id;

       })
       this.setTasks.splice(indexToDelete,1);
       calcBalance()
    }

    updateTask(id,newValue){
        var IndexUpdate = this.setTasks.findIndex((task)=>task.id==id);
        this.setTasks[IndexUpdate].set("Description")=newValue;
        calcBalance();
    }

    calcBalance(){

    }
}