var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function color(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value+ " )";

    css.textContent = body.style.background + ";";
}
color1.addEventListener("input",color);

color2.addEventListener("input",color);

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);