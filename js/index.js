const URL = "https://api.github.com/search/users?q=octocat" 
const form = document.querySelector('#github-form')
const userList = document.querySelector('#github-container')
const repoList = document.getElementById('repos-list')
// fetch(URL).then(r => r.json()).then(turnJSONtoHTML)
// function turnJSONtoHTML() {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const input = document.createElement('li')
        input.innerText = event.target.search.value
        fetch(`https://api.github.com/search/users?q=${input.innerText}`)
        .then(r => r.json())
        .then(function(user) { 
            turnJSONtoHTML(user)
            // user.forEach(turnJSONtoHTML) 
        })
        // userList.append(newLi)
    })
// }
function turnJSONtoHTML(user) { 
    const newDiv = document.createElement('div')
    const newLi = document.createElement('li')
    const secondLi = document.createElement('li')
    const image = document.createElement('img')
    user.items.forEach((item) => {
        // debugger
        console.log(item)
      newLi.innerText = item.login
      secondLi.innerText = item.url 
      image.src =  item.avatar_url
      newDiv.append(newLi,secondLi,image)
      userList.append(newDiv)

      secondLi.addEventListener('click', () => {
          fetch(`https://api.github.com/users/${item.login}/repos`).then(r => r.json())
          .then((repos) => {
              repos.forEach((repo) => {
                const newUL = document.createElement('ul')
                newUL.innerText = repo.name
                repoList.append(newUL)
              })
            //   console.log(repo.name)
     })
      })       
      })
    }
    // newLi.innerText = user
// user.items[0].login