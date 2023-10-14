const activeUsers: string[] = [];
activeUsers.push("Albert");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

const bools: Boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 2, y: -8 });

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]];

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

let ages: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
let gameBoard: string[][] = [];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}
