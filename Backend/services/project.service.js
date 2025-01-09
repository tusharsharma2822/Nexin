import projectModel from '../models/project.model.js';

export const createProject = async ({name, userId}) => {

    if(!name){
        throw new error("Name is required");
    }

    if(!userId){
        throw new error("UserId is required");
    }

    let project;
    try {
        project = await projectModel.create({
            name,
            users: [ userId ]
        });
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code in MongoDB
            throw new Error("Project name already exists");
        }
        throw error;
    }
    return project;
}

export const getAllProjectByUserId = async ({userId}) => {
    if(!userId){
        throw new Error('userId is required')
    }

    const allUserProjects = await projectModel.find({
        users: userId
    })

    return allUserProjects
}