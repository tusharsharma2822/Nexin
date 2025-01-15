import mongoose from "mongoose";

function connectToDatabase () {
    mongoose.connect(process.env.MongoDB_URI).then(() => {
        console.log("Connected to the MongoDB Database");
    }).catch(error => {
        console.log(error);
    })
}

export default connectToDatabase;