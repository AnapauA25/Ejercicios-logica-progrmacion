/* solicitar al usuario un numero por prompt o input y guardarlo
identificar el tipo de dato si No es number, enviar un mensaje de error y volver a pedir datos
calcular el factorial del numero
El factorial de un numero es igual al producto de todos los numeros enteros positivos desde el 1 hasta el numero correspon
Debe imprimir el resultado por consola o DOM
CREAR NUEVO REPOSITORIO */

/* solicitar al usuario un numero por prompt o input y guardarlo
identificar el tipo de dato si No es number, enviar un mensaje de error y volver a pedir datos */

let digito1 = parseInt(prompt("Ingresa un numero para calcular el factorial: "));

/* calcular el factorial del numero utilizando bucles */
if (digito1<0) {
    prompt("El numero debe ser positivo");
    
}
for (let i = 1; i < digito1; i++)
    factorialnumero(digito1);

function factorialnumero(num){
    var numero = 1;
    for (let i = 1; i <= num; i++)
        factorial = numero * i;
    return factorial;
}

/* Debe imprimir el resultado por consola o DOM */
console.log("El resultado es: ");
console.log(factorialnumero());