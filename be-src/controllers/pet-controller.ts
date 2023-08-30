import { Pet } from "../models/index";
import { index } from "../lib/algolia";

export async function createPetInDB(userId, petData) {
    if (!petData) {
        throw new Error("Se requieren datos en el body");
    }
    try {
        const newPet = await Pet.create({
            name: petData.name,
            imageUrl: petData.imageUrl,
            last_lat: petData.last_lat,
            last_lng: petData.last_lng,
            location: petData.location,
            status: petData.status,
            userId: userId,
        });
        const newPetData = newPet.dataValues;
        const algoliaRes = await index.saveObject({
            objectID: newPetData.id,
            name: newPetData.name,
            _geoloc: {
                lat: newPetData.last_lat,
                lng: newPetData.last_lng,
            },
        });
        return newPet;
    } catch (error) {
        console.error(error);
        throw error("Error al crear la mascota");
    }
}

export async function updatePetData(petData, indexItem) {
    if (!petData) {
        throw new Error("Se requieren datos en el body");
    }
    const completedUpdateData = {
        name: petData.name,
        location: petData.location,
        imageUrl: petData.imageUrl,
        last_lat: petData.last_lat,
        last_lng: petData.last_lng,
        status: petData.status,
    };
    const updatedPet = await Pet.update(completedUpdateData, {
        where: {
            id: petData.id,
        },
    }).catch((err) => {
        console.error(err);
        throw err;
    });
    const algoliaRes = await index
        .partialUpdateObject(indexItem)
        .catch((err) => {
            console.error(err);
            throw err;
        });
    return completedUpdateData;
}

export async function deletePetDataFromDB(petId) {
    if (!petId) {
        throw new Error("Se requiere el id de la mascota");
    }
    const deletedPet = await Pet.destroy({
        where: {
            id: petId,
        },
    });

    await index.deleteObject(petId.toString());

    return deletedPet;
}

export async function getPetsOfUser(userId) {
    if (!userId) {
        throw new Error("Se requiere el id del usuario");
    }
    const pets = await Pet.findAll({
        where: {
            userId: userId,
            status: "missing",
        },
    });
    return pets;
}

export async function getPetsAroundAZone(lat, lng) {
    if (!lat || !lng) {
        throw new Error("Se requiere latitud y longitud");
    }
    const { hits } = await index.search("", {
        aroundLatLng: [lat, lng].join(","),
        aroundRadius: 10000,
    });
    return hits;
}

export async function getPetById(pets) {
    if (!pets) {
        throw new Error("Se requieren datos en el body");
    }

    const petPromises = pets.map(async (pet) => {
        const petFound = await Pet.findOne({
            where: {
                id: pet.objectID,
            },
        });
        return petFound ? petFound.dataValues : null;
    });

    const petsFound = await Promise.all(petPromises);
    const FinalPets = petsFound.filter((pet) => pet !== null);
    return FinalPets;
}

export async function getDataOfPet(petId) {
    if (!petId) {
        throw new Error("Se requiere el id de la mascota");
    }
    const petFound = await Pet.findByPk(petId);
    return petFound;
}
