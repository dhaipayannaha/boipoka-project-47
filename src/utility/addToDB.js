const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storeBookData = JSON.parse(storedBookSTR);
        return storeBookData
    }else{
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)){
        alert('this id already exist')
    }else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
}

export {addToStoredDB, getStoredBook}