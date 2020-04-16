
document.addEventListener("DOMContentLoaded", function (){

  const submitForm=document.querySelector('#github-form')
  const userList=document.querySelector('#user-list')
  const repoList=document.querySelector('#repos-list')
  
  submitForm.addEventListener('submit', handleSubmitForm)
  
  function jsonToHtml(element){
    const br=document.createElement('br')
    const newLi=document.createElement('li')
    const newImg=document.createElement('img')
    newImg.src=element.avatar_url
    let span=document.createElement("span")
    span.textContent=element.login    
    const a = document.createElement('a')
    a.href = element.html_url
    a.innerText="profile Url"
    newLi.append(newImg,span,br,a)
    userList.append(newLi)
    eventOnNewLi(newLi,element)  //create an event listener as the element object is created
  }


  function handleSubmitForm(e){
    e.preventDefault()
    let inputValue=e.target['search'].value
    fetch(`https://api.github.com/search/users?q=${inputValue}`)
    .then( res => res.json() )
    .then( json => {
      
      json.items.forEach(element => {
        console.log(element.login)
        jsonToHtml(element)
      })
    })
  }

  function eventOnNewLi(newLi,element){
    newLi.addEventListener('click',(event) => {
      fetch(`https://api.github.com/users/${element.login}/repos`)
      .then(res => res.json())
      .then(repos=>{

        //first clear out any existing repo list
        repoList.innerHTML=""
        repos.forEach(repo=>{
        const Li2=document.createElement('li')
        Li2.innerText=`${repo.id} | ${repo.full_name}`
        repoList.append(Li2)
        })
      })
    })
  }
})
