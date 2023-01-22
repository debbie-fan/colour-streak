async function getColourData(colour) {
    // return a promise
    return fetch(`https://www.thecolorapi.com/id?rgb=(${colour})`)
        // once promise is received, get json data as a promise
        .then((response) => response.json());
}

export default getColourData;