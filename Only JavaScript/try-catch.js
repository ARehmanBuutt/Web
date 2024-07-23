let a = prompt("Enter your first number");

let b = prompt("Enter your last number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not a number")
}

let sum = parseInt(a) + parseInt(b);

// console.log("Sum of the numbers are", sum )

try {
    console.log("Sum of the numbers are", sum*x )

} catch (error) {
    console.log("error occurred")
}
// finally {                                    (finally)  mainly used in functions 
//     console.log("Files are closed")
// }