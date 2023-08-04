const BASE_URL = 'https://63f2d751f28929a9df605107.mockapi.io/nttp/';

function mapUrl(url:string) {
    return BASE_URL + url;
}

export {
    BASE_URL,
    mapUrl
}