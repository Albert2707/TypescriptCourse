/* function square(num: number): number {
  return num * num;
} */

/* function greet(person: string) {
  return `  Hi there, ${person}`;
}*/
const doSome = (person: string, age: number, funny: boolean) => {};

square(3);
greet("Tonya Harding");
doSome("NAME", 25, true);

//default parameter
function greet(person: string = "stranger"): string {
  return `  Hi there, ${person}`;
}

function square(num: number): number {
  return num * num;
}
const add = (x: number, y: number): number => {
  return x + y;
};

/* function random(num:number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
} */

//Anonymous function
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

/*Void type */

function printTwice(msg: string): void {
  console.log(msg);
}

/*Never type */
function makeError(msg: string): never {
  throw new Error(msg);
}
function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING");
  }
}

/*Execise */

//Part1
function twoFer(person: string = "you"): string {
  return `One for ${person}, one for me`;
}
console.log(twoFer());
console.log(twoFer("Elton"));

// Part2
const isLeapYea = (year: number): boolean => {
  return year % 4 === 0 && year % 100 !== 0
    ? true
    : year % 400 === 0
    ? true
    : false;
};
console.log(isLeapYea(2012));
