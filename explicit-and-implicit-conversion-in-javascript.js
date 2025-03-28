/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // Explicitly convert "5" to a number
console.log("The result is: " + result); // Output: 3

// Bug 2: Boolean conversion of a non-empty string

let isValid = ("false" === "true");  // Fix: "false" is a non-empty string, so it evaluates to true.
if (isValid) {
  console.log("This is valid!");
} else {
  console.log("This is NOT valid!");
}


let age = "25";
let totalAge = Number(age) + 5;// Explicitly converts "25" to a number
console.log("Total Age: " + totalAge);// output: 30


//Part 2
//Implicit Type Conversion Example (Type Coercion)
let num = "10" * 2; // JavaScript converts "10" to a number
console.log("Implicit Conversion:", num, "| Type:", typeof num); 
// Output: Implicit Conversion: 20 | Type: number

//Explicit Type Conversion Example
let sNum = "42";
let convrtNum = Number(sNum); // Explicitly converting string to number
console.log("Before Conversion:", sNum, "| Type:", typeof sNum);
console.log("After Conversion:", convrtNum, "| Type:", typeof convrtNum);
// Output: 
// Before Conversion: 42 | Type: string
// After Conversion: 42 | Type: number


 //Edge Case Example (NaN, undefined, null)
console.log("Number('Hello'):", Number("Hello")); // NaN (Not a Number)
console.log("Number(null):", Number(null)); // 0 (null converts to 0)
console.log("Number(undefined):", Number(undefined)); // NaN (undefined cannot be converted)
