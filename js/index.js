
let saveInput=document.getElementById('search')


function fetchData(){
    let data = fetch(`https://api.github.com/search/users?q=${saveInput}`)
      .then( res => res.json() )
      .then( json => console.log(json) )
}

fetchData()

// const button = document.getElementById("notify")
saveInput.addEventListener('submit', function(){
  console.log("Printing a Message!")
})