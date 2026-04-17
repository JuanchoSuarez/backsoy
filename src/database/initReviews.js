import { Review } from "../models/Review.js";

const COVERS = {
    blinding_lights:   "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fblinding_lights.png?alt=media&token=e4ae6131-a2f4-4ec0-acf3-ff635cc10c47",
    as_it_was:         "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fas_it_was.png?alt=media&token=ae28a2f0-ca47-4b6d-9090-e83783c9c5f2",
    until_i_found_you: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Funtil_i_found_you.png?alt=media&token=f40191d3-b784-41b4-b9bf-c547dcfe857d",
    stay:              "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Fstay.png?alt=media&token=f83d8f9b-e854-42f0-8c17-75ac25e6ffc6",
    levitating:        "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Flevitating.png?alt=media&token=1f4be56d-05a6-4e92-b96a-b9107cd9787c",
    industry_baby:     "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Ffront_images%2Findustry_baby.png?alt=media&token=653241f6-b6ff-4a70-94c8-bccab1ded5aa",
};

const initialReviews = [
    {
        content: "Muy buena canción, el ritmo es demasiado pegajoso",
        likes: 12, comments: 3, rating: 5, date: new Date(),
        username: "carlos23", userId: 1,
        songId: 1, songName: "Blinding Lights", artistName: "The Weeknd",
        songCoverImage: COVERS.blinding_lights, imageUrl: null
    },
    {
        content: "La escuché por TikTok y ahora no puedo dejar de oírla",
        likes: 9, comments: 2, rating: 4, date: new Date(),
        username: "lauramusic", userId: 2,
        songId: 1, songName: "Blinding Lights", artistName: "The Weeknd",
        songCoverImage: COVERS.blinding_lights, imageUrl: null
    },
    {
        content: "Me gusta pero siento que ya la quemaron mucho",
        likes: 6, comments: 1, rating: 3, date: new Date(),
        username: "andresgamer", userId: 3,
        songId: 1, songName: "Blinding Lights", artistName: "The Weeknd",
        songCoverImage: COVERS.blinding_lights, imageUrl: null
    },
    {
        content: "La voz del artista es brutal, muy buena producción",
        likes: 15, comments: 4, rating: 5, date: new Date(),
        username: "sofia_r", userId: 4,
        songId: 2, songName: "As It Was", artistName: "Harry Styles",
        songCoverImage: COVERS.as_it_was, imageUrl: null
    },
    {
        content: "No es mala pero esperaba algo mejor",
        likes: 5, comments: 2, rating: 3, date: new Date(),
        username: "mateodev", userId: 5,
        songId: 2, songName: "As It Was", artistName: "Harry Styles",
        songCoverImage: COVERS.as_it_was, imageUrl: null
    },
    {
        content: "Muy relajante, perfecta para escuchar estudiando",
        likes: 11, comments: 1, rating: 4, date: new Date(),
        username: "valentina_21", userId: 6,
        songId: 3, songName: "Until I Found You", artistName: "Stephen Sanchez",
        songCoverImage: COVERS.until_i_found_you, imageUrl: null
    },
    {
        content: "Tiene un estilo muy diferente, me gustó bastante",
        likes: 7, comments: 2, rating: 4, date: new Date(),
        username: "juanmusic", userId: 7,
        songId: 3, songName: "Until I Found You", artistName: "Stephen Sanchez",
        songCoverImage: COVERS.until_i_found_you, imageUrl: null
    },
    {
        content: "La escuché por recomendación y sí vale la pena",
        likes: 8, comments: 0, rating: 4, date: new Date(),
        username: "danitech", userId: 8,
        songId: 4, songName: "Stay", artistName: "The Kid LAROI",
        songCoverImage: COVERS.stay, imageUrl: null
    },
    {
        content: "Muy buena colaboración, suena demasiado bien",
        likes: 14, comments: 3, rating: 5, date: new Date(),
        username: "carlos23", userId: 1,
        songId: 4, songName: "Stay", artistName: "The Kid LAROI",
        songCoverImage: COVERS.stay, imageUrl: null
    },
    {
        content: "Al principio no me gustaba pero ahora sí me gusta mucho",
        likes: 10, comments: 1, rating: 4, date: new Date(),
        username: "lauramusic", userId: 2,
        songId: 4, songName: "Stay", artistName: "The Kid LAROI",
        songCoverImage: COVERS.stay, imageUrl: null
    },
    {
        content: "La instrumental está demasiado buena",
        likes: 6, comments: 1, rating: 4, date: new Date(),
        username: "andresgamer", userId: 3,
        songId: 5, songName: "Levitating", artistName: "Dua Lipa",
        songCoverImage: COVERS.levitating, imageUrl: null
    },
    {
        content: "Muy buena canción para escuchar en el carro",
        likes: 9, comments: 0, rating: 4, date: new Date(),
        username: "sofia_r", userId: 4,
        songId: 5, songName: "Levitating", artistName: "Dua Lipa",
        songCoverImage: COVERS.levitating, imageUrl: null
    },
    {
        content: "Siento que es una de las mejores canciones de este álbum",
        likes: 13, comments: 2, rating: 5, date: new Date(),
        username: "mateodev", userId: 5,
        songId: 5, songName: "Levitating", artistName: "Dua Lipa",
        songCoverImage: COVERS.levitating, imageUrl: null
    },
    {
        content: "No está mal pero no es de mis favoritas",
        likes: 4, comments: 0, rating: 3, date: new Date(),
        username: "valentina_21", userId: 6,
        songId: 6, songName: "Industry Baby", artistName: "Lil Nas X",
        songCoverImage: COVERS.industry_baby, imageUrl: null
    },
    {
        content: "El ritmo es demasiado bueno, se queda en la cabeza",
        likes: 12, comments: 2, rating: 5, date: new Date(),
        username: "juanmusic", userId: 7,
        songId: 6, songName: "Industry Baby", artistName: "Lil Nas X",
        songCoverImage: COVERS.industry_baby, imageUrl: null
    }
];

export async function loadInitialReviews() {
    const count = await Review.count();
    if (count === 0) {
        await Review.bulkCreate(initialReviews);
        console.log("Initial reviews loaded");
    }
}