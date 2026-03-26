import { Router } from "express";
import {
    getAllSongs,
    getSongById,
    createSong,
    updateSong,
    deleteSong,
} from "../controller/songs.controller.js";

const router = Router();

// GET todas las canciones
router.get("/songs", getAllSongs);
// GET canción por id (con sus reviews)
router.get("/songs/:id", getSongById);
// POST crear nueva canción
router.post("/songs", createSong);
// PUT actualizar canción por id
router.put("/songs/:id", updateSong);
// DELETE eliminar canción por id
router.delete("/songs/:id", deleteSong);

export default router;