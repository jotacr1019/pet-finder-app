import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection";

export class Auth extends Model {}

Auth.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "auth",
    }
);
