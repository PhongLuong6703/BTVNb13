let btn = document.getElementById("btn");
let body = document.getElementById("body");

btn.addEventListener("click", function() {
    body.classList.toggle('DarkMode');
	let DarkMode = document.querySelector(".DarkMode");
	if (DarkMode) {
		localStorage.setItem("Theme", "Dark");
	} else {
		localStorage.setItem("Theme", "Light")
	}
})