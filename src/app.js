import express from "express"
import userRoutes from "./routes/users.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import songRoutes from "./routes/song.routes.js";

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(reviewRoutes);
app.use(songRoutes);

export default app;
