import {fetchMovieAvailability,fetchMovieList} from "./api.js"


fetchMovieList()
.then((response)=>{
    document.getElementById("loader").remove(); // remove loader
    const movieHolder=document.createElement("div")
    movieHolder.classList.add('movie-holder')
    let moviesContent=""
    response.forEach((element)=>{
        moviesContent += `<a class="movie- link" href="/${element.name}">
        <div class="movie" data- d="moviename">
        <div class="movie-img-wrapper" style="backgroud: url('${element.imgUrl}')">
        </div>
        <h4>${element.name}</h4>
        </div>
        </a>
        ` 
    })
    movieHolder.innerHTML = moviesContent
    document.querySelector("main").appendChild(movieHolder)
    const moviesItem=document.getElementsByClassName("movie-link")
    for (let i=0;i<moviesItem;i++){
        moviesItem[i].addEventListener("click",handleMovieBox)
    }
    console.log(response);
    

})
.catch((error)=>{
    console.log(error);
})


const handleMovieBox=(e)=>{
    e.preventDefoult()
  console.log(e);
}
