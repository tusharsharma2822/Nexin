import projectModel from '../models/project.model.js';
import mongoose from 'mongoose';

export const createProject = async ({name, userId}) => {
    if(!name){
        throw new Error('Name is required');
    }

    if(!userId){
        throw new Error('UserId is required');
    }

    const project = await projectModel.create({
        name,
        users: [ userId ]
    })

    return project;
}

export const getAllProjectByUserId = async ({userId}) => {
    if(!userId){
        throw new Error('UserId is required');
    }

    const allUsersProject = await projectModel.find({
        users: userId
    })

    return allUsersProject;
}

export const addUsersToProject = async ({ projectId, users, userId }) => {

    if (!projectId) {
        throw new Error("projectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    if (!users) {
        throw new Error("users are required")
    }

    if (!Array.isArray(users) || users.some(userId => !mongoose.Types.ObjectId.isValid(userId))) {
        throw new Error("Invalid userId(s) in users array")
    }

    if (!userId) {
        throw new Error("userId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId")
    }


    const project = await projectModel.findOne({
        _id: projectId,
        users: userId
    })

    console.log(project)

    if (!project) {
        throw new Error("User not belong to this project")
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

    return updatedProject



}
