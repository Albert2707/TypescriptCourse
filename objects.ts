/* function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Albert", last: "Agramonte" });
 */
/* let coordinate: { x: number; y: number } = { x: 34, y: 34 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
} */
/* 
printName({ first: "Kelly", last: "Jagger", age: 473 });
const singer = { first: "Kelly", last: "Jagger", age: 473, isAlive: true };
printName(singer); */

/* type Point = {
  x: number;
  y: number;
};
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
} */

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Melody",
  artist: "Albert",
  numStreams: 23232323,
  credits: {
    producer: "Jose",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};
const myPoint: Point = { x: 10, y: 2 };

// Readonly modifiert

type User = {
  readonly id: number;
  username: string;
};
const user: User = {
  id: 2,
  username: "Catgirl",
};

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

// Intersection Types
type ColorfulCircle = Circle & Colorful;

const happy: ColorfulCircle = {
  radius: 4,
  color: "green",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: String;
};

type Catdog = Cat &
  Dog & {
    age: number;
  };

const christy: Catdog = {
  numLives: 7,
  breed: "<NAME>",
  age: 2,
};

// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};
const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

const getProfit = (movie: Movie): number => {
  const { grossWorldwide, budget } = movie.boxOffice;
  return grossWorldwide - budget;
};
// For example...
// getProfit(cats) => -21166652

console.log(getProfit(cats));
