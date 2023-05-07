'use strict'

//Funciones: son agrupaciones reutilizables de un conjunto de instrucciones

//Definimos la función
function Calculadora () {
    //Conjunto de instrucciones a ejecutar
    console.log(Calculadora(), Calculadora());
    
    //También lo podemos hacer con return para que devuelva un string
    return ("Hola soy la calculadora");
}

//Invocar a la función, la podemos llamar las veces que queramos poniendola de nuevo
Calculadora();
Calculadora();
Calculadora();