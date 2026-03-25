import { Review } from "../models/review.js";

const initialReviews= [
    {
        content: "Muy buena canción, el ritmo es demasiado pegajoso",
        likes: 12,
        comments: 3,
        rating: 5,
        date: new Date(),
        username: "Carlos23",
        userId: 1,
        song: "Blinding Lights",
        artist: "The Weeknd",
        imageUrl: null
    },
    {
        content: "La escuché por TikTok y ahora no puedo dejar de oírla",
        likes: 9,
        comments: 2,
        rating: 4,
        date: new Date(),
        username: "LauraMusic",
        userId: 2,
        song: "Blinding Lights",
        artist: "The Weeknd",
        imageUrl: null
    },
    {
        content: "Me gusta pero siento que ya la quemaron mucho",
        likes: 6,
        comments: 1,
        rating: 3,
        date: new Date(),
        username: "AndresGamer",
        userId: 3,
        song: "Blinding Lights",
        artist: "The Weeknd",
        imageUrl: null
    },
    {
        content: "La voz del artista es brutal, muy buena producción",
        likes: 15,
        comments: 4,
        rating: 5,
        date: new Date(),
        username: "SofiaR",
        userId: 1,
        song: "As It Was",
        artist: "Harry Styles",
        imageUrl: null
    },
    {
        content: "No es mala pero esperaba algo mejor",
        likes: 5,
        comments: 2,
        rating: 3,
        date: new Date(),
        username: "MateoDev",
        userId: 2,
        song: "As It Was",
        artist: "Harry Styles",
        imageUrl: null
    },
    {
        content: "Muy relajante, perfecta para escuchar estudiando",
        likes: 11,
        comments: 1,
        rating: 4,
        date: new Date(),
        username: "Valentina_21",
        userId: 3,
        song: "Until I Found You",
        artist: "Stephen Sanchez",
        imageUrl: null
    },
    {
        content: "Tiene un estilo muy diferente, me gustó bastante",
        likes: 7,
        comments: 2,
        rating: 4,
        date: new Date(),
        username: "JuanMusic",
        userId: 1,
        song: "Until I Found You",
        artist: "Stephen Sanchez",
        imageUrl: null
    },
    {
        content: "La escuché por recomendación y sí vale la pena",
        likes: 8,
        comments: 0,
        rating: 4,
        date: new Date(),
        username: "DaniTech",
        userId: 2,
        song: "Stay",
        artist: "The Kid LAROI",
        imageUrl: null
    },
    {
        content: "Muy buena colaboración, suena demasiado bien",
        likes: 14,
        comments: 3,
        rating: 5,
        date: new Date(),
        username: "Camilo_07",
        userId: 3,
        song: "Stay",
        artist: "The Kid LAROI",
        imageUrl: null
    },
    {
        content: "Al principio no me gustaba pero ahora sí me gusta mucho",
        likes: 10,
        comments: 1,
        rating: 4,
        date: new Date(),
        username: "PaulaMusic",
        userId: 1,
        song: "Stay",
        artist: "The Kid LAROI",
        imageUrl: null
    },
    {
        content: "La instrumental está demasiado buena",
        likes: 6,
        comments: 1,
        rating: 4,
        date: new Date(),
        username: "JorgeDev",
        userId: 2,
        song: "Levitating",
        artist: "Dua Lipa",
        imageUrl: null
    },
    {
        content: "Muy buena canción para escuchar en el carro",
        likes: 9,
        comments: 0,
        rating: 4,
        date: new Date(),
        username: "Sebastian12",
        userId: 3,
        song: "Levitating",
        artist: "Dua Lipa",
        imageUrl: null
    },
    {
        content: "Siento que es una de las mejores canciones de este álbum",
        likes: 13,
        comments: 2,
        rating: 5,
        date: new Date(),
        username: "NataliaM",
        userId: 1,
        song: "Levitating",
        artist: "Dua Lipa",
        imageUrl: null
    },
    {
        content: "No está mal pero no es de mis favoritas",
        likes: 4,
        comments: 0,
        rating: 3,
        date: new Date(),
        username: "AlexCode",
        userId: 2,
        song: "Industry Baby",
        artist: "Lil Nas X",
        imageUrl: null
    },
    {
        content: "El ritmo es demasiado bueno, se queda en la cabeza",
        likes: 12,
        comments: 2,
        rating: 5,
        date: new Date(),
        username: "KevinMusic",
        userId: 3,
        song: "Industry Baby",
        artist: "Lil Nas X",
        imageUrl: null
    }
];

export async function loadInitialReviews(){

    const count = await Review.count();

    if (count === 0) {
        await Review.bulkCreate(initialReviews);
        console.log("Initial reviews loaded");
    }
}