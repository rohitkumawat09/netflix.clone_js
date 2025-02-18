
import { IMAGE_URL, base_url, API_KEY, requests } from "./data.js";

const original = document.querySelector("#Netflix");
const trending = document.querySelector("#trending");
const topRated = document.querySelector("#topRated");
const actionMovies = document.querySelector("#ActionMovie");
const backgroundImage = document.querySelector(".backgroundImage");
const content = document.querySelector(".content")

const data = [];

async function fetchDataFromURL(value) {
    const response = await fetch(base_url + value);
    const result = await response.json();
    console.log(result.results);
    return result.results;
}

for (let i in requests) {
    const categoryData = await fetchDataFromURL(requests[i]);
    data.push(categoryData);
}
console.log(data);

getRandomImage()

// function createMovieCard(movie, container) {
//     const movieImg = document.createElement("img");
//     movieImg.src = IMAGE_URL + movie.poster_path;
//     container.appendChild(movieImg);
//     movieImg.classList = "notbook"
// }

// data.forEach((movies, index) => {
//     if (index === 0) movies.forEach((movie) => createMovieCard(movie, original));
//     else if (index === 1) movies.forEach((movie) => createMovieCard(movie, trending));
//     else if (index === 2) movies.forEach((movie) => createMovieCard(movie, topRated));
//     else if (index === 3) movies.forEach((movie) => createMovieCard(movie, actionMovies));

// });


function displayMovies(movie , container){
movie.forEach((movies) => {
    const movieImg = document.createElement("img");
        movieImg.src = IMAGE_URL + movies.poster_path;
        movieImg.classList = "notbook"

        container.appendChild(movieImg);
});
}

displayMovies(data[0],original)
displayMovies(data[1],trending)
displayMovies(data[2],topRated)
displayMovies(data[3],actionMovies)





function getRandomImage() {
    const randem = Math.floor(Math.random() * data[0].length)
    const rademmovie = data[0][randem]
    console.log(rademmovie);

    const movieImg = document.createElement("h1")
    movieImg.textContent = rademmovie.name

    const heading = document.createElement("P")
    heading.textContent = rademmovie.overview


    backgroundImage.style.backgroundImage = `url(${IMAGE_URL + rademmovie.poster_path})`
    backgroundImage.style.backgroundSize = "cover"
    backgroundImage.style.backgroundPosition = "center";

    content.append(movieImg, heading)



}
