import projectModel from '../models/project.model.js';

export const createProject = async ({name, userId}) => {
    
    if(!name){
        throw new Error("Name is required for project creation")
    }

    if(!userId){
        throw new Error("User Id is required for the project creation")
    }

    const project = await projectModel.create({
        name,
        users: [userId]
    })

    return project;

}