var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var code = document.querySelector("h3");

function addgradient() {
    body.style.background = "Linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
    code.textContent = body.style.background + ";";
}

input1.addEventListener("input", addgradient);

input2.addEventListener("input", addgradient);
