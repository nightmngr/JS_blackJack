//
// arrays

console.log('# Arrays #');

let arr1 = ['test', 2, 4];
console.log(arr1);
console.log(arr1.length);

arr1.push('a', 'b'); // gi dodava na kraj
let posleden = arr1.pop(); // go vadi posledniot element od nizata
// toj element vekje ne se sodrzi vo nea ama moze
// da se skladira vo promenliva na ovoj nacin 

// arrays deklarirani so let mozes da gi izmenuvas
// i mozes na tie promenlivi da im napravis reassign
// pr: arr1 = '3' ili arr1 = 3 ili novo pole

// na arrays deklarirani so const ne mozes da im pravis reassign
// mozes samo da menuvas elementi vo niv

/* VAZNI metodi so nizi:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    * .join()       - site elementi od niza gi spojuva vo eden string
                      ako nema definirano vlezen parametar gi spojuva so prazno mesto
    * .slice()      - sece array [od - do)
    * .splice()     - splice(m,n,'string1', 'string2') sece [od - do) ili gi zamenuva so 'string1', 'string2'
                      ili gi dodava tie strings ako nema takvi indeksi
                      ako indeksot e pregolem go dodava redosledno na kraj
    * .shift()      - go izbiva elementot od 0 pozicija
    * .unshift()    - gi pomestuva site indeksi za 1 (dodava element na pocetok)
    * .concat()     - na taa niza konkatanira druga
*/

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2



// loops

console.log('');
console.log('');
console.log('# Loops #');

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

for (let vacationSpotIndex = vacationSpots.length -1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}