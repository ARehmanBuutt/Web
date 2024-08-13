// callbacks

// const callback = (arg) =>{
//     console.log(arg);
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script");

//     sc.src = src;
//     sc.onload = callback("Butt");
//     document.head.append(sc); 
// }


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);


// Promises

// let prom1 = new Promise((resolve, reject) =>{
//     let a = Math.random();
//     if (a<0.5) {
//         reject("No Number Found");
//     }
//     else{
//     setTimeout(() => {
//         console.log("I am done");
//         resolve("Butt");
//     }, 1000);
// }
// });

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })
 
let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a<0.5) {
        reject("No Number Found");
    }
    else{
    setTimeout(() => {
        console.log("I am done");
        resolve("Butt");
    }, 1000);
}
});

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a<0.5) {
        reject("No Number Found 2");
    }
    else{
    setTimeout(() => {
        console.log("I am here");
        resolve("Butt 2");
    }, 1000);
}
});

let p3 = Promise.all([prom1,prom2])
p3.then((a) =>{
    console.log(a);
}).catch((err) =>{
    console.log("err");
})

// let p = Promise.allSettled([prom1,prom2])
// p.then((a) =>{
//     console.log(a);
// }).catch((err) =>{
//     console.log("err");
// })