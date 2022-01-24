// Callback hell, Promise, Async/Await

// Pending, Resolved, Rejected
// then catch

const url = "https://source.unsplash.com/random";

const button = document.querySelector(".btn");
const container = document.querySelector(".img-container");

button.addEventListener("click", () => {
    document.querySelector(".loading").classList.remove("hide");
    loadImage(url).then((result) => {
        container.appendChild(result);
        document.querySelector(".loading").classList.add("hide");
        console.log(result);
    }).catch((err) => {
        container.innerHTML = "<h1>ERROR</h1>"
        console.log(err);
    })
})

function loadImage(url){
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener("load", () => {
            resolve(img)
        })
        img.addEventListener("error", () => {
            reject(new Error(`Failed to load image frmo the api, url : ${url}`))
        })
        img.src = url;
    })
}