let api="https://www.omdbapi.com/?apikey=7c19be45&t=";

let title = document.getElementById('title');
let director = document.getElementById('director');
let actor = document.getElementById('actor');
let collection = document.getElementById('collection');
let description = document.getElementById('description');
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');
let ratings = document.getElementById('ratings');
let genre = document.getElementById('genre');
let date = document.getElementById('date');
let poster = document.getElementById('poster');


function searchMovie(){
    let movieName = document.getElementById("movieName");
    let query = api + movieName.value;
    fetch(query).then((data)=>{
        return data.json();//to read the json value
    }).then((data)=>{
        title.innerText=data.Title;
        director.innerText=data.Director;
        actor.innerText=data.Actors;
        collection.innerText=data.BoxOffice;
        description.innerText=data.Plot;
        awards.innerText=data.Awards;
        writer.innerText=data.Writer;
        ratings.innerText=data.imdbRating;
        genre.innerText=data.Genre;
        date.innerText=data.Released;
        poster.src = data.Poster;
    })
}