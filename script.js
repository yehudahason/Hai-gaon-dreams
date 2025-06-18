const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("google-search")
let param ;

btnEl.addEventListener ( "click", (e) =>{
     e.preventDefault()
     window.location.href = `https://www.google.com/search?q=site:https://pitron-halomot.org "${param}"`
})

inputEl.addEventListener("change" , (e) => {
 param = e.target.value
})