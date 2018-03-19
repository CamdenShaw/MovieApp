import { API3 } from "./keys/APIs"

const URL = page =>
    `https://api.themoviedb.org/3/movie/${page}?api_key=${API3}&language=en-US&page=1`

const SearchURL = text =>
    `https://api.themoviedb.org/3/search/movie?api_key=${API3}&language=en-US&query=${text}&page=1&include_adult=true`

export { URL, SearchURL }
