import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req,res) => {
    console.log("Hello, World!");
})

export default app;