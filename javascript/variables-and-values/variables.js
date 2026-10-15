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

// * var proměnná
// ! var bychom neměli používat z důvodu toho, že je zastaralý.
var city = "Praha";
// ! U var je možná redeklarace
var city; // * Přepsal jsem proměnnou city
console.log(city);
{
  var street = "Nová";
}
console.log("Var je i mimo blok: " + street);
var continent; // * var je možné deklarovat bez inicializace
continent = "Evropa";
continent = "Asie";

// * let proměnná
let country = "CZ";
// let country; // ? Není možné redeklarovat let, chyba: Cannot redeclare block-scoped variable 'country'.ts(2451)

{
  let carBrand = "Škoda";
  console.log("Značka auta: " + carBrand);
  console.log("Country se přenáší do bloku: " + country);
}
// console.log("Mimo blok už nemám carBrand: " + carBrand); // ! Chyba: ReferenceError: carBrand is not defined

// * const - konstanta
const computer = "Notebok";
// const computer; // * Není možné redeklarovat const
computer = "Desktop"; // ! Není možné změnit hodnotu v const, při spuštění vyhodí chybu: TypeError: Assignment to constant variable.
// const isActive; // ! Není možné deklarovat const bez inicializace, chyba: 'const' declarations must be initialized.ts(1155)

{
  const phone = "123456"; // * const -> izolace v bloku
  console.log(phone);
}

// console.log("phone neexistuje mimo blok: " + phone); // ! ReferenceError: phone is not defined

// * Poznámky

/*
 Více
 řádková
 poznámka
*/

/**
 * **Tučný nadpis**
 * Píšu v Markdown ~přeškrtnutý text~
 *
 * ```js
 * console.log("Petr")
 * ```
 */
function none() {}
