import { Auth } from "../models/index";
import { getSHA256ofString } from "../index";
import { jwt } from "../index";
import * as dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export async function authUserAndCreateToken(email: string, password: string) {
    if (!email || !password) {
        throw new Error("Se requieren datos en el body");
    }
    const hashedPassword = getSHA256ofString(password);
    const userFound = await Auth.findOne({
        where: {
            email: email,
            password: hashedPassword,
        },
    });
    if (userFound) {
        const token = jwt.sign({ id: userFound.get("id") }, SECRET_KEY);
        return token;
    } else {
        return null;
    }
}

export async function updateUserPasswordInDB(
    userId: number,
    newPassword: string
) {
    if (!userId) {
        throw new Error("Id de usuario requerido");
    }
    if (!newPassword) {
        throw new Error("Se requiere una contraseña");
    }
    const completedUpdatePassword = {
        newHashedPassword: getSHA256ofString(newPassword),
    };
    const userUpdated = await Auth.update(completedUpdatePassword, {
        where: {
            id: userId,
        },
    });
    if (userUpdated) {
        const token = jwt.sign({ id: userId }, SECRET_KEY);
        return token;
    } else {
        return null;
    }
    // return completedUpdatePassword;
}

export async function validatePassword(password, userId) {
    if (!password) {
        throw new Error("Se requiere la contraseña");
    }
    const hashedPassword = getSHA256ofString(password);
    const userFound = await Auth.findOne({
        where: {
            password: hashedPassword,
            user_id: userId,
        },
    });
    if (userFound) {
        return true;
    } else {
        return false;
    }
}
