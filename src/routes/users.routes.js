import { Router } from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/users.controller.js";
import {
    getUserById,
    getUserReviews
} from "../controller/reviews.controller.js";

const router = Router();

// get all users
router.get("/users", getUsers);

// get user by id  ← NUEVO
router.get("/users/:id", getUserById);

// get reviews by user id  ← NUEVO
router.get("/users/:id/reviews", getUserReviews);

// create new user
router.post("/users", createUser);

// update user by id
router.put("/users/:id", updateUser);

// delete user by id
router.delete("/users/:id", deleteUser);

export default router;