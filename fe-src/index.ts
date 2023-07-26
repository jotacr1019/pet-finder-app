import { initRouter } from "./router";

(function () {
    console.log("hola desde index");
    const containerEl = document.querySelector(".principal-container");
    initRouter(containerEl);
    const STORAGE_KEY = "pet-finder-state";

    const readFromStorage = (storageKey) => {
        const localStorageItem = localStorage.getItem(storageKey);
        const sessionStorageItem = sessionStorage.getItem(storageKey);
        const itemValue = localStorageItem ?? sessionStorageItem;
        if (localStorageItem !== sessionStorageItem) {
            console.log("dentro del if de readFromStorage");
            writeToStorage(storageKey, itemValue);
        }
        return itemValue;
    };

    const writeToStorage = (storageKey, value) => {
        localStorage.setItem(storageKey, value);
        sessionStorage.setItem(storageKey, value);
    };

    const item = readFromStorage(STORAGE_KEY);

    window.addEventListener("beforeunload", (e) => {
        localStorage.removeItem(STORAGE_KEY);
    });
})();
