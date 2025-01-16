import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6, "Email must contain atleast 6 letters"],
        maxLength: [50, "Email must contain maxium 50 letters"]
    },
    password:{
        type: String,
        select: false,
    }
})

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = function() {
    return jwt.sign(
        {email: this.email},
        process.env.JWT_SECRET,
        { expiresIn: '24h'}
    );
}

const User = mongoose.model('user',userSchema);

export default User;