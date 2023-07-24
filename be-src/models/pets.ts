import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection";

export class Pet extends Model {}

Pet.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // crear location
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_lat: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        last_lng: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "pet",
    }
);
