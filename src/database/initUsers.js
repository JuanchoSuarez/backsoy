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
    }
];



export async function loadInitialUsers(){

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