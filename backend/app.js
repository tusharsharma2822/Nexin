import 'dotenv/config.js';
import express from "express";
import connectToDB from "./db/db.js";
const app = express();

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;