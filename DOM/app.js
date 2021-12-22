const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubling(e){
    console.log("target", e.target);
    console.log("current target", e.currentTarget);
    // if(e.target.classList.contains("link")){
    //     console.log(e.target);
    // }
}

function stopPropagation(e){
    e.stopPropagation();
}

window.addEventListener("click", showBubling,{capture: false});
container.addEventListener("click", showBubling,{capture: false});
document.addEventListener("click", showBubling,{capture: false});
list.addEventListener("click", showBubling,{capture: false});


// child(ul) -> container -> document -> window


// const container = document.querySelector(".container");
// const heading = document.querySelector(".heading");
// const button = document.querySelector("button");

// console.log(heading);



// button.addEventListener("click", function(){
//     let heading = document.createElement("h1");
//     heading.textContent = "I am dynamic heading";
//     heading.classList.add("heading");
//     container.appendChild(heading)
// })

// container.addEventListener("click", function(e){
//     console.log(e.target);
//     if(e.target.classList.contains("heading")){
//         console.log("I AM HEADING");
//     }
// })

// heading.addEventListener("click", function(e){
//     console.log("Hello I am heading");
// })