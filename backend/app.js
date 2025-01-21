import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectToDB from "./db/db.js";
import userRoutes from './routes/user.route.js'

connectToDB();


const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes)


app.get('/', (req,res) => {
    res.send('Hello, World!');
})



export default app;