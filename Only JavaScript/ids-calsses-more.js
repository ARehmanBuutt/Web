console.log("Butts")


// works directly on console

// let boxes= document.getElementsByClassName("box")
// console.log("boxes")

// boxes[2].style.backgroundColor = "Red";

// document.getElementById("color").style.backgroundColor = "olive";

// document.querySelector(".box").style.backgroundColor = "blue";

// console.log(document.querySelectorAll(".box"))


// document.querySelectorAll(".box").forEah(e =>  {
//     e.style.backgroundColor = "maroon"
// })


let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "maroon";
}


document.getElementsByTagName("div")