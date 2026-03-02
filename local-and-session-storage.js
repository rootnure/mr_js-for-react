function setToLS(key, value) {
    const previousValue = getFromLS(key) || [];
    const newValue = [...previousValue, value];
    localStorage.setItem(key, JSON.stringify(newValue));
}

function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

function removeFromLS(key) {
    localStorage.removeItem(key);
}

function handleClick() {
    const [key, name, email] = ['key', 'name', 'email'].map(fieldId => document.getElementById(fieldId).value);
    const value = { id: Date.now(), name, email }
    setToLS(key, value);
}

function handleRemove() {
    const key = document.getElementById('key2').value;
    removeFromLS(key);
}