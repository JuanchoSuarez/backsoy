import { Router } from "express";
import { 
    getAllReviews , 
    createReview , 
    updateReview  , 
    deleteReview ,
    getReviewById ,
    getRepliesByReviewId ,
    getReviewsBySongId ,
    getUserReviews 
} from "../controller/reviews.controller.js";


const router = Router();

//get all reviews
router.get("/reviews", getAllReviews);

//create new review
router.post("/reviews", createReview);

//update review by id
router.put("/reviews/:id", updateReview);

//delete review by id
router.delete("/reviews/:id", deleteReview);

//get review by id
router.get("/reviews/:id", getReviewById);

// get reviews by user id
router.get("/users/:id/reviews", getUserReviews);

// get replies by review id
router.get("/reviews/:id/replies", getRepliesByReviewId);

// get reviews by song id
router.get("/songs/:songId/reviews", getReviewsBySongId);

export default router;

