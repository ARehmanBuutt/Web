let arr = [1, 13, 5, 6, 7, 8];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)




const greaterthanseven = (e)=>{
    if(e>7){
    return true
}
return false

// (e > 7) ? 'True' : 'False' ;

}
console.log(arr.filter(greaterthanseven))




let arr2 = [1, 2, 3, 4, 5, 6, 7];

const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red));