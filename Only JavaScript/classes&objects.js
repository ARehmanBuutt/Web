// let obj ={
//     a: 1,
//     b: "Butt",
// }
// console.log(obj)


// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;



// Objects



// class Animal {
//     constructor(name){
//         this.name = name;
//         console.log("Object is created");
//     }
//     eats() {
//         console.log("Eating");
//     }
//     jumps() {
//         console.log("Jumping");
//     }
// }

// class Lion extends Animal {
//     constructor(name){
//         super(name);
//         console.log("Lion is seen");
//     }
// }

// let a = new Animal("rabbit");
// console.log(a);

// let l = new Lion("Cheetah");
// console.log(l);


// classes getter setter

class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4){
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("Sam5");
console.log(user.name);

user.name = "Abdulrehman"
console.log(user)