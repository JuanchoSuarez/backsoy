import { User } from "./Users.js";
import { Review } from "./review.js";
import { Follower } from "./Follower.js";
import { Song } from "./Song.js";

export function setupRelations() {
    User.hasMany(Review, {
        foreignKey: "userId",
        as: "reviews",
        onDelete: "cascade",
        hooks: true,
    });

    Review.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    Song.hasMany(Review, {
        foreignKey: "songId",
        as: "reviews",
        onDelete: "cascade",
        hooks: true,
    });

    Review.belongsTo(Song, {
        foreignKey: "songId",
        as: "song",
    });

    User.belongsToMany(User, {
        through: "followers",
        as: "followingList",
        foreignKey: "followerId",
        otherKey: "followingId",
    });

    User.belongsToMany(User, {
        through: "followers",
        as: "followersList",
        foreignKey: "followingId",
        otherKey: "followerId",
    });

    Review.hasMany(Review, {
        foreignKey: "parentReviewId",
        as: "replies",
        onDelete: "cascade",
        hooks: true,
    });

    Review.belongsTo(Review, {
        foreignKey: "parentReviewId",
        as: "parentReview",
    });
}