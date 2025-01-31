
const button = document.getElementById("changeTextButton");
const paragraph = document.querySelector("p");

button.addEventListener("click", function() {
    paragraph.textContent = "You clicked the button! 🎉";
});
