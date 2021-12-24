const cardsContainer = document.querySelector(".cards-container");


const dataList = [
    {id:435245432, imgLink: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", title: "Emma Watson", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:67876554, imgLink: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", title: "Harry Potter", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:3425465, imgLink: "https://images.unsplash.com/photo-1445363692815-ebcd599f7621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", title: "Don", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:78978, imgLink: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", title: "Heyy everyone", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:8708765, imgLink: "https://images.unsplash.com/photo-1443632864897-14973fa006cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", title: "Emma Watson", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:3426576, imgLink: "https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", title: "Emma Watson", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {id:7689000, imgLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", title: "Emma Watson", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
]

console.log(dataList);

// const html = document.createElement("div");
// html.innerHTML = "<h1>HELLO</h1>";
// cardsContainer.appendChild(html);

dataList.forEach(function(eachObj){
    console.log(eachObj);
    const cardElement = document.createElement("article");
    cardElement.classList.add("card");
    cardElement.innerHTML = `<div class="img-container">
            <img src="${eachObj.imgLink}" alt="mountain image">
        </div><div class="title">
        <h1>${eachObj.title}</h1>
        </div><div class="text">
        <p>${eachObj.text}</p>
        </div>`;
        cardsContainer.appendChild(cardElement)
    console.log(cardElement);
})