import * as express from "express";
import * as path from "path";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import {
    createUserAndAuthInDB,
    findUserInDB,
    updateUserInDB,
} from "./controllers/user-controller";
import {
    authUserAndCreateToken,
    updateUserPasswordInDB,
    validatePassword,
} from "./controllers/auth-controller";
import {
    createPetInDB,
    updatePetData,
    deletePetDataFromDB,
    getPetsOfUser,
    getPetsAroundAZone,
    getPetById,
} from "./controllers/pet-controller";
import { sendMessageToUser } from "./lib/resend";
import { createReportInDB } from "./controllers/report-controller";
import * as dotenv from "dotenv";
dotenv.config();

let cors = require("cors");
let myApp = express();
let bodyParser = require("body-parser");
myApp.use(bodyParser.urlencoded({ extended: true }));
myApp.use(bodyParser.json());
myApp.use(express.json());
myApp.use(
    cors({
        origin: "http://127.0.0.1:8080",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

myApp.use(express.static(path.resolve(__dirname, "../../dist")));

const port = process.env.PORT || 6008;

const SECRET_KEY = process.env.SECRET_KEY;

// signup
myApp.post("/auth", async (req, res) => {
    const user = req.body;
    const { newUser, token } = await createUserAndAuthInDB(user);
    if (newUser) {
        res.status(201).json({ newUser, token });
    } else {
        res.status(500).json({
            message: "No se logró crear el usuario",
        });
    }
});

// signin - login
myApp.post("/auth/token", async (req, res) => {
    const { email, password } = req.body;
    const tokenOfUser = await authUserAndCreateToken(email, password);
    if (tokenOfUser === null) {
        res.status(401).json({
            message: "Usuario o contraseña incorrectos index",
        });
    } else {
        res.status(200).json(tokenOfUser);
    }
});

// validate password
myApp.post("/auth/password", async (req, res) => {
    const userId = req.body.userId;
    const password = req.body.password;
    const validationResponse = await validatePassword(password, userId);
    if (validationResponse) {
        res.status(200).json(validationResponse);
    } else {
        res.status(401).json({
            message: "Contraseña incorrecta",
        });
    }
});

// get users
myApp.get("/users", authMiddleware, async (req, res) => {
    if (req._user === null) {
        res.status(401).json({
            message: "Token inválido",
        });
    } else {
        const userId = req._user.id;
        const userFound = await findUserInDB(userId);
        res.status(302).json(userFound);
    }
});

// update user data
myApp.put("/users", authMiddleware, async (req, res) => {
    if (req._user === null) {
        res.status(401).json({
            message: "Token inválido",
        });
    } else {
        const userId = req._user.id;
        if (!req.body) {
            res.status(400).json({
                message: "No se ha enviado el body completo",
            });
        }
        const userUpdated = await updateUserInDB(userId, req.body);
        res.status(200).json(userUpdated);
    }
});

// update user password
myApp.put("/users/password", authMiddleware, async (req, res) => {
    if (req._user === null) {
        res.status(401).json({
            message: "Token inválido",
        });
    } else {
        const userId = req._user.id;
        if (!req.body) {
            res.status(400).json({
                message: "No se ha enviado el body completo",
            });
        } else {
            const tokenReturn = await updateUserPasswordInDB(
                userId,
                req.body.password
            );
            if (tokenReturn) {
                res.status(200).json(true);
            } else {
                res.status(500).json(false);
            }
        }
    }
});

// create pet
myApp.post("/pets", authMiddleware, async (req, res) => {
    if (req._user === null) {
        res.status(401).json({
            message: "Token inválido",
        });
    } else {
        const userId = req._user.id;
        if (!req.body) {
            res.status(400).json({
                message: "No se ha enviado el body completo",
            });
        } else {
            const petData = req.body;
            const newPet = await createPetInDB(userId, petData);
            res.status(201).json(newPet);
        }
    }
});

// get pets
myApp.get("/pets", async (req, res) => {
    if (!req.query) {
        res.status(400).json({
            message: "No se ha enviado el userId",
        });
    } else {
        const userId = parseInt(req.query.userId);
        const petsFound = await getPetsOfUser(userId);
        if (petsFound.length > 0) {
            res.status(302).json(petsFound);
        } else {
            res.status(404).json({
                message: "No se han encontrado mascotas",
            });
        }
    }
});

// get pets around
myApp.get("/pets-cerca-de", async (req, res) => {
    if (!req.query) {
        res.status(400).json({
            message: "No se ha enviado la latitud y la longitud",
        });
    } else {
        const { lat, lng } = req.query;
        const petsFoundInAlgolia = await getPetsAroundAZone(lat, lng);
        const petsFound = await getPetById(petsFoundInAlgolia);
        res.status(302).json(petsFound);
    }
});

// update pet
myApp.put("/pets", authMiddleware, async (req, res) => {
    if (req._user === null) {
        res.status(401).json({
            message: "Token inválido",
        });
    } else {
        const petData = req.body;
        const indexItem = bodyToIndex(req.body);
        const newPet = await updatePetData(petData, indexItem);
        if (newPet) {
            res.status(200).json(newPet);
        } else {
            res.status(500).json({
                message: "No se ha podido actualizar el pet",
            });
        }
    }
});

// delete pet
myApp.delete("/pets", authMiddleware, async (req, res) => {
    if (req._user === null) {
        res.status(401).json({
            message: "Token inválido",
        });
    } else {
        const petId = req.body.petId;
        const petDeleted = await deletePetDataFromDB(petId);
        if (petDeleted) {
            res.status(200).json(petDeleted);
        } else {
            res.status(500).json({
                message: "No se ha podido eliminar el pet",
            });
        }
    }
});

// create report
myApp.post("/reports", async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "No se ha enviado el body completo",
        });
    } else {
        const petId = req.body.petId;
        const reportData = req.body;
        const reportCreated = await createReportInDB(petId, reportData);
        const userFound = await findUserInDB(reportData.userId);
        const email = userFound.dataValues.email;
        if (reportCreated) {
            res.status(201).json(reportCreated);
            sendMessageToUser(reportData, email);
        } else {
            res.status(500).json({
                message: "No se ha podido crear el reporte",
            });
        }
    }
});

function bodyToIndex(body, id?) {
    const response: any = {};
    if (body.name) {
        response.name = body.name;
    }
    if (body.last_lat && body.last_lng) {
        response._geoloc = {
            lat: body.last_lat,
            lng: body.last_lng,
        };
    }
    if (body.id) {
        response.objectID = body.id;
    }
    return response;
}

function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, SECRET_KEY);
        req._user = data;
        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
        req._user = null;
        next();
    }
}

myApp.get("*", function (req, res) {
    res.status(200).sendFile(path.resolve(__dirname, "../../dist/index.html"));
});

myApp.listen(port);
console.log("API escuchando en el puerto " + port);

export { jwt };

export function getSHA256ofString(password: string) {
    return crypto.createHash("sha256").update(password).digest("hex");
}
