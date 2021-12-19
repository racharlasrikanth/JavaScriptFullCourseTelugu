// prepend
// innerText


const heading = document.createElement("h2");
heading.innerText = "I am dynamic heading";
document.body.prepend(heading);
console.log(heading);


const smallHeading = "<h6>I am small and easy way</h6>";
document.body.insertAdjacentHTML("afterend", smallHeading);



// const heading = document.createElement('h2');
// heading.innerText = `i am a dynamic heading`;
// document.body.prepend(heading);