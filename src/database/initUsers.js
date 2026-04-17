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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Fnieve_b%26n.png?alt=media&token=75553d0a-c983-41ed-8ba3-97314278fc02",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Fchinita.png?alt=media&token=891362f4-1077-4434-912f-fa8012ba57d4",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Fcuatrimoto.png?alt=media&token=186cc6cd-e3c0-42f1-b7b5-dc87a6a2c4ef",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Fatardecer.png?alt=media&token=5a4ad116-d43a-4a14-9438-103100ea9990",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Fojos_gatos.png?alt=media&token=a6eb3cdc-2bf7-4bac-b9f6-2a647a956878",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Foscuro.png?alt=media&token=c02b7fdb-9fe2-460a-ae79-7d3ab557f429",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Ftabla.png?alt=media&token=d6459e87-0b6e-4a9b-8646-abb4223bd207",
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
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Ftaxi.png?alt=media&token=010844a6-128b-4a48-b6c1-ef61934b7483",
        birthDate: new Date("2002-01-18"),
        followersCount: 180,
        followingCount: 95
    },
    {
        username: "juanito33",
        email: "juanito33@gmail.com",
        password: "juanito33",
        name: "Juan",
        bio: "Usuario de prueba",
        website: null,
        location: "Bogotá",
        profileImage: "https://firebasestorage.googleapis.com/v0/b/soy2-facbf.firebasestorage.app/o/profiles%2Fprofile_images%2Fx.png?alt=media&token=ea5c6747-9370-4db0-a62b-c0493fa962a1",
        birthDate: new Date("2000-01-01"),
        followersCount: 0,
        followingCount: 0
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