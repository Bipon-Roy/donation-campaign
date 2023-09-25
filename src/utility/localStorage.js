const getStorageData = () => {
    const storedItem = localStorage.getItem("donation-details");
    if (storedItem) {
        return JSON.parse(storedItem);
    }
    return [];
};

const setStorageData = (id) => {
    const storedData = getStorageData();
    const exist = storedData.find((cardId) => cardId === id);

    if (!exist) {
        storedData.push(id);
        localStorage.setItem("donation-details", JSON.stringify(storedData));
    }
};

export { getStorageData, setStorageData };
