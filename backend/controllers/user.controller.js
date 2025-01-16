import userModel from '../models/user.model.js';
import * as userService from '../services/user.service.js';
import { validationResult } from 'express-validator';

export const createUserController = async (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() });
    }

    try{
        const user = await userService.createUser(req.body);    
        res.status(201).send(user);
    }catch(error){
        res.status(400).send(error.message);
    }
}