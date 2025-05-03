import express from 'express';
import dotenv from "dotenv";
import db from "./database/configdb.js";
import User from "./models/User.js";


dotenv.config();

db.connect();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => {
console.log('Server in http://localhost:3000');
});