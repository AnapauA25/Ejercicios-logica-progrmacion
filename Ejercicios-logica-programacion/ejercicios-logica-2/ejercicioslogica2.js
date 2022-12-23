/* solicitar al usuario la temperatura en grados celsius por promp o por input */
/* identificar el tipo de dato */
/* si el dato NO es number enviar mensaje de error y volver a solicitar los datos */
/* tiene que ser numero */
/* convertir la temperatura a grados farenheit y kelvin */
/* primero funcion de grados farenheit */
/* segundo funcion de grados kelvin */
/* imprimir resultados por DOM o consola */
/* CREA UN NUEVO REPOSITORIO */

/* solicitar al usuario la temperatura en grados celsius por promp o por input */
const temperatura = parseInt(prompt("Ingresa la temperatura en grados Celcius: "));
let farenheit =0;
let kelvin= 0;

/* convertir la temperatura a grados farenheit y kelvin */
/* primero funcion de grados farenheit */
function convfarenheit(){
    let resultado=0;
    resultado= (temperatura*1.8 +32);
    return resultado;
}

/* console.log(convfarenheit()); */

/* segunda funcion de grados kelvin */
function convkelvin(){
    let resultado=0;
    resultado= (temperatura + 273.15);
    return resultado;
}
/* imprimir resultados por DOM o consola */
console.log("La temperatura en grados Farenheit es:");
console.log(convfarenheit());
console.log("La temperatura en Kelvin es:");
console.log(convkelvin());

