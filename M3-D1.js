/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
console.log("---------->Ex-1<----------");
function sumof2Numbers(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(sumof2Numbers(20, 20));

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
console.log("---------->Ex-2<----------");
function trueChecker(a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else return false;
}
console.log(trueChecker(50, 50));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
console.log("---------->Ex-3<----------");
function characteremove(str, specficPostion) {
  let charRemove = str.slice(0, specficPostion);
  let b = str.slice(specficPostion + 1);
  return charRemove + b;
}
console.log(characteremove("yonatan", 4));

/* 4. Create a function to find and return the largest of three given integers. */
console.log("---------->Ex-4<----------");
function findLargestNum(x, y, z) {
  maxVal = 0;
  if (x > y) {
    maxVal = x;
  } else {
    maxVal = y;
  }
  if (z > maxVal) {
    maxVal = z;
  }
  return maxVal;
}
console.log(findLargestNum(800, 230, 500));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
console.log("---------->Ex-5<----------");
function numRangeCheker(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(numRangeCheker(95, 50));

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
console.log("---------->Ex-6<----------");

//  the question is not clear for me or i am not able to understand the question well

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
console.log("---------->Ex-7<----------");
function stringStrat(str) {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return true;
  } else {
    return false;
  }
}
console.log(stringStrat("New Zeland"));

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
console.log("---------->Ex-8<----------");
function sumOfArray(array0f3Number) {
  let sum = 0;
  for (let i = 0; i < array0f3Number.length; i++) {
    sum += array0f3Number[i];
  }
  return sum;
}
console.log(sumOfArray([20, 15, 5]));

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

console.log("---------->Ex-9<----------");
function checkArayyLength(arrayy) {
  if (
    arrayy[0] === 1 ||
    arrayy[0] === 3 ||
    arrayy[1] === 1 ||
    arrayy[1] === 3
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkArayyLength([1, 6]));
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
