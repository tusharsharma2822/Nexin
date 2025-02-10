import projectModel from '../models/project.model.js';

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

export const addUsersToProject = async ({projectId, users}) => {
    if(!projectId){
        throw new Error('Project Id is not required!')
    }

    if(!users){
        throw new Error("users are required")
    }

    
}

export const getProjectById = async ({ projectId }) => {
    if(!projectId){
        throw new Error("Project Id is required");
    }

    if(!mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("Invalid Project")
    }

    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users')

    return project;
}