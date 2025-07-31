import express from "express";
import cors from "cors";
import { connectDB } from "./db";
import taskRoutes from "./routes/tasks";
import songRoutes from "./routes/songs";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/songs", songRoutes);

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
