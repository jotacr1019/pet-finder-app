import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection";

export class User extends Model {}

User.init(
    {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "user",
    }
);
