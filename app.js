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

    const moviesItems=document.getElementsByClassName("movie- link")
    for (let i=0;i<moviesItems.length;i++){
        moviesItems[i].addEventListener("click",(e)=> {
            handleMovieBoxClick(e,moviesItems[i].href)
        
        })
    }
   
    

})
.catch((error)=>{
    console.log(error);
})


const handleMovieBoxClick= async (e,link)=>{
    e.preventDefault()
  //console.log(e.target);
  console.log(link);

//   let setMovieName=link.replace("http://127.0.0.1:5500/", " ") 
//   console.log(setMovieName)

  let response = await fetchMovieAvailability("21 Jump Street")
  console.log(response);
  // let seats= new Array(24).fill(1)
  // response.forEach(item=>{
  //   seats[item]=0;
  // })

  document.querySelector(".v-none").classList.toggle("v-none")
  const bookingholder=document.getElementById("booker-grid-holder")
  let box1=document.createElement("div")
  for(let i=1;i<=12;i++){
    let seat =document.createElement("div")
    
    seat.style.border="2px solid black"
    seat.classList.add("booking-grid")
    seat.id="booking-grid"+i
    box1.appendChild(seat)

  }

  let box2=document.createElement("div")
  for(let i=13;i<=24;i++){
    let seat =document.createElement("div")
    seat.style.border="2px solid black"
    seat.classList.add("booking-grid")
    seat.id="booking-grid"+i
    box2.appendChild(seat)

  }

 bookingholder.appendChild(box1)
 bookingholder.appendChild(box2)
 
 
  
}
