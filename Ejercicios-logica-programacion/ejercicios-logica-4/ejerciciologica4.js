/* solicitar al usuario un numero por prompt */
/* debe realizar la sucesion de fibonacci */
/* la sucesion de fibonacci es una secuencia, se va sumando a pares, de manera que cada numero es igual a la suma de 
los dos anteriores  */
/* imprimir el resultado */

/* solicitar al usuario un numero por prompt */
let digito= parseInt(prompt("Escribe un numero para relaizar la serie de fibonacci: "));
let numero1=0;
let numero2=1;
let numerofinal=0;
/* debe realizar la sucesion de fibonacci utilizando un for anidado*/
/* sumar pares */

 while (resultado<=digito){
    numero1=numero2;
    numero2=numerofinal;
    numerofinal=(numero1+numero2);
    return resultado;
}
return resultado;

