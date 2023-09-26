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
    console.log(exist);
    console.log(storedData);
    if (exist) {
        swal("Limit Exceeded!!!", "Please donate for another one", "error");
    } else {
        storedData.push(id);
        localStorage.setItem("donation-details", JSON.stringify(storedData));
        swal("Thanks!", "You have donated successfully", "success");
    }
};

export { getStorageData, setStorageData };
