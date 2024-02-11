export var uri;
if (location.hostname === "0.0.0.0") {
        uri = "http://0.0.0.0:8197";
} else if (location.hostname === "127.0.0.1") {
        uri = "http://127.0.0.1:8197";
} else {
        uri = "https://flask2.nighthawkcodingsociety.com";
}

export const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
};