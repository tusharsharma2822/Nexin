import mongoose from "mongoose";

const connectToDB = function () {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB Database");
    }).catch((err) => {
        console.log("Error connecting to MongoDB Database", err);
    });
}

export default connectToDB;