import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
import taskRoutes from './routes/taskRoute.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 8000;

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Aerchain Assignment!");
});

app.listen(PORT, () =>
  console.log(`Server Started and running on port ${PORT}`)
);
