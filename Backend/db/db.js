import mongoose from "mongoose";


function connect() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB Database");
        })
        .catch(err => {
            console.log(err);
        })
}

export default connect;