import 'dotenv/config.js';
import morgan from 'morgan'
import express from "express";
import connectToDB from './db/db.js';
import userRoutes from "./routes/user.routes.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

connectToDB()

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Hello, World");
})

export default app;