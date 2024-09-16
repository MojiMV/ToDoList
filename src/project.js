import task from "./task";

const project = function(name){
    function getName(){
        return name;
    }

    function setName(newName){
        name = newName;
    }

    let tasks = [];

    function addTask(){
        if (tasks.some(task => task.getName() == name)){
            console.log("This task name already exists!");
            return;
        }
    
        let newTask = task(title, description, dueDate, priority);
        tasks.push(newTask);
    }
    
    function removeTask(name){
        let taskIndex = tasks.findIndex(task => task.getName() == name);

        if ( taskIndex == -1){
            console.log("Not found!");
            return;
        }
        tasks.splice(taskIndex ,1);
    }

    function changeTaskName(previousName, newName){
        if (tasks.some(task => task.getName() === newName)) {
            console.log(`Project name "${newName}" already exists. Choose a different name.`);
            return;
        }

        tasks.forEach(task => {
            if (task.getName() == previousName){
                task.setName(newName);
                return;
            }
        })
    };

    function showTasks(){
        return tasks;
    };

    return {
        getName,
        setName,
        addTask,
        removeTask,
        changeTaskName,
        showTasks
    }

}

export default project;