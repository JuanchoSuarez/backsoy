import { Song } from "../models/Song.js";

const initialSongs = [
    {
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        genre: "Synth-pop",
        releaseYear: 2019,
        duration: "3:20",
        coverImage: null,
    },
    {
        name: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        genre: "Pop",
        releaseYear: 2022,
        duration: "2:37",
        coverImage: null,
    },
    {
        name: "Until I Found You",
        artist: "Stephen Sanchez",
        album: "Until I Found You",
        genre: "Indie Pop",
        releaseYear: 2022,
        duration: "2:42",
        coverImage: null,
    },
    {
        name: "Stay",
        artist: "The Kid LAROI",
        album: "F*CK LOVE 3: OVER YOU",
        genre: "Pop Rap",
        releaseYear: 2021,
        duration: "2:21",
        coverImage: null,
    },
    {
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        genre: "Nu-disco",
        releaseYear: 2020,
        duration: "3:23",
        coverImage: null,
    },
    {
        name: "Industry Baby",
        artist: "Lil Nas X",
        album: "MONTERO",
        genre: "Hip-hop",
        releaseYear: 2021,
        duration: "3:32",
        coverImage: null,
    },
    {
        name: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        genre: "Indie Pop",
        releaseYear: 2020,
        duration: "3:59",
        coverImage: null,
    },
    {
        name: "Bad Habit",
        artist: "Steve Lacy",
        album: "Gemini Rights",
        genre: "R&B",
        releaseYear: 2022,
        duration: "3:52",
        coverImage: null,
    },
];

export async function loadInitialSongs() {
    try {
        const count = await Song.count();
        if (count === 0) {
            await Song.bulkCreate(initialSongs);
            console.log("Initial songs loaded");
        } else {
            console.log("Initial songs already loaded");
        }
    } catch (error) {
        console.log(error);
    }
}
