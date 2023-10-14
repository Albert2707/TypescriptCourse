let age: number | string | boolean = 21;
age = 23;
age = "23";
age = true;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 43 };
coordinates = { lat: 323.4545, long: 434.434 };
export {};
