
const KEY = import.meta.env.VITE_KEY;
const BIN_ID = import.meta.env.VITE_BIN_ID;

/* 
* Reads the JSON file inside the bins
*/
const url = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`

const getData = async () => {

    console.log("MODE: ", import.meta.env.MODE);
    console.log("BASE_URL: ", import.meta.env.BASE_URL);
    console.log("In prod ?: ", import.meta.env.PROD);
    console.log("In dev ?: ", import.meta.env.DEV);
    console.log("In SSR ?: ", import.meta.env.SSR);

    return fetch(url, {
        mode: 'cors',
        headers: {
            "X-Master-Key": `${KEY}`,
            'Accept': '*/*',
        },
    })
        .then(response => response.json())
        .catch(error => console.log('Error while fetching:', error))
}

/* 
* Write in the JSON file inside the bins
*/
// const saveData = async (items) => {
//     const response = await fetch(url, items,
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-Master-Key": KEY
//             }
//         });
//     return response.data;

// }

export { getData }