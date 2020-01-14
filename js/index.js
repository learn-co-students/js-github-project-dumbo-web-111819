
const form = document.querySelector("#github-form")
const list = document.querySelector("#user-list")
const repoList = document.querySelector("#repos-list")
form.addEventListener("submit", e=>{
    list.innerText = ""
    e.preventDefault()
    const searchterm = e.target["search"].value
    fetcher(searchterm).then(obj => { 
        obj.items.forEach(item => {        
            const newLi = document.createElement("li")
            console.log(item.login)
            newLi.innerText = item.login
            list.append(newLi)
            newLi.addEventListener("click",e => {
                repoList.innerText = ""
                repoFetcher(item.login).then(obj => {
                    obj.forEach(e => {
                        const newLi = document.createElement("li")
                        newLi.innerText = e.full_name
                        repoList.append(newLi)
                    })
                
                })
                
            })
        })
    })
})


function fetcher(searchterm){
    return  fetch(`https://api.github.com/search/users?q=${searchterm}`).then(r => r.json())
}
function repoFetcher(username){
    return  fetch(`https://api.github.com/users/${username}/repos`).then(r => r.json())
}
