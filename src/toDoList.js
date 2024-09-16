import project from "./project";

const toDoList = function(){
    let projects = [];

    function addProject(name){
        if (projects.some(project => project.getName() == name)){
            console.log("This project name already exists!");
            return;
        }

        let newProject = project(name);
        projects.push(newProject);
    }

    function removeProject(name){
        let projectIndex = projects.findIndex(project => project.getName() == name);

        if ( projectIndex == -1){
            console.log("Not found!");
            return;
        }
        projects.splice(projectIndex ,1);
    }

    function changeProjectName(previousName, newName){
        if (projects.some(project => project.getName() === newName)) {
            console.log(`Project name "${newName}" already exists. Choose a different name.`);
            return;
        }

        projects.forEach(project => {
            if (project.getName() == previousName){
                project.setName(newName);
                return;
            }
        })
    };

    function showProjects(){
        return projects;
    };

    return{
        addProject,
        removeProject,
        changeProjectName,
        showProjects,
    }
}

export default toDoList;