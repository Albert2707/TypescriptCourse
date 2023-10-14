let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle.toUpperCase();

/* Numbers */
let numcCatLives: number = 9;
numcCatLives += 1;
//type error
//numcCatLives ="zero";

/*Boolean */
let gameOver: boolean = false;
gameOver = true;
//type error
//gameOver="true"

// type inference
let tvShow = "Breaking bad";
tvShow = "The 100";
//tvShow = false;

let isFunny = false;
isFunny = true;
//isFunny = "false";

/* Any type */

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["batman", "thign", "it"];
let foundMovie: string = "";

for (let movie of movies) {
  if (movie === "it") {
    foundMovie == "it";
  }
}

export {};
