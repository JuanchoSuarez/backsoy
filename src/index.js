import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialReviews } from"./database/initReviews.js";
import { loadInitialUsers } from "./database/initUsers.js";
import { setupRelations } from "./models/relations.js";
import "./models/review.js";
import "./models/Users.js";


async function init() {

    try {
        await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established succesfully.")
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

    await  sequelize.sync({ force: true });

    setupRelations();


    await loadInitialUsers();
    await loadInitialReviews();

    app.listen(3000, () => {
        console.log('Server on port 3000');
    });
    } catch (error) {
      console.log(error); 
    }  
    
}

init();

