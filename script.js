
import { IMAGE_URL, base_url, API_KEY, requests } from "./data.js";

const original = document.querySelector("#Netflix");
const trending = document.querySelector("#trending");
const topRated = document.querySelector("#topRated");
const actionMovies = document.querySelector("#ActionMovie");
const fetchActionMovies=document.querySelector("#fetchActionMovies")
const fetchComedyMovies=document.querySelector("#ComedyMovies")
const fetchHorrorMovies=document.querySelector("#HorrorMovies")
const fetchRomanceMovies=document.querySelector("#fetchRomanceMovies")
const fetchDocumentaries=document.querySelector("#Documentaries")
const backgroundImage = document.querySelector(".backgroundImage");
const content = document.querySelector(".content")

const data = [];

// async function fetchDataFromURL(value) {
//     const response = await fetch(base_url + value);
//     const result = await response.json();
//     console.log(result.results);
//     return result.results;
// }
async function fetchDataFromURL(value) {
    try {
        const response = await fetch(base_url + value);
        const result = await response.json();
        console.log(result.results);
        return result.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}


for (let i in requests) {
    const categoryData = await fetchDataFromURL(requests[i]);
    data.push(categoryData);
}
console.log(data);

getRandomImage()




function displayMovies(movie, container) {
    movie.forEach((movies) => {
        const movieName = document.createElement("img");
        movieName.src = IMAGE_URL + movies.poster_path;
        movieName.classList = "notbook"

        container.appendChild(movieName);
    });
}

displayMovies(data[0], original)
displayMovies(data[1], trending)
displayMovies(data[2], topRated)
displayMovies(data[3], actionMovies)
displayMovies(data[4] ,fetchActionMovies)
displayMovies(data[5] ,fetchComedyMovies)
displayMovies(data[6] ,fetchHorrorMovies)
displayMovies(data[7] ,fetchRomanceMovies)
displayMovies(data[8] ,fetchDocumentaries)


function getRandomImage() {
    const randem = Math.floor(Math.random() * data[0].length)
    const rademmovie = data[0][randem]
    console.log(rademmovie);

    const movieName = document.createElement("h1")
    movieName.textContent = rademmovie.name;

    content.append(movieName);

    createButtons();

    const heading = document.createElement("P")
    heading.textContent = rademmovie.overview


    backgroundImage.style.backgroundImage = `url(${IMAGE_URL + rademmovie.poster_path})`
    backgroundImage.style.backgroundSize = "cover"
    backgroundImage.style.backgroundPosition = "center";

    content.append(heading)
}

function createButtons() {
    const div = document.createElement("div");
    const play = document.createElement("button");
    const myList = document.createElement("button");

    div.classList.add("btn");
    play.innerText = "Play";
    myList.innerText = "My List";

    div.append(play, myList);
    content.append(div);
}

