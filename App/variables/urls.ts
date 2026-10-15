import { API3 } from "./keys/APIs.js"

export const URL = page =>
    `https://api.themoviedb.org/3/movie/${page}?language=en-US&page=1`

export const SearchURL = text =>
    `https://api.themoviedb.org/3/search/movie?language=en-US&query=${text}&page=1&include_adult=true`

export default { URL, SearchURL }
