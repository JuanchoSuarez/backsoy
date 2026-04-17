import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Song = sequelize.define(
    "songs",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        album: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        coverImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
},

    }
);
