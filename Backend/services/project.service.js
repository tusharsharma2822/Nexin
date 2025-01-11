import mongoose from 'mongoose';
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

export const addUsersToProject = async ({projectId,users, userId}) => {
    if(!projectId){
        throw new Error('Project Id is required')
    }

    if(!mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("Invalid ProjectId")
    }

    if(!users){
        throw new Error('Users are required')
    }

    if(!Array.isArray(users) || users.some(userId => !mongoose.Types.ObjectId.isValid(userId))){
        throw new Error("Invalid userId(s) in users array")
    }

    if(!userId){
        throw new Error("User Id is required")
    }

    if(!mongoose.Types.ObjectId.isValid(userId)){
        throw new Error("Invalid UserId")
    }

    const project = await projectModel.findOne({
        _id: projectId,
        users: userId
    })

    if(!project){
        throw new Error('User not belong to this project')
    }

    const updatedProject = await projectModel.findOneAndUpdate({
        _id: projectId
    }, {
        $addToSet: {
            users: {
                $each: users
            }
        }
    }, {
        new: true
    })

    return updatedProject;
}

export const getProjectbyId = async ({projectId}) => {
    if(!projectId){
        throw new Error("ProjectId is required!")
    }

    if(!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid ProjectId")
    }

    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users')

    return project;
}