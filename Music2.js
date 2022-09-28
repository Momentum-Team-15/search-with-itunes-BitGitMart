// const url = 'https://proxy-itunes-api.glitch.me/search?term=Jack+Johnson'
let input = document.getElementById("music-search")
let webz = document.getElementById("webz")
let searchResults = document.getElementById("search-results")
let audio = document.getElementById("audio-player") 

webz.addEventListener("submit", (event) => {
    let search = input.value; 
    let url= `https://itunes.apple.com/search?term=${search}&musicArtist&limit=16`
    event.preventDefault(); 

    fetch(url, {
         method: 'GET', 
         headers: {'Content-Type': 'application/json'}, 
     }) 

    .then(function (response) {
        return response.json() 
    })
    .then(function (music) {
        buildResults(music.results); 
    })
})

function buildResults(itunesArray) {
    for (let itunes of itunesArray) {
        let resultsDiv = document.createElement('div')
        let albumCov = document.createElement('img')
        let albumName =document.createElement('h5')
        let songTitle = document.createElement('h3')
        let artist = document.createElement('h4')
        // let genreType = document.createElement('h6') 
        let audio = document.getElementById("audio-player")
        resultsDiv.classList.add("resultsBorder", "results"); 
        songTitle.classList.add('songTitle')
        //classList allows you to add, remove, replace, and toggle methods 
        //When you have a div at the beginning of this, does it mean everything listed goes into that div? 
        //audio.src = `${itunes.previewUrl}`
        albumCov.src = `${itunes.artworkUrl100}`
        songTitle.innerText = `${itunes.trackName}`
        artist.innerText = `${itunes.artistName}`
        albumName.innerText = `${itunes.collectionName}`
        // genreType.innerText = `${itunes.genreName}`

        resultsDiv.addEventListener("click", (event) => {
            //audio.src = ''
            audio.src = `${itunes.previewUrl}`
        })

        resultsDiv.appendChild(albumCov); 
        resultsDiv.appendChild(songTitle); 
        resultsDiv.appendChild(artist); 
        resultsDiv.appendChild(albumName); 
        // resultsDiv.appendChild(genreType); 
        searchResults.appendChild(resultsDiv); 

        resultsDiv.addEventListener("mouseover", (event) =>{
            resultsDiv.classList.add('hover')
        })
        resultsDiv.addEventListener("mouseout", (event) =>{
            resultsDiv.classList.remove('hover')
        })
        resultsDiv.addEventListener("mousedown", (event) =>{
            resultsDiv.classList.remove('resultsBorder')
        })
        resultsDiv.addEventListener("mouseup", (event) =>{
            resultsDiv.classList.add('resultsBorder')
        })

    }
}


/* 
// let searchBaseUrl = 'https://itunes.apple.com/search?term='

let searchForm = document.querySelector('#search-form')

let userInput = document.querySelector('#Artist')
let form = document.querySelector('#Artist-form')

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
   // let jam = input.value; 



fetch(url, {
    
   //  method: 'GET', 
    headers: {'Content-Type': 'application/json'}, 
}) 

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data.results)
})

}) //this goes to line 5 to connect -- very important function here 

let searchResults = document.querySelector("search-results"); */ 