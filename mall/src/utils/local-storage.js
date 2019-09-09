export const getLocalStorage = (...args) => {
    var store = {};
    args.forEach(arg => {
        store[arg] = window.localStorage.getItem(arg);
    });
    return store;
}

export const setStorage = data => {
    Object.keys(data).forEach(key => {
        var value = data[key];
        window.localStorage.setItem(key, value);
    });
}