// Write your code here!
const main = document.querySelector("main#main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Geoffrey is the champion!";
newHeader.className = "victory";
