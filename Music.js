const url = 'https://proxy-itunes-api.glitch.me/search?term=jack+johnson'

let userInput = document.querySelector('#Artist')
let form = document.querySelector('#Artist-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()


fetch(url, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}, 
}) 

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data.results)
})

}) //this goes to line 5 to connect 

//Aaron says that he got the function to work without the let 