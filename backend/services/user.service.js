import userModel from "../models/user.model.js";

export const createUser = async ({email, password}) => {
    if(!email){
        throw new Error("Email is mandatory!");
    }

    if(!password){
        throw new Error("Password is mandatory!");
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password: hashedPassword
    });

    return user;
}