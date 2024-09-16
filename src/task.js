const task = function(title, description, priority, dueDate){
    function getTitle(){
        return title;
    }

    function updateTitle(newTitle){
        title = newTitle;
    }

    function getDescription(){
        return description;
    }

    function updateDescription(newDescription){
        description = newDescription; 
    }
    
    function getPriority(){
        return priority;
    }

    function updatePriority(newPriority){
        priority = newPriority;
    }

    function getDueDate(){
        return dueDate;
    }

    function updateDueDate(newDueDate){
        dueDate = newDueDate;
    }

    let checked = false;
    function getCheckedInfo(){
        return checked;
    }

    function toggleChecked(){
        checked = !checked;
    }

    const id = Date.now();
    function getId(){
        return id;
    }

    return {
        getTitle,
        updateTitle,
        getDescription,
        updateDescription,
        getPriority,
        updatePriority,
        getDueDate,
        updateDueDate,
        getCheckedInfo,
        toggleChecked,
        getId,
    }

}

export default task;