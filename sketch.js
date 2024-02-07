let gradients = [];


for (let i = 0; i < 1000; i++) {
  addElement()
}

function addElement() {
  // get the element to place the 'squares' into
  const main = document.getElementById("squares")
  // get the width/height of the window and diameter
  const width = window.innerWidth;
  const height = window.innerHeight;
  const diameter = 50;
  
  // create a new div element
  const newDiv = document.createElement("div");
  // give it the gradient class
  newDiv.classList.add("gradient");
  
  // add custom css properties to each div
  newDiv.style.width = diameter + "px";
  newDiv.style.height = diameter + "px";
  newDiv.style.top = (Math.random()*height - diameter/2) + "px";
  newDiv.style.left = (Math.random()*width - diameter/2) + "px";
  newDiv.style.animationDelay = Math.random()*1 + "s";

  // add div to parent
  main.appendChild(newDiv);
}