import { User } from "../models/Users.js";

const initialUsers = [
    {
        username: "carlos23", 
        email: "carlos23@gmail.com",
        password: "123456",
        name: "Carlos Mendoza",
        bio: "Me gusta la música pop y electrónica",
        website: "https://carlosmusic.com",
        location: "Colombia",
        profileImage: null,
        birthDate: new Date("2002-05-14"),
        followersCount: 120,
        followingCount: 85
    },
    {
        username: "lauramusic",
        email: "lauramusic@gmail.com",
        password: "123456",
        name: "Laura Ramírez",
        bio: "Escucho música todo el día 🎧",
        website: "https://lauramusicblog.com",
        location: "Bogotá",
        profileImage: null,
        birthDate: new Date("2003-09-21"),
        followersCount: 95,
        followingCount: 110
    },
    {
        username: "andresgamer",
        email: "andresgamer@gmail.com",
        password: "123456",
        name: "Andrés Torres",
        bio: "Gaming + música = vida",
        website: "https://andresdev.com",
        location: "Medellín",
        profileImage: null,
        birthDate: new Date("2001-12-03"),
        followersCount: 60,
        followingCount: 45
    },
    {
        username: "sofia_r",
        email: "sofia.ramirez@gmail.com",
        password: "123456",
        name: "Sofía Ramírez",
        bio: "Fan del indie y el jazz 🎷",
        website: null,
        location: "Cali",
        profileImage: null,
        birthDate: new Date("2000-03-08"),
        followersCount: 200,
        followingCount: 150
    },
    {
        username: "mateodev",
        email: "mateodev@gmail.com",
        password: "123456",
        name: "Mateo Gómez",
        bio: "Desarrollador y melómano",
        website: "https://mateogomez.dev",
        location: "Barranquilla",
        profileImage: null,
        birthDate: new Date("2001-07-22"),
        followersCount: 45,
        followingCount: 30
    },
    {
        username: "valentina_21",
        email: "valentina21@gmail.com",
        password: "123456",
        name: "Valentina Pérez",
        bio: "La música es mi terapia 🎵",
        website: null,
        location: "Bogotá",
        profileImage: null,
        birthDate: new Date("2003-11-15"),
        followersCount: 310,
        followingCount: 220
    },
    {
        username: "juanmusic",
        email: "juanmusic@gmail.com",
        password: "123456",
        name: "Juan Felipe Ruiz",
        bio: "Rock, metal y café ☕",
        website: null,
        location: "Medellín",
        profileImage: null,
        birthDate: new Date("1999-06-30"),
        followersCount: 75,
        followingCount: 60
    },
    {
        username: "danitech",
        email: "danitech@gmail.com",
        password: "123456",
        name: "Daniela Moreno",
        bio: "Ingeniera de día, DJ de noche 🎧",
        website: "https://danitech.co",
        location: "Pereira",
        profileImage: null,
        birthDate: new Date("2002-01-18"),
        followersCount: 180,
        followingCount: 95
    }
];


export async function loadInitialUsers() {
    try {
        const count = await User.count();
        if (count === 0) {
            await User.bulkCreate(initialUsers);
            console.log("Initial users loaded");
        } else {
            console.log("Initial users already loaded");
        }
    } catch (error) {
        console.log(error);
    }
}