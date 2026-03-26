import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define(
    "reviews",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        comments: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        song: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        parentReviewId: {
            type: DataTypes.INTEGER,
            allowNull: true, //Null -> Review padre 
            references: {
                model: "reviews",
                key: "id",
            },
        },
    },
    {
        timestamps: true,
    }
);