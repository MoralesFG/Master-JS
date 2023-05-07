'use strict'

//bucle while, es menos estricto que for. Se pueden hacer bucles while de forma infinita

var year = 2018;

while(year <= 2050) {
    console.log("Estamos en el año "+ year);

    year++; //la variable va aumentando para que cuando llegue a 2050 pare y no sea infinito
}

//Al igual que hacemos que los años vayan sumando, tambien pueden ir disminuyendo si cambiamos la condicion del while y le decimos year--;

//BUCLE DO WHILE
var years = 30;

do {
    alert("Solo cuando sea diferente a 20");
    years--;
} 
while(years > 25)

//Este bucle nos permite ejecutar primero bucle de instrucciones y luego evaluar la condicion. Para parar cualquier bucle simplemente tenemos que usar break, es decir que lo podemos meter seguido de cualquier condicion para que cuando se cumpla justo corte ahí.