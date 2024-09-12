let projects = [];

function createProject(name){
    return{
        name: name,
    }
}

function addProject(name){
    if (projects.some(project => project.name == name)){
        console.log("This project name already exists!");
        return;
    }

    projects.push(createProject(name));
}

function removePorject(name){
    let projectIndex = projects.findIndex(project => project.name == name);

    if ( projectIndex == -1){
        console.log("Not found!");
        return;
    }
    projects.splice(projectIndex ,1);
}