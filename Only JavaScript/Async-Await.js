async function getData() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(522);
        }, 3000);
    });
}

async function main() {
console.log("Loading Modules")

console.log("Do something else")

console.log("Load data")

let data = await getData()

console.log(data)

console.log("process data")

console.log("Task 2")

}

main()

// data.then((v) => {
// console.log(data)
                                        //   callback approach
// console.log("process data")

// console.log("Task 2")
// });
