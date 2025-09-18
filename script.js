import Task from "./clases/Task.js";
import TaskManager from "./clases/TaskManager.js";

let manager = new TaskManager();
let op=2,optionDate=1;
let flag_filter_task=0
let action="";
let filter="[{}]"; // to store the current query consult COMPLETED, IN PROGRESS, CANCELED task.
let index=0;
// manager
if(!manager.setTasks.length>0){
   localStorage.setItem("all_tasks",JSON.stringify([]));
}

function grater(){

    var may=JSON.parse(localStorage.getItem("all_tasks"))[0].id;
    console.log(localStorage.getItem("all_tasks"));
    for(var task_obj of JSON.parse(localStorage.getItem("all_tasks"))){
        if(task_obj.id>may){
            may=task_obj.id;
        }
    }

    // may=JSON.parse(localStorage.getItem("all_tasks"))[0].id;
    
    // for(var task_obj of  JSON.parse(localStorage.getItem("all_tasaks"))){
        // if(task_obj.id>may){
        //     may=task_obj.id;
        // }
    // }  
    alert("EL MAYOR ES: "+may);
}

function createId(){
    var id_result,may=0;
    // console.log(`OP VALUE=${op}`);
    var currentIndex= op!=1?manager.setTasks.length:1;
    // console.log("current ID: "+currentIndex);
     //manager.setTasks[currentIndex-1].get("id")
     //
     
    return manager.setTasks.length>0? manager.setTasks[currentIndex-1].get("id")+1:1;//manager.setTasks[manager.setTasks.length-1].get("id")
//      return id_result;
}

function createDate(){
    var day =Math.floor(Math.random()*28+1);
    var month=Math.floor(Math.random()*11+1);
    // console.log("0"+4);
    // console.log(`${day<=9} - day==${day}`);
    day= day<=9?new String("0"+day):day;
    month=month<=9?new String("0"+month):month;
    let new_date= `${month}/${day}/${Math.floor(Math.random()*(new Date().getFullYear()-2019)+(2019))}`;
    return new_date; 
}

function showTaskTable(r1)
{
  console.log(`PROGRAMA ${r1}`);

  let consult = r1 || JSON.parse(localStorage.getItem("all_tasks"));  //consult= ;consult || manager.setTasks.length>0?JSON.parse(localStorage.getItem("all_tasks")):null;//  
  console.log(`PROGRAMA ${consult}`);
  document.getElementById("result").innerHTML="";
  console.log(`MAGNETO:::: ${consult}`);
    
    for(let task of consult){//manager.setTasks
        console.log(task);
    document.getElementById("result").innerHTML+=`<tr class=${task.status=="IN PROGRESS"?"table-warning":task.status=="COMPLETED"?"table-success":"table-danger"}>
                 <td>${task.id}</td>
                 <td>${task.description}</td>
                 <td>${task.date}</td>
                 <td >${task.status}</td>                 
                 <td onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></td>
                 <td onclick="updateTask(${task.id})"><i class="fa-solid fa-pen-nib"></i></td>
               </tr>`;
  }

  
  
}

function FillTable(){
    let sentence="SNK Corporation Japanese video game company. It was founded in_1978 as Shin_Nihon";// It was founded in 1978 as Shin_Nihon Kikaku by Eikichi Kawasaki and began by developing arcade games
    for(let word of sentence.split(" ")){
       manager.addTask(new Task(createId(),word,createDate()));       
    }
    localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));
    
    filter=JSON.parse(localStorage.getItem("all_tasks")); 

    console.log("OPTIMUS -"+filter[0].description +"-----"+localStorage.getItem("all_tasks"));
}

window.addNewTask=()=>{
    let description = document.getElementById("description").value;
    let date_task= document.getElementById("date").value;
    
    
    if(description.length>0 && date_task.length>0){
         console.log(`RESULT: ${description} - ${date_task}`);
         
         manager.addTask(new Task(createId(),description,date_task));
         localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));
         filter=JSON.parse(localStorage.getItem("all_task"));// every change filter is updated
         if(op==1)
            op=2;
         else
            op=1;
         orderById();
         document.getElementById("description").value="";
         document.getElementById("date").value="";
         showTaskTable();
    }else{
        alert("Please enter the description and the date");
    }
    
   
}

window.orderById=()=>{
    var queryUno="";
     console.log(`REPUTAAAA : flag_filter_task= ${flag_filter_task}; OP=${op} %% ${filter} `); 
   if(flag_filter_task==1){
     if(op==1){
       console.log(filter.sort((task1,task2)=>task1.id-task2.id));
       op=2;
       console.log("WOLVERINE "+op+" - "+manager.setTasks[manager.setTasks.length-1].get("id"));
       console.log("SABRETOOTH "+op +" - "+manager.setTasks[0].get("id"));
       console.log(manager.setTasks);
    //    last_index=manager.setTasks[manager.setTasks.length-1].id;
    }else{
        op=1;
        console.log(filter.sort((task1,task2)=>task2.id-task1.id));
        
        console.log("SABRETOOTH "+op +" - "+manager.setTasks[0].get("id"));
        console.log("WOLVERINE "+op+" - "+manager.setTasks[manager.setTasks.length-1].get("id"));
       console.log(manager.setTasks);
    //    last_index=manager.setTasks[0].id;
    }
      showTaskTable(filter);
   }else{
    //get the info directly JSON
    if(op==1){
        manager.setTasks.sort((task1,task2)=>task1.id-task2.id);
        //queryUno=JSON.parse(localStorage.getItem("all_tasks")).sort((task1,task2)=>task1.id-task2.id);
        //console.log(`queryUno  = ${queryUno}`);
        localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));
        //JSON.parse(queryUno).sort((task1,task2)=>task1.id-task2.id);//filter.
        //localStorage.setItem("all_tasks",JSON.stringify(queryUno));
        // console.log(`MY PERRA ${filter}`);
        // console.log(`MY PERRA DOS ${JSON.stringify(filter)}`);
        //console.log(JSON.parse(JSON.stringify(localStorage.getItem("all_tasks"))).sort((task1,task2)=>task1.id-task2.id));//
       op=2;
       console.log("WOLVERINE "+op+" - "+manager.setTasks[manager.setTasks.length-1].get("id"));
       console.log("SABRETOOTH "+op +" - "+manager.setTasks[0].get("id"));
       console.log(manager.setTasks);
    //    last_index=manager.setTasks[manager.setTasks.length-1].id;
    showTaskTable();
    }else{
  
        console.log("REPUUUUUUUUUTA");
        op=1;
         manager.setTasks.sort((task1,task2)=>task2.id-task1.id);
        //queryUno=JSON.parse(localStorage.getItem("all_tasks")).sort((task1,task2)=>task2.id-task1.id);
        // console.log(`queryUno  = ${queryUno[0].id}`);
        localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));
        // JSON.parse(queryUno).sort((task1,task2)=>task2.id-task1.id);//filter.
        // localStorage.setItem("all_tasks",JSON.stringify(queryUno));
        // console.log("REPUUUUUUUUUTA uno: "+JSON.stringify(filter));


        //console.log(`THIS IS FILTER  ${filter[0].id}`);
        console.log("SABRETOOTH "+op +" - "+manager.setTasks[0].get("id"));
        console.log("WOLVERINE "+op+" - "+manager.setTasks[manager.setTasks.length-1].get("id"));
       //console.log(manager.setTasks);
    //    last_index=manager.setTasks[0].id;
    showTaskTable();
        
    }

     
    
   }  
  
    
    // console.log(`LAST INDEX ${last_index}`);
    
    

}
// window.updateTask=(id)=>{
//     var index_update= manager.setTasks.findIndex((task)=>{
//            return task.id==id;
//     });
//     var statado=prompt("Input a new STATUS");
//     var decription=prompt("Input a new description");


// }

window.orderByDate=()=>{
    // console.log(`CAPCOM : ${JSON.parse(JSON.stringify(localStorage.getItem("all_tasks")))}`);
    // console.log(`${JSON.parse(JSON.stringify(localStorage.getItem("all_tasks"))).length}`);
    console.log(`ORDER BY DATE : flag_filter_task= ${flag_filter_task}; optionDate=${optionDate} %% ${filter} `);
    
        if(flag_filter_task==1){
        if(optionDate==1){
             optionDate=2;
             filter.sort((date1,date2)=>{
             return new Date(date1.date) - new Date(date2.date);

                   });
        }else{
                optionDate=1;
                filter.sort((date1,date2)=>{
                 return new Date(date2.date) - new Date(date1.date);

        });
       }

       showTaskTable(filter);
    }else{
        if(optionDate==1){
             optionDate=2;
             manager.setTasks.sort((date1,date2)=>{  //manager.setTasks.sort((date1,date2) filter
             return new Date(date1.date) - new Date(date2.date);

                   });
             localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));      
        }else{
                optionDate=1;
                manager.setTasks.sort((date1,date2)=>{//manager.setTasks.sort((date1,date2)
                 return new Date(date2.date) - new Date(date1.date);

                   });

              localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));
         }
         showTaskTable();
    }
    
        
    
}
// 
window.ALL=()=>{
    flag_filter_task=0;

    showTaskTable();
    // grater();
    // JSON.parse(JSON.stringify(localStorage.getItem("all_tasks")));
} 

