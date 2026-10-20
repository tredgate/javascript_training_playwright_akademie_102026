// javascript/functions/console_function.js
function logHelloWorld() {
  console.log("Ahoj světe!");
}

function logText(textParameter) {
  console.log("předaný parametr: " + textParameter);
}

logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();
logText("Programujeme v JavaScriptu!");
logText(); // ? Pokud nevyplním hodnotu do parametru, parametr se nastaví jako undefined
