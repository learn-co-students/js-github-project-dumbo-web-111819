
document.addEventListener("DOMContentLoaded", function (){

  const submitForm=document.querySelector('#github-form')
  const userList=document.querySelector('#user-list')
  // function handleSubmitForm(){

  // }
  submitForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target['search'].value)
    const newLi=document.createElement('li')
  })

})

// console.log(submitForm)

// function fetchData(){
//     let data = fetch(`https://api.github.com/search/users?q=${saveForm}`)
//       .then( res => res.json() )
//       .then( json => console.log(json) )
// }

// fetchData()

// const button = document.getElementById("notify")