window.deleteTask=(id)=>{
    action="delete";
    var indexToDelete=0;
    if(confirm("Are you sure?")){
      indexToDelete=manager.setTasks.findIndex((task)=>{
        return task.id==id;
     })
     manager.setTasks.splice(indexToDelete,1);
     localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));//update the current status to store locally.
     //console.log( `${manager.setTasks[result].description} :index - ${result}`);
    showTaskTable();
    }    
}
//filter by completed tasks
window.completeTask=()=>{
    action="completed";
   flag_filter_task=1; // flag toknow wich update casewas chooosen
   if(manager.setTasks.length>0){
    var result= JSON.parse(localStorage.getItem("all_tasks")).filter((task)=>{//manager.setTasks.filter
        return task.status==="COMPLETED";
    });
    filter=JSON.parse(JSON.stringify(result));///
   }else{
    filter=undefined;
   } 

   

    console.log(`completed : ${JSON.stringify(result)}`);
    
    console.log(`OBJETO : ${JSON.stringify(manager.setTasks)}`);
    showTaskTable(filter);
}

window.canceled_tasks=()=>{
    flag_filter_task=1; // flag to know wich update case was chooosen
    action="canceled";
    if(manager.setTasks.length>0){
       var result= manager.setTasks.filter((task)=>{
        return task.status==="CANCELED";
    });
       filter=JSON.parse(JSON.stringify(result));
    }else{
        filter=undefined;
    }
     

    console.log(`CANCELADAS : ${JSON.stringify(result)}`);
    console.log(`OBJETO : ${JSON.stringify(manager.setTasks)}`);
    //filter=JSON.parse(JSON.stringify(result));///
    showTaskTable(filter);

}

//  SELECTED CONTROL PROMP
function selectPrompt(message, options) {
      return new Promise((resolve) => {
        // Overlay
        let overlay = document.createElement("div");
        overlay.className = "overlay";

        // Dialog
        let dialog = document.createElement("div");
        dialog.className = "dialog";

        // Message
        let msg = document.createElement("p");
        msg.textContent = message;
        dialog.appendChild(msg);

        // Select
        let select = document.createElement("select");
        
        
        options.forEach(opt => {
          let option = document.createElement("option");
          option.value = opt;
          option.textContent = opt;
          select.appendChild(option);
        });
        dialog.appendChild(select);

        // OK button
        let ok = document.createElement("button");
        ok.textContent = "OK";
        ok.onclick = () => {
          document.body.removeChild(overlay);
          resolve(select.value);
        };
        dialog.appendChild(ok);

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
      });
    }

     async function testPrompt(index){// await 
      let choice = await selectPrompt("Update status:", ["IN PROGRESS", "COMPLETED", "CANCELED"]);
      
      alert(`VALUE PERRA - ${choice}`); 
      manager.setTasks[index].set("status",choice);
      localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));
      if(flag_filter_task==1){
        showTaskTable(filter);
      }else{
        showTaskTable();
      }
      
      
    //   document.getElementById("selected").textContent =  choice;
      

    }

/// END SELECT CONTROL

window.updateTask=(id)=>{
   var description=""; 

   var indexToUpdate= manager.setTasks.findIndex((task)=>{//.findIndex  JSON.parse(localStorage.getItem("all_tasks"))
       return task.id==id;
   })    
   console.log(` RESULT + ${JSON.parse(localStorage.getItem("all_tasks"))[indexToUpdate].description} -ID: ${JSON.parse(localStorage.getItem("all_tasks"))[indexToUpdate].id}- INDEX: ${indexToUpdate} - ${typeof(JSON.parse(localStorage.getItem("all_tasks")))}`)
    testPrompt(indexToUpdate);//to update TASK STATUS
    description=prompt("Update the description:");
    description= description || manager.setTasks[indexToUpdate].description; 
    manager.setTasks[indexToUpdate].set("description",description); 
    localStorage.setItem("all_tasks",JSON.stringify(manager.setTasks));  
//     filter=JSON.parse(JSON.stringify(localStorage.getItem("all_tasks"))); // update the FILTER
    if(flag_filter_task==1){
        
        if(action=="completed"){
        filter= JSON.parse(localStorage.getItem("all_tasks")).filter((task)=>{//manager.setTasks.filter
        return task.status==="COMPLETED";
           });
        }else{
         filter= JSON.parse(localStorage.getItem("all_tasks")).filter((task)=>{//manager.setTasks.filter
        return task.status==="CANCELED";
           });
        }
            
    showTaskTable(filter);
    }else{
     showTaskTable();
    }

   
}

// manager.addTask(new Task(createId(),"income",createDate()));
// manager.addTask(new Task(createId(),"checking orders",createDate()));
// manager.addTask(new Task(createId(),"accounter",createDate()));
console.log(manager.setTasks);

FillTable();
showTaskTable();
console.log(manager.setTasks);
// console.log();
// console.log(createDate());