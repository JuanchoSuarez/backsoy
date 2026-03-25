import { DataTypes, DATE } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true,
        },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        bio: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        website: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            isUrl: true,
        },
        },

        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        followersCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        followingCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }
)