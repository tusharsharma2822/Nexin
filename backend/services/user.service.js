import userModel from "../models/user.model.js";

export const createUser = async ({email, password}) => {
    if(!email) {
        throw new Error("Email is required!");
    }

    if(!password) {
        throw new Error("Password is required");
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password: hashedPassword
    })

    return user;
}

export const getAllUsers = async ({userId}) => {
    const users = await userModel.findOne({
        _id: { $ne: userId }
    });
    return users;
}