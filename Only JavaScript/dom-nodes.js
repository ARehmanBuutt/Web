console.log("Hello world!");

// Methods 

let cont = document.body.childNodes[1];

cont.firstElementChild;
cont.lastElementChild;

cont.lastElementChild.style.color = "Red"
cont.lastElementChild.style.backgroundColor = "green"

cont.lastElementChild.parentElement

document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[3].nextElementSibling
document.body.firstElementChild.children[3].previousElementSibling
document.body.firstElementChild.children[3].previousSibling
document.body.firstElementChild.children[3].parentElement



// Methods of Dom

// document.body
// document.body.childNodes
// document.body.childNodes[0] First child Node 
// document.body.childNodes[1] Second child Node 
// space in js considered as text node also text node is not an element