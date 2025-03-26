import express from "express";
import 'dotenv/config.js';
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "./db/db.js";
import userRoutes from './routes/user.routes.js';

connectToDB();

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello, world!");
}) 

app.use('/users', userRoutes)

export default app;