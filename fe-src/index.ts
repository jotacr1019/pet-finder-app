import { initRouter } from "./router";
const STORAGE_KEY = "pet-finder-state";

(function () {
    const containerEl = document.querySelector(".principal-container");
    initRouter(containerEl);

    const readFromStorage = (storageKey) => {
        const localStorageItem = localStorage.getItem(storageKey);
        const sessionStorageItem = sessionStorage.getItem(storageKey);
        const itemValue = localStorageItem ?? sessionStorageItem;
        if (localStorageItem !== sessionStorageItem) {
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
