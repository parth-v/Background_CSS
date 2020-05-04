var clr1 = document.querySelector(".color1");
var clr2 = document.querySelector(".color2");
var body = document.querySelector("body");
var output = document.querySelector("h3");

function colorf(){
	body.style.background="linear-gradient( to right, " + clr1.value + ", " + clr2.value +")";
	output.innerText = body.style.background + ";";
}

clr1.addEventListener("input",colorf)

clr2.addEventListener("input",colorf)