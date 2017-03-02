export const getMeets = (data) => {
    if (localStorage.getItem(data)) {
        return {
            [data]: JSON.parse(localStorage.getItem(data))
        }
    } else {
        return [];
    }
};

export const saveMeets = (data) => {
    if (localStorage.getItem(data.id)) {
        const Arr = JSON.parse(localStorage.getItem(data.id));
        const number = Arr.length;
        const newData = {id: number, name: data.name, description: data.description};
        Arr.push(newData);
        localStorage.setItem(data.id, JSON.stringify(Arr));
    } else {
        const Arr = [];
        const number = Arr.length;
        const newData = {id: number, name: data.name, description: data.description};
        Arr.push(newData);
        localStorage.setItem(data.id, JSON.stringify(Arr));
    }
    return {success: true}
};

export const deleteMeets = (data) => {
    const Arr = JSON.parse(localStorage.getItem(data.id));
};