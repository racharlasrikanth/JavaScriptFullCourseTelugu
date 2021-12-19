// createElement();
// createTextNode();
// appendChild();

// insertBefore();


const result = document.querySelector("#result");
console.log(result);


const simpleDiv = document.createElement("div");
const text = document.createTextNode("a simple body div");
simpleDiv.appendChild(text);
simpleDiv.classList.add("bodyDiv")

document.body.appendChild(simpleDiv)

const heading = document.createElement("h2");
// <h2></h2>
const headingText = document.createTextNode("I am heading 2");
// I am heading 2
heading.appendChild(headingText);
// <h2>I am heading 2</h2>

result.appendChild(heading);

console.log(result);

const heading5 = document.createElement("h5");
// <h5></h5>

const headingText5 = document.createTextNode("I am heading 5");
// I am heading 5;

heading5.appendChild(headingText5);
// <h5>I am heading 5</h5>

heading5.classList.add("blue")

result.appendChild(heading5)


const para = document.createElement("p");
// <p></p>

const paraText = document.createTextNode("I am paragraph");
// I am paragraph

para.appendChild(paraText)
// <p>I am paragraph</p>

para.classList.add("red")

const h5 = document.querySelector("h5");
console.log(h5);

result.insertBefore(para, h5);
// insertBefore("element", "location")

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("Small heading");
smallHeading.appendChild(smallText);

document.body.replaceChild(smallHeading, document.querySelector(".bodyDiv"));