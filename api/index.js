import express from 'express';
import dotenv from "dotenv";
import db from "./database/configdb.js";
import User from "./models/User.js";
import userRoutes from './routes/user.route.js'; // Correto
import tokenRoutes from './routes/token.route.js'; // Ajustado para consistência

dotenv.config();

db.connect();

const app = express();


app.use(express.json());
app.use("/users", userRoutes);
app.use("/", tokenRoutes);
app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => {
    console.log('Server in http://localhost:3000');
});