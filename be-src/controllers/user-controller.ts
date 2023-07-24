import { User, Auth } from "../models/index";
import { getSHA256ofString } from "../index";

export async function createUserAndAuthInDB(dataBody) {
    if (!dataBody) {
        throw new Error("Se requieren datos en el body");
    }
    const [newUser, created] = await User.findOrCreate({
        where: { email: dataBody.email },
        defaults: {
            full_name: dataBody.full_name,
            email: dataBody.email,
        },
    });
    const [newUserAuth, createdAuth] = await Auth.findOrCreate({
        where: { user_id: newUser.get("id") },
        defaults: {
            user_id: newUser.get("id"),
            email: dataBody.email,
            password: getSHA256ofString(dataBody.password),
        },
    });
    return newUser;
}

export async function findUserInDB(userId: number) {
    const user = await User.findByPk(userId);
    return user;
}

export async function updateUserInDB(userId: number, userData) {
    console.log({ "user-data": userData });
    if (!userId) {
        throw new Error("Id de usuario requerido");
    }
    if (!userData) {
        throw new Error("Se requieren datos en el body");
    }
    const completedUpdateData = {
        full_name: userData.full_name,
        email: userData.email,
    };

    const userUpdated = await User.update(completedUpdateData, {
        where: {
            id: userId,
        },
    });
    return completedUpdateData;
}
