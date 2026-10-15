// javascript/arrays/array_learning.js

const cities = ["Praha", "Brno", "Ostrava"];
console.log(cities);
console.log("2. město: " + cities[1]);
cities.push("Olomouc");
console.log(cities);
cities.push("Prostějov");

for (let i = 0; i < cities.length; i++) {
  console.log("Město: " + cities[i]);
}
