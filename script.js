// Select the button and the paragraph
const button = document.getElementById("changeTextButton");
const paragraph = document.querySelector("p");

// Add a click event listener to the button
button.addEventListener("click", function() {
    paragraph.textContent = "You clicked the button! 🎉";
});