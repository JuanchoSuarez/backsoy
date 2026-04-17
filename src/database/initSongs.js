import { Song } from "../models/song.js";

const initialSongs = [
    {
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        genre: "Synth-pop",
        releaseYear: 2019,
        duration: "3:20",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fblinding_lights.png?alt=media&token=e4ae6131-a2f4-4ec0-acf3-ff635cc10c47",
        description: "Sencillo del álbum After Hours de The Weeknd. Con una producción synth-pop y ritmos de los 80s, la canción narra la desesperación de alguien que maneja ebrio de noche hacia su ex pareja. Fue un éxito mundial y se convirtió en una de las canciones más escuchadas de la historia en Spotify."
    },
    {
        name: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        genre: "Pop",
        releaseYear: 2022,
        duration: "2:37",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fas_it_was.png?alt=media&token=ae28a2f0-ca47-4b6d-9090-e83783c9c5f2",
        description: "Primer sencillo del tercer álbum de Harry Styles, Harry's House. La canción habla sobre los cambios inevitables de la vida y la dificultad de volver a como eran las cosas antes. Debutó en el número uno en múltiples países y fue uno de los temas más exitosos de 2022."
    },
    {
        name: "Until I Found You",
        artist: "Stephen Sanchez",
        album: "Until I Found You",
        genre: "Indie Pop",
        releaseYear: 2022,
        duration: "2:42",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Funtil_i_found_you.png?alt=media&token=f40191d3-b784-41b4-b9bf-c547dcfe857d",
        description: "Canción del artista Stephen Sanchez que ganó popularidad viral en TikTok. Con un estilo retro inspirado en el soul de los años 60, narra el descubrimiento del amor verdadero. La versión con Em Beihold amplificó aún más su alcance global."
    },
    {
        name: "Stay",
        artist: "The Kid LAROI",
        album: "F*CK LOVE 3: OVER YOU",
        genre: "Pop Rap",
        releaseYear: 2021,
        duration: "2:21",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fstay.png?alt=media&token=f83d8f9b-e854-42f0-8c17-75ac25e6ffc6",
        description: "Colaboración entre The Kid LAROI y Justin Bieber que se convirtió en uno de los mayores éxitos del verano de 2021. La canción mezcla pop y rap sobre el ruego de que una pareja no se vaya. Alcanzó el número uno en más de 40 países."
    },
    {
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        genre: "Nu-disco",
        releaseYear: 2020,
        duration: "3:23",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Flevitating.png?alt=media&token=1f4be56d-05a6-4e92-b96a-b9107cd9787c",
        description: "Uno de los sencillos principales del álbum Future Nostalgia de Dua Lipa. Con una energía disco y funk, la canción habla sobre sentirse en las nubes al estar enamorada. La colaboración con DaBaby en el remix la catapultó a los primeros puestos de los charts globales."
    },
    {
        name: "Industry Baby",
        artist: "Lil Nas X",
        album: "MONTERO",
        genre: "Hip-hop",
        releaseYear: 2021,
        duration: "3:32",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Findustry_baby.png?alt=media&token=653241f6-b6ff-4a70-94c8-bccab1ded5aa",
        description: "Colaboración de Lil Nas X con Jack Harlow producida por Kanye West y Take A Daytrip. La canción es una declaración de confianza y éxito, respondiendo a quienes dudaban de su carrera. Su videoclip polémico y su producción de brass la convirtieron en un fenómeno cultural."
    },
    {
        name: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        genre: "Indie Pop",
        releaseYear: 2020,
        duration: "3:59",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fheat_waves.png?alt=media&token=762605d7-5bee-4566-a4f2-e528b5706c4f",
        description: "Canción del álbum Dreamland de Glass Animals que se volvió viral en TikTok años después de su lanzamiento. Habla sobre extrañar a alguien y los recuerdos que aparecen en los momentos más inesperados. Pasó 59 semanas en el Billboard Hot 100, un récord histórico para una canción indie."
    },
    {
        name: "Bad Habit",
        artist: "Steve Lacy",
        album: "Gemini Rights",
        genre: "R&B",
        releaseYear: 2022,
        duration: "3:52",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fbad_habit.png?alt=media&token=68ca0399-c39c-40d7-b4be-5c7a9e60e419",
        description: "Sencillo del álbum Gemini Rights de Steve Lacy. La canción mezcla R&B con toques de rock alternativo y habla sobre arrepentirse de no haber expresado los sentimientos hacia alguien a tiempo. Fue el primer número uno de Steve Lacy en el Billboard Hot 100."
    }
];

export async function loadInitialSongs() {
    const count = await Song.count();
    if (count === 0) {
        await Song.bulkCreate(initialSongs);
        console.log("Initial songs loaded");
    }
}