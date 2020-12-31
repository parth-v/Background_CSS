var clr1 = document.querySelector(".color1");
var clr2 = document.querySelector(".color2");
var body = document.querySelector("body");
var output = document.querySelector("h3");

function colorf(){
	body.style.background="linear-gradient( to right, " + clr1.value + ", " + clr2.value +")";
	output.innerText = body.style.background + ";";
}

function myFunction() {
  var copyText = document.getElementById("copyText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

clr1.addEventListener("input",colorf)

clr2.addEventListener("input",colorf)