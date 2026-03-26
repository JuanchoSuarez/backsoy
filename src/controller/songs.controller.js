import { Song } from "../models/Song.js";
import { Review } from "../models/review.js";
import { User } from "../models/Users.js";

// GET todas las canciones
export const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        return res.json(songs);
     } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// GET canción por id (con sus reviews)
export const getSongById = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findByPk(id, {
            include: {
                model: Review,
                as: "reviews",
                include: {
                    model: User,
                    as: "user",
                    attributes: ["id", "name", "username", "profileImage"],
                },
            },
        });
        if (!song) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }
        return res.json(song);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// POST crear nueva canción
export const createSong = async (req, res) => {
    try {
        const newSong = await Song.create(req.body);
        return res.status(201).json(newSong);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// PUT actualizar canción por id 
export const updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findByPk(id);
        if (!song) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }
        await song.update(req.body);
        return res.json(song);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// DELETE canción por id
export const deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findByPk(id);
        if (!song) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }
        await song.destroy();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};