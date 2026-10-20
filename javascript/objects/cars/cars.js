// javascript/objects/cars/cars.js

import { CarsBlueprint } from "./cars_blueprint.js";

const dieselCar = new CarsBlueprint("Červená", "1.6 TDI", "Diesel", "Dieselák");
dieselCar.logCarProperties(); // ? Provolání metody
console.log(`Barva ${dieselCar.carName} je: ${dieselCar.color}`); // ? Přístup k properties objektu
const petrolCar = new CarsBlueprint("Šedá", "1.0 TSI", "Benzín", "Ropák");
petrolCar.logCarProperties(); // ? Nový objekt z CarsBlueprint
dieselCar.logCarProperties(); // ? Diesel auto je nezměněné, vytvoření petrolCar ho neovlivnilo

const electricCar = new CarsBlueprint(
  "Modrá",
  "EV 160kW",
  "Elektřina",
  "Blesk",
);
electricCar.logCarProperties();

const pinkCar = dieselCar; // ! POZOR! pinkCar i dieselCar jsou nyní stejný objekt
pinkCar.color = "Růžová"; // ! Změní barvu objektu (pinkCar, dieselCar)
dieselCar.logCarProperties();

const electricCarColor = electricCar.getColor();
console.log("Barva elektrického auta: " + electricCarColor);
