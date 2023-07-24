import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const postgres_url = process.env.POSTGRESQL_URL;

export const sequelize = new Sequelize(postgres_url);
