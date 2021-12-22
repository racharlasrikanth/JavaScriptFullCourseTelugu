const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");
const link = document.querySelector(".link");

btn.addEventListener("click", function(evt){
    console.log(evt);
    console.log(evt.currentTarget);
    console.log(evt.currentTarget.textContent);
    console.log(evt.currentTarget.classList);
    console.log(evt.type);
})

heading.addEventListener("mouseenter", function(evt){
    console.log(evt);
    console.log(evt.currentTarget);
    console.log(evt.currentTarget.classList);
    let listOfClasses = evt.currentTarget.classList;
    if(listOfClasses.contains("red")){
        listOfClasses.remove("red")
    }else{
        listOfClasses.add("red")
    }
})



link.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.getAttribute("href"));
})