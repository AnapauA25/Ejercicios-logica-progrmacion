/* tener un numero secreto */
/* pedir al usuario que ingrese el numero que crea */
/* si el numero que adivino no es igual mostrar mensaje de que lo vuelva a intentar */
/* si adivino el numero mostra mensaje de que lo logro  */

let secreto=73;
let adivinanza=parseInt(prompt("Adivina el numero, e ingresa el numero que crees que sea: "));

if(adivinanza<0){
    prompt("El numero es mayor, vuelve a intentarlo");
}if (adivinanza>100) {
    prompt("El numero es menor,vuelve a intentarlo");
}if (adivinanza != secreto) {
    prompt("Ups, el numero secreto es incorrecto vuelve a intentarlo");
}if (adivinanza == secreto) {
    alert("Felicidades, adivinaste el numero secreto");
    prompt(adivinanza);
}