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

        // songName y artistName reemplazan song y artist para evitar
        // colisión de nombres con la asociación belongsTo(Song)
        songName: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        artistName: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        songId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        parentReviewId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "reviews",
                key: "id",
            },
        },
        parentUsername: {
            type: DataTypes.STRING,
            allowNull: true,
         },

         songCoverImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: true,
    }
);