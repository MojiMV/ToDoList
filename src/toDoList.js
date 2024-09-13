const toDoList = function(){
    let projects = [];

    function addProject(name){
        if (projects.some(project => project.name == name)){
            console.log("This project name already exists!");
            return;
        }

        let newProject = Project(name);
        projects.push(createProject(name));
    }

    function removeProject(name){
        let projectIndex = projects.findIndex(project => project.name == name);

        if ( projectIndex == -1){
            console.log("Not found!");
            return;
        }
        projects.splice(projectIndex ,1);
    }

    function changeProjectName(previousName, newName){
        if (projects.some(project => project.name === newName)) {
            console.log(`Project name "${newName}" already exists. Choose a different name.`);
            return;
        }

        projects.forEach(project => {
            if (project.name == previousName){
                project.name = newName;
                return;
            }
        })
    }

    return{
        addProject,
        removeProject,
        changeProjectName
    }
}

export default toDoList;