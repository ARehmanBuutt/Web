// innerHtml only gives html inside an element
document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".container").innerText


// outerHtml gives both inside and outside html in an element
document.querySelector(".container").outerHTML


// gives you the tag name of an element
document.querySelector(".container").tagName


// provide the inner text in an element
document.querySelector(".container").textContent


document.querySelector(".container").hidden

document.querySelector(".container").hidden = true


// change inner html
document.querySelector(".box").innerHTML = "my name is abdulrehman"


// check if its contains something
document.querySelector(".box").hasAttribute("style")


// check to get something
document.querySelector(".box").getAttribute("style")


// set something
document.querySelector(".box").setAttribute("style", "display: inline")


// get all attributes in an element
document.querySelector(".box").attributes


// edit any website for temprary time
document.designMode = "on"


// insertion
let div = document.createElement("div");
div.innerHTML = "my name is abdulrehman"
div.setAttribute("class", "checking");
document.querySelector(".container").prepend(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "hey there")  

// beforebegin, afterbegin, beforeend, afterend (4 properties to insert adjacent HTML, Text, Element)


// className & classList 
// className Property gets the names of classes in an element and also classList can get list of classes beign used
// also can add new class or remove exiting class in an element