import { Router } from "express";
import Song from "../models/Song";

const router = Router();

// Obtener todas las canciones
router.get("/", async (_, res) => {
  const songs = await Song.find().sort({ createdAt: -1 });
  res.json(songs);
});

// Agregar canción
router.post("/", async (req, res) => {
  const song = await Song.create(req.body);
  res.status(201).json(song);
});

// Eliminar canción
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Song.findByIdAndDelete(id);
  res.json({ message: "Song deleted" });
});

export default router;
