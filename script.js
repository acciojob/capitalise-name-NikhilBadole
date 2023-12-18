//your JS code here. If required.
function upperCase(){
	let text = document.getElementById("fname");
	text.value = text.value.toUpperCase();
}
document.getElementById("fname").addEventListener("blur", upperCase);