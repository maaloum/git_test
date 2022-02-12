// function convertToF(celsius) {
//   let fahrenheit;
//   if (celsius === 0) return 32;
//   return fahrenhei = celsius * (9/5) + 32 ;
// }

// console.log(convertToF(- 30));

//reverse a string 

// function reverseString(str) {

//   var arr = str.split('');
//   return rev_str  = arr.reverse().join('')
  
// }
// console.log(reverseString("hello"));

// factorization
// function factorialize(num) {
//   if (num === 0) return 1;
//   return num * factorialize(num-1);
// }

// factorialize(5);

// findLongestWordLength

// function findLongestWordLength(str) {
//   let arr = str.split(' ');
//   let l = 0;
//   arr.forEach(element => {
//          if ( element.length > l) l = element.length;
    
//   });
//   console.log(l)
//   return l;
// }

// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

//Largest Numbers in Arrays
// function largestOfFour(arr) {
//   const resultat = [];
//   const r2 = [];
//   arr.forEach(element => {
//     resultat.push(Math.max(...element));    
//   });
//   // for (var i =0; i < arr.length; i++){
//   //   r2.push(Math.max(...arr[i])); 
//   // }
//   // console.log(r2)
//   return resultat;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Confirm the Ending
// function confirmEnding(string, target) {
//   if (string.substr(-target.length) === target) {
//     //console.log(string.substr(-target.length));
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(confirmEnding("Abstraction", "action"));

// Repeat a String Repeat a String

// function repeatStringNumTimes(string, times) {
//   if(times < 0) 
//     return "";
//   if(times === 1) 
//     return string;
//   else 
//     return string + repeatStringNumTimes(string, times - 1);
// }
// console.log(repeatStringNumTimes("abc", 3))

// function truncateString(str, num) {
//   if (str.length > num) return str = str.substr(0, num) + '...';
//   else return str;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// Finders Keepers

// function findElement(arr, func) {
//   // let num = 0;
//   // arr.forEach(element => {
//   //   if (func(element)) {
//   //     num = element;
//   //   }
//   //   return num;
//   // });
//   return arr.filter(element => func(element))[0];
  
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// function findElement(arr, func) {
//   var num;
  
//   for(var i = 0; i <arr.length; i++) {
    
//     if(func(arr[i]) === true) {
//       num = arr[i];
      
//       return num;
      
//     }
//   }
// }
// console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }))


//Title Case a Sentence

// function titleCase(str) {
//   var string = str.split(' ');
//   console.log(string);
//   for(var i =0; i < string.length; i++ ){
//     var new_str = string[i]
//     console.log(new_str[i]);
//     for(j = 0; j < new_str.length; j++ ){
//     //  console.log(new_str[j][0].toUpperCase());

//   }
// }}

// titleCase("I'm a little tea pot");

// var cubes = [
//   [1, 2, 3],
//   [4, 5, 6],    
//   [7, 8, 9],
//  ];
 
//  for(var i = 0; i < cubes.length; i++) {
//      var cube = cubes[i];
//      for(var j = 0; j < cube.length; j++) {
//          console.log((cube[j]));
//      }
//  }

// function titleCase(str) {
//   str = str.toLowerCase().split(' ');

//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   return str.join(' ');
// }
// console.log(titleCase("I'm a little tea pot"));

// 
// function frankenSplice(arr1, arr2, n) {
//   for(var i =0; i < arr2.length; i++){
//     for(var j=0; j< arr1.length; j++){

//     }
//   }
//   return arr2;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// splice, splice, split
/*
slice : array.slice(from, until); copy a part of a given array in the a new array.
Splice: array.splice(index, number of elements); changes an array, by adding or removing elements from it 
Split : used for strings. 

*/

// function frankenSplice(arr1, arr2, n) {
//   let combinedArrays = arr2.slice()
//   console.log(combinedArrays)
//   combinedArrays.splice(n, 0, ...arr1)
//   return combinedArrays
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function bouncer(arr) {
//   let res = [];
//   // arr.forEach(element => {
//   //   if( element === false || element  === null || element === 0 || element ===undefined || element ===NaN){
//   //     new_array = arr.splice(element)
//   //     res.push(new_array);
//   //   }  
//   // });
//   // for(let i=0; i< arr.length; i++){
//   //   if( arr[i] === false ||arr[i]  === null || arr[i] === 0 || arr[i] === undefined || arr[i] ===NaN){
//   //     new_array = arr.splice(arr[i], 2);
//   //     console.log(new_array);
//   //   }
//   // }
//   // return res;
//   var filtered = arr.filter(element => arr.splice(element, element === false || element  === null || element === 0 || element ===undefined || element ===NaN) )
//   console.log(filtered);
// } 

// function bouncer(arr) {
//   return arr.filter(elem => Boolean(elem));
// }
// console.log(bouncer([7, "ate", "", false, 9]))


// function getIndexToIns(arr, num) {
//   let new_array = arr.sort()
//   let index;
//   new_array.forEach(element => {
//     if(element < num){
//      index = new_array.indexOf(element);
//     }
//     return index;
//   });
// }

// console.log(getIndexToIns([20,3,5], 19));


// // function solveMeFirst (a,b){
// //   if(a >= 1 && a<= 1000 && b >= 1 && b <= 1000 ){
// //     return a+b;
// //   }
  
// // }


// // console.log(solveMeFirst(1200,5));

// function gradingStudents(grades){
//   // let new_grades = [];
//   // // var rounding = Math.ceil(grades/5)*5;
//   // grades.forEach(element =>{
//   //   if(element => 0 && element<=100 ){
//   //     let difference = 5 - (element % 5);
//   //     // if(element < 40) {
//   //     //   new_grades.push(element);}
//   //     if(difference< 3 && element > 38){
//   //       new_grades.push(difference)};
//   // }})
    
//   return grades.map((n) =>{
//     let difference = 5 - (n % 5);
//     if(difference < 3 && n >= 38) {
//       n += difference;
//   }
//   return n;
// })
// }
// console.log(gradingStudents([4,73,67,38,33]))


// function round5(x)
// {
//     return Math.ceil(x/5)*5;
// }

// console.log(round5(84));

// function sockMerchant(n, ar) {
  
//   const unique = (value, index, self) => {
//     return self.indexOf(value) === index
//   }
//   let len = ar.filter(unique).length;
//   console.log(ar.filter(unique))
//   console.log(len)
//   return (n-len) - 2;
// }

// const unique = (value, index, self) => {
//   return self.indexOf(value) === index
// }
// const ages = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// uniqueAges = ages.filter(unique)

// function sockMerchant(n, ar) {
//   // Write your code here
//   // let sort the array 
//   let sortedAr = ar.sort((a,b) => a-b);
//   console.log(sortedAr);
//   let pairs = 0;
//   for(var i =0; i<n-1; i++){
//       if(sortedAr[i] === sortedAr[i+1]){
//           pairs++;
//           i = i+1;
//       }
//   }
//   return pairs;

// }

// console.log(sockMerchant(10,[10, 20, 20, 10, 10, 30, 50, 10, 20]))


function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let elevation = 0;
  for(let i = 0; i< steps; i++){
      if(path[i] === 'D'){
         elevation--;
         }
      else {
          if(elevation === -1){
              valleys++;
          }
          elevation++;
      }
  }
  return valleys;
}

console.log("valleys " + countingValleys(8, 'UDDDUDUU'));
