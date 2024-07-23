function nice(name) {
    console.log(name + "hey" + " r u ok");
    console.log(name + "hey" + " there");
    console.log(name + "hey" + " hi");
    console.log(name + "hey" + " hello"); 
}
nice("Butt ")
nice("Ali ")


function sum(a , b , c=5) {
    // console.log(a +  b)
    return a + b + c
}

result = sum(3,5,1)
result1 = sum(3,5)

console.log("The sum of these two numbers is: ", result)
console.log("The sum of these two numbers is: ", result1)


const func1 = (x)=>{
    console.log("This is an arrow function: ", x)
}
 
func1(5);
func1(51);
func1(521);