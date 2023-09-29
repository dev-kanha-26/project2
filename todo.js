let todo = [];

let req = prompt("Please enter your request");
while(true){
    if(req == "quit"){
        console.log("quiting todo");
        break;
    }

    if(req == "list"){
        console.log("-----------------");
        for(let i= 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------");
    }
    else if(req == "add"){
        let task = prompt("Enter the task you add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the item index:");
        todo.splice(idx, 1);
    }
    else{
        prompt("Wrong Input!");
    }
    req = prompt("Please enter your request")
}