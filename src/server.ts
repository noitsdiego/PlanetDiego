import express from "express";
import cors from "cors";
import { connectDB } from "./db";
import taskRoutes from "./routes/tasks";
import songRoutes from "./routes/songs";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando en Railway");
});

app.use("/tasks", taskRoutes);
app.use("/songs", songRoutes);

// 👇 Railway asigna el puerto en la variable de entorno PORT
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
