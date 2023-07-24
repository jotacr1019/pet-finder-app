import test from "ava";
import {
    createPetInDB,
    updatePetData,
    deletePetDataFromDB,
    getPetsOfUser,
} from "./be-src/controllers/pet-controller";
import { User, Pet } from "./be-src/models/index";

// Test double for the Pet model methods
const PetModelTestDouble = {
    create: (data) => Promise.resolve({ id: "pet123", ...data }),
    update: (data, options) => Promise.resolve([1]),
    destroy: (options) => Promise.resolve(1),
    findAll: (options) =>
        Promise.resolve([
            { id: "pet1", name: "Fluffy", status: "lost" },
            { id: "pet2", name: "Max", status: "found" },
        ]),
};

test.beforeEach(() => {
    // Replace the original Pet model methods with test doubles
    Object.assign(Pet, PetModelTestDouble);
});

test("createPetInDB should create a new pet in the database", async (t) => {
    // Set up test data
    const userId = "user123";
    const petData = {
        name: "Fluffy",
        image: "fluffy.jpg",
        lat: 123.456,
        lng: 789.012,
        status: "lost",
        id: "pet123",
    };

    // Call the function being tested
    const newPet = await createPetInDB(userId, petData);

    // Perform assertions
    t.is(newPet.get("id"), "pet123");
    t.is(newPet.get("name"), petData.name);
    // Add more assertions as needed
});

test("updatePetData should update the pet data in the database", async (t) => {
    // Set up test data
    const petData = {
        id: "pet123",
        name: "Fluffy",
        image: "fluffy.jpg",
        lat: 123.456,
        lng: 789.012,
        status: "found",
    };

    // Call the function being tested
    const updatedPet = await updatePetData(petData, 2);

    // Perform assertions
    t.deepEqual(updatedPet, petData);
    // Add more assertions as needed
});

test("deletePetDataFromDB should delete the pet from the database", async (t) => {
    // Set up test data
    const petId = "pet123";

    // Call the function being tested
    const deletedPet = await deletePetDataFromDB(petId);

    // Perform assertions
    t.is(deletedPet, 1);
    // Add more assertions as needed
});

test("getPetsOfUser should retrieve the pets of a user from the database", async (t) => {
    // Set up test data
    const userId = "user123";

    // Call the function being tested
    const userPets = await getPetsOfUser(userId);

    // Perform assertions
    t.deepEqual(userPets, [
        { id: "pet1", name: "Fluffy", status: "lost" },
        { id: "pet2", name: "Max", status: "found" },
    ]);
    // Add more assertions as needed
});
