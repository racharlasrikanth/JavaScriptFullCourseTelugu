// Callback hell, Promise, Async/Await

// try
// catch
// finally

const heading1 = document.querySelector(".one")
const heading2 = document.querySelector(".two")
const heading3 = document.querySelector(".three")

const button = document.querySelector("button");


button.addEventListener("click", async () => {
    console.log(displayFun());
    const data = await displayFun();
    console.log(data);
    displayFun().then((data) => {
        console.log(data);
    })
})

const displayFun = async () => {
    try {
        await addColor(1000, heading1, "red");
        await addColor(2000, heading2, "green");
        await addColor(1000, heading3, "blue");
        document.querySelector(".result").innerHTML = "<h1 style=color:green>SUCCESS</h1>"
    } catch (error) {
        console.log(error);
        document.querySelector(".result").innerHTML = "<h1 style=color:red>ERROR...</h1>"
    }
    return "HELLO"
}

function addColor(time, element, color) {
    return new Promise((resolve, reject) => {
        if (element) {
            // resolve code
            setTimeout(() => {
                element.style.color = color;
                resolve("hello");
            }, time)
        } else {
            // reject code
            reject(new Error(`Element not found, element : ${element}`))
        }
    })
}