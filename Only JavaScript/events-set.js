 let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "Enjoy the click"

})

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "Enjoyed that click"

})

button.addEventListener("contextmenu", ()=>{    //right click
    alert("Fuck you")
})

button.addEventListener("keydown", (e)=>{
    console.log(e)

})

// document.addEventListener("keydown", (e)=>{
//     console.log(e)

// })

// document.addEventListener("keydown", (e)=>{
//     console.log(e, e.key, e.keyCode)
 
// })

// Explore more events on internet