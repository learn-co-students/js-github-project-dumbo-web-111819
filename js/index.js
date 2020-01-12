//Element
const gitFrom = document.querySelector('#github-form')
const userList = document.querySelector("#user-list")
const ulRepo = document.querySelector("#repos-list")



gitFrom.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let userInput = evt.target.search.value

  fetch( `https://api.github.com/search/users?q=${userInput}`)
  .then((resp) => {
    return resp.json()
  })
  .then((userObj) => {
    userDisplay(userObj.items)
  })

})


function displayONDom(user){
  let li = document.createElement("li");
  let img = document.createElement("img")
  img.src = user.avatar_url
  let span = document.createElement("span")
  span.innerText = user.login
  let a = document.createElement("a")
  a.href = user.html_url
  a.innerText = "profile Url"
  li.append(img,span,a)
  userList.append(li)
  eventForLi(li, user)
}


function eventForLi(li, user){
  li.addEventListener("click", (evt) => {
    fetch(`https://api.github.com/users/${user.login}/repos`)
    .then((resp) => {
      return resp.json()
    })
    .then((repoObj) => {
      ulRepo.innerHTML = ""
      repoObj.forEach((repo) => {
        let li2 = document.createElement("li")
        li2.innerText = repo.name;
        ulRepo.append(li2)
      })
    })

  })
}


function userDisplay(userItemArray){
  userItemArray.forEach((user) => {
    console.log(user);
    displayONDom(user)
  })
}
