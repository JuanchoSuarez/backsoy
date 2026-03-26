import { Router } from "express";
import { 
    getAllReviews , 
    createReview , 
    updateReview  , 
    deleteReview ,
    getReviewById ,
    getRepliesByReviewId
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

router.get("/reviews/:id/replies", getRepliesByReviewId);

export default router;

