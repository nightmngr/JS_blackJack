//
// arrays

console.log('# arrays #');

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
console.log('# loops #');

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

for (let vacationSpotIndex = vacationSpots.length -1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
// let i = 0
// while(i<10){
    // nesto;
    // i++;
// }

// do{
//     i++;
    // nesto;
// } while (i<10);

// vo loops:
// if(uslov1 === uslov2) {
    // break;
// }




// higher-order functions
// A higher-order function is a function that either accepts 
// functions as parameters, returns a function, or both!

console.log('');
console.log('');
console.log('# higher-order functions #');

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
console.log(busy.name);

// higher order functions:
const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
 }
 
 const addOneToOne = () => 1 + 1;
 timeFuncRuntime(addOneToOne);

 // moze da se povika i so anonimna funkcija
 timeFuncRuntime(() => {
    for (let i = 10; i>0; i--){
      console.log(i);
    }
  });
 
  /* Write a higher-order function, checkConsistentOutput().
     This function should have two parameters: a function and a value. 
     It should call the argument function with the value two times. 
     If the callback function produces the same result twice, 
     it should return the result of the function call, otherwise, 
     it should return the string 'This function returned inconsistent results'
  */

 const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};
// const addTwo = (a) => { return a + 2; };
const addTwo = num => num + 2; // ova e poelegantno
checkConsistentOutput(addTwo, 10);




// iterators

console.log('');
console.log('');
console.log('# iterators #');