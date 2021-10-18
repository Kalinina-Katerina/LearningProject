"use strict";
const numberOFfilms = +prompt("Сколько фильмов вы уже просмотрели", "");
const personalMoviesDB = {
    count : numberOFfilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMoviesDB.movies[a] = b; 
      personalMoviesDB.movies[c] = d;   
      
console.log(personalMoviesDB);
