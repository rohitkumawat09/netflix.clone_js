export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const base_url = "https://api.themoviedb.org/3";
export const API_KEY = "2be1125fe4e5185a90a429864aa6c9e6";

export const requests = {
    originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trending: `/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    topRated: `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
    actionMovies: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
    fetchActionMovies:` /discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:` /discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99  `,
};