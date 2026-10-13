// javascript/variables-and-values/variables.js
let firstName = "Petr"; // ? Deklarace + inicializace proměnné
// ! NE:  "Petr" = let firstName
console.log(firstName); // Vypíše hodnotu proměnné firstName
let lastName; // ? Deklarace proměnné
console.log(lastName);
lastName = "Fifka"; // ? Inicializace proměnné
console.log(lastName);
console.log(firstName + lastName); // ! Pozor! Sloučení stringů nedělá mezery
console.log(firstName + " " + lastName); // ! Přidání mezery mezi dva stringy
lastName = "Svoboda"; // ? Reinicializace proměnné Fifka => Svoboda
console.log(lastName);

firstName = "Adam";
console.log(firstName);
