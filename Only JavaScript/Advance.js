async function sleep() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
(async function main(){
// let a = await sleep();
// console.log(a);
// let b = await sleep();
// console.log(b);

// let [x, y] = [1, 5]
// console.log(x, y);

let obj = {
    a: 1,
    b: 5,
    c: 10
}


let {a, b} = obj
console.log(a, b)

})();