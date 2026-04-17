import { Review } from "../models/review.js";
import { User } from "../models/Users.js";

// get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll({
            include: {
                model: User,
                as: "user",
                attributes: ["name", "username", "profileImage", "id"],
            },
        });
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// create new review
export const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        return res.json(newReview);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// update review by id
export const updateReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        await review.update(req.body);
        return res.json(review);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// delete review by id
export const deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        await review.destroy();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// get review by id
export const getReviewById = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id, {
            include: {
                model: User,
                as: "user",
                attributes: ["name", "username", "profileImage", "id"],
            },
        });
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        return res.json(review);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// get replies by review id
export const getRepliesByReviewId = async (req, res) => {
    const { id } = req.params;
    try {
        const replies = await Review.findAll({
            where: { parentReviewId: id },
            include: {
                model: User,
                as: "user",
                attributes: ["name", "username", "profileImage", "id"],
            },
            order: [["createdAt", "ASC"]],
        });
        return res.json(replies);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// get reviews by user id
export const getUserReviews = async (req, res) => {
    const id = req.params.id;
    try {
        const reviews = await Review.findAll({
            where: { userId: id },
            include: {
                model: User,
                as: "user",
                attributes: ["name", "username", "profileImage", "id"],
            },
            order: [["createdAt", "DESC"]],
        });
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// get reviews by song id
export const getReviewsBySongId = async (req, res) => {
    const { songId } = req.params;
    try {
        const reviews = await Review.findAll({
            where: { songId: songId },
            include: {
                model: User,
                as: "user",
                attributes: ["name", "username", "profileImage", "id"],
            },
            order: [["createdAt", "DESC"]],
        });
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// get user by id
export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id, {
            attributes: [
                "id", "username", "email", "name", "bio",
                "website", "location", "profileImage",
                "birthDate", "followersCount", "followingCount",
                "createdAt", "updatedAt"
            ]
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};