import express from 'express';
import dotenv from "dotenv";


dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => {
console.log('Server in http://localhost:3000');
});