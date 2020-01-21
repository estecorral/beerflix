const lStorage = {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: key => localStorage.getItem(key),
};

const storage = (type) => {
    const types = {
        lStorage,
    };
    if (typeof(Storage) !== 'undefined') {
        return types[type];
    }
};

export default storage;