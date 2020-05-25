

//document.querySelector('#btn-movies').addEventListener('click', chargeJSON);

/* 
let buttonMovies = document.querySelector('#btn-movies');
buttonMovies.addEventListener('click', chargeREST);
 


function chargeREST(){
   fetch ("https://gist.github.com/HectorBlisS/cba6765e20297d64efb8ac1f850b0f7b.js")
      .then (function(respuesta){
         console.log(respuesta)
      })
}
 */
const container = document.querySelector('.container')

 const moviesJSON = () => {
   fetch ('movies.json')
     .then (function (res){
        console.log(res);
        return res.json()
     })
     
     /* .then (res => {
        const allMovies = res => res.json()})
     console.log(allMovies) */

     // .then (res =>res.json()) 
     //Aquí como pongo mi conole.log

   //   .then(res => res.json());

     .then (data => {
        //console.log(data);
        let directorMovie = data.filter(data => data.director === 'Martin Scorsese')
         //console.log (directorMovie)
         
         directorMovie.forEach(element => {
            displayData(element.title, element.director, element.year)
         })
         
         
         /* for (let movies of data.results){
            displayData(movies.title, movies.director, movies.year)
         } */


        let yearMovie = data.filter(data => data.year === 1997)
         //console.log (yearMovie)
         yearMovie.forEach(element => {
            displayData(element.title, element.director, element.year)
         })
      })
}

//Función para dibujar la data

function displayData(title, director, year){
   let div = document.createElement('div')
   //div.className = 'cards'
   div.innerHTML = `
   <div class='card'>
      <div class='title'> 
         ${title}
      </div> 
      <div class='info'>
         <p>${director} </p>
         <p>${year}</p>
      </div>
   </div>
      `
   
   container.appendChild(div)
}



moviesJSON();






/* 
function chargeJSON (){
   fetch ('movies.json')
     .then (function (res){
        //console.log(res);
        return res.json()
     })

   //   .then(res => res.json());

     .then (function(data){
        //console.log(data);
        let directorMovie = data.filter(data => data.director === 'Martin Scorsese')
         console.log (directorMovie)
        let yearMovie = data.filter(data => data.year === 1997)
         console.log (yearMovie)
      })
}

chargeJSON () */


 




