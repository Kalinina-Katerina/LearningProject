"use strict";
let numberOfFilms;


function start(){
   numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");
 
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
   numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");
 }
}
start();
const personalMoviesDB = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],
  privat : false
};
  function   rememberMyFilms(){  
for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотреных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
            if (a != null && a != '' && b != null && b != '' && a.length < 50){

              personalMoviesDB.movies[a] = b;
            } else {
              i--;
            }
      }
    }
//rememberMyFilms();

  function detectPersonalLevel(){
     if (personalMoviesDB.count === null){
      console.log("Произошла ошибка");
      }
      else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) {
        console.log ("Вы класический зритель")
      }
      else if (personalMoviesDB.count > 30){
        console.log ("Вы киноман")
      }
      else {
        console.log("Просмотрено довольно мало фильмов!");
      }
  }
  //detectPersonalLevel(); 
   
function showMyDB (){
  if (personalMoviesDB.privat == true){
    console.log("error");
  }
  else {
    console.log(false);
  }
}
showMyDB();

function writeYourGenre(){
  for (let i = 1; i < 4; i++){
    const genre = prompt(`Ваш любимый жанр ${i}`); //эту строчку можно не создавать
          personalMoviesDB.genres[i - 1] = genre;  
  }
} 
writeYourGenre();
console.log(personalMoviesDB)