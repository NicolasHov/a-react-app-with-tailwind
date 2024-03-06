
const KEY = import.meta.env.VITE_KEY;
const BIN_ID = import.meta.env.VITE_BIN_ID;
const API_URL = import.meta.env.VITE_API_URL;

/* 
* Reads the JSON file inside the bins
*/
const url = `${API_URL}/${BIN_ID}/latest`

const getData = async () => {
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