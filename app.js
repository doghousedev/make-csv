import * as Awe from "./js/awefunky.js";
import { data } from "./js/data.js";

Awe.printMe("Melba");
//Awe.alertMe("Melba");

const people = [
  { name: "Melba", age: 42, city: "New York" },
  { name: "Velma", age: 32, city: "Scaryville" },
  { name: "Wilma", age: 22, city: "Bedrock" },
];

//write a csv file from an array of objects
let csv = Awe.writeCSV(data, "people.csv");

console.log(csv);

Awe.writeJson();
