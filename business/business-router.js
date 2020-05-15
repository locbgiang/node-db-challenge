const express = require('express');

const Business = require('./business-model');

const router = express.Router();



router.post('/resources',(req,res)=>{
    if(isResourceValid(req.body)){
        Business.addingResource(req.body).then(ids=>{
            res.status(201).json({
                data: ids
            })
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
                error: "Unable to add resource"
            })
        })
    } else {
        res.status(400).json({
            message: 'Please provide name of resource'
        })
    }
})


router.get('/resources',(req, res)=>{
    Business.resourceList().then(resources=>{
        res.status(200).json(resources)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: "Failed to get resources list"
        })
    })
})

router.post('/projects',(req,res)=>{
    if(isProjectValid(req.body)){
        Business.addingProject(req.body).then(ids=>{
            res.status(201).json({
                data: ids
            })
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
                error: "Unable to add project"
            })
        })
    } else {
        res.status(400).json({
            message: "Please provide name of project"
        })
    }
})

router.get('/projects',(req,res)=>{
    Business.projectList().then(projects=>{
        res.status(200).json(projects)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: "Failed to get projects list"
        })
    })
})

router.post('/projects/:id/tasks',(req,res)=>{
    const id = req.params.id;
    if(isTaskValid(req.body)){
        Business.addingTask(id, req.body).then(ids=>{
            res.status(201).json({
                data: ids
            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                    error: "Unable to add task"
                })
            })
        })
    } else {
        res.status(400).json({
            message: "Please provide step"
        })
    }
})

router.get('/projects/:id/tasks',(req,res)=>{
    const id = req.params.id;
    Business.taskList(id).then(tasks=>{
        if(tasks){
            res.status(200).json(tasks)
        } else {
            res.status(404).json({
                message: "Could not find tasks with given project id"
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: "Failed to get tasks"
        })
    })
})

function isResourceValid(resource){
    return Boolean(resource.Name)
}
function isProjectValid(project){
    return Boolean(project.Name)
}
function isTaskValid(task){
    return Boolean(task.Step)
}
module.exports = router;