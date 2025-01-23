import jwt from 'jsonwebtoken';
import redisClient from '../services/redis.service.js';

export const authUser = async (req,res,next) => {
    try{
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(401).send({error: 'Please authenticate the user'});
        }

        const isBlackListed = await redisClient.get(token);

        if(isBlackListed){
            res.cookie('token', '');
            return res.status(400).send({ error: 'Unauthorized User'});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).send({
            error: 'Please Authenticate the user'
        })
    }
}