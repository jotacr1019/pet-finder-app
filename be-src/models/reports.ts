import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection";

export class Report extends Model {}

Report.init(
    {
        reporter_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "report",
    }
);
