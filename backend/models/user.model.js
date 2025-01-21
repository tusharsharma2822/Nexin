import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,  
        trim: true,
        minLength: [6, 'email must contain atleast 6 characters'],
        maxLength: [50, 'email must not be exceeded from 50 characters']  
    },
    password: {
        type: String,
        select: false,
    }
})

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);   
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = async function () {
    return jwt.sign({email: this.email},process.env.JWT_SECRET);
}

const User = mongoose.model('user', userSchema);

export default User;