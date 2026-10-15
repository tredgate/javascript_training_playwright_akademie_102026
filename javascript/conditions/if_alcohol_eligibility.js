// javascript/conditions/if_alcohol_eligibility.js
const actualAge = "17";
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // ? Text uzavřený v `` se nazývá template literal a ten mi umožňuje čitelnější zápis textů s kódem dohromady, alternativně: console.log(fullName + " už může pít alkohol.")
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Uživateli ještě chybí ${drinkingAgeLimit - actualAge} roků.`,
  );
} else {
  console.log("CHYBA: špatně zadaný věk! Zadejte číslo větší než 0");
}
