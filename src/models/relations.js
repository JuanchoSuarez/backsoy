import { User } from "./Users.js";
import  { Review } from "./review.js";

export function setupRelations(){
    User.hasMany(Review, {
        foreignKey: 'userId',
        as: 'reviews',
        onDelete: "cascade",
        hooks: true
    });

    Review.belongsTo(User,{
        foreiKey: 'userId',
        as: 'user',
    });
}