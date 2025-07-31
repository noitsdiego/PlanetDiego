import { Router } from "express";
import Task from "../models/Task";

const router = Router();

// Obtener todas las tareas
router.get("/", async (_, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// Crear nueva tarea
router.post("/", async (req, res) => {
  const { text } = req.body;
  const task = await Task.create({ text });
  res.status(201).json(task);
});

// Alternar estado de tarea
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  task.done = !task.done;
  await task.save();
  res.json(task);
});

// Eliminar tarea
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: "Task deleted" });
});

export default router;
