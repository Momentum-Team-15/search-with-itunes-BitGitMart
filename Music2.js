let input = document.getElementById("music-search")
let form = document.getElementById("form")
let searchResults = document.getElementById("search-results")

form.addEventListener("submit", (event) => {
    let search = input.value; 
    let url= `https://itunes.apple.com/search?term=${search}&limit=20`
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
        let picture = document.createElement('img')
        let title = document.createElement('h3')
        let artist = document.createElement('h4')
        let audio = document.getElementById("audio-player")
        resultsDiv.classList.add("results"); 
        //classList allows you to add, remove, replace, and toggle methods 
        //When you have a div at the beginning of this, does it mean everything listed goes into that div? 

        audio.src = `${itunes.previewUrl}`
        picture.src = `${itunes.artworkUrl100}`
        title.innerText = `${itunes.trackName}`
        artist.innerText = `${itunes.artistName}`

        resultsDiv.appendChild(picture); 
        resultsDiv.appendChild(title); 
        resultsDiv.appendChild(artist); 


    }
}