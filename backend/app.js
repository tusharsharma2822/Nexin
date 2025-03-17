import 'dotenv/config.js';
import express from "express";
import morgan from 'morgan'
import connectToDB from './db/db.js';
import userRouter from './routes/user.routes.js';
const app = express();

connectToDB();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send("Hello, World");
})

export default app;