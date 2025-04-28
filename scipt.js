"use strict";

//Apartado 1:
/*function esVocal(letra) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra.toLowerCase());
  }
  
 
  console.log(esVocal('A')); // true
  console.log(esVocal('z')); // false
  console.log(esVocal('e')); // true
  console.log(esVocal('O')); // true */

  


// Apartado 2:
/*function procesarArray(array) {

// Elimina duplicados usando Set
    const unicos = [...new Set(array)]; 
    
    // Ordena de menor a mayor
    return unicos.sort((a, b) => a - b); // Ordena de menor a mayor
}


console.log(procesarArray([1, 2, -3, -1, 2, 4, 4, 1, 45, -1])); // [-3, -1, 1, 2, 4, 45]*/


// Apartado 3:
/*let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

// Imprimir la clasificación actual
console.log("Clasificación actual:", clasificaciones);

// Celia adelanta a Raúl
[clasificaciones[2], clasificaciones[3]] = [clasificaciones[3], clasificaciones[2]];

// Antonio es descalificado y se elimina del concurso
clasificaciones.pop();

// Detrás de Ana y antes de Oswaldo se clasifican Roberto y Amaya
clasificaciones.splice(1, 0, "Roberto", "Amaya");

// Marta pasa a encabezar la clasificación
clasificaciones.unshift("Marta");

// Imprimir la clasificación actualizada
console.log("Clasificación actualizada:", clasificaciones);*/