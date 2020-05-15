const db = require(`../data/dbConnection`);

module.exports = {
    addingResource,
    resourceList,
    addingProject,
    projectList,
    addingTask,
    taskList,
}

function findProjectById(id){
    return db('Projects').where({id}).first();
}

function addingResource(resource){
    return db('Resources').insert(resource, 'id');
}

function resourceList(){
    return db('Resources');
}

function addingProject(project){
    return db('Projects').insert(project, 'id').then(ids=>{
        return findProjectById(ids[0]);
    });
}

function projectList(){
    return db('Projects');
}

function addingTask(project_id, task){
    //task = {...task, Project_ID: project_id};
    return db('Tasks').where({Project_ID: project_id}).insert(task = {...task, Project_ID: project_id},'id').then(ids=>{
        return findProjectById(ids[0]);
    });
}

function taskList(project_id){
    return db('Tasks')
    .join('Projects', 'Projects.id', '=', 'Tasks.Project_ID')
    .where({Project_ID: project_id})
    .select('Projects.Name', 'Projects.Description', 'Tasks.Step');
}