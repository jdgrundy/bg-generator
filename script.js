let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");

changeGradient();

function randomColor() {
	//Store all possible hex letters/numbers in a variable
	let letters = "0123456789ABCDEF";
	//color variable will start with # and have 6 digits added to it
	let color = "#";
	for (let i = 0; i < 6; i++) {
		//iterate 6 times, accessing a random index of letters each pass
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function randomGradient() {
	let cssValue =
		"linear-gradient(to right, " + randomColor() + ", " + randomColor() + ")";

	body.style.background = cssValue;
	css.textContent = cssValue;
}

function changeGradient() {
	let cssValue =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	body.style.background = cssValue;
	css.textContent = cssValue;
}

// Rather than adding event listeners to the variables (which are the class names),
// we can call the changeGradient function in the HTML using an onClick.
random.addEventListener("click", randomGradient);
color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
