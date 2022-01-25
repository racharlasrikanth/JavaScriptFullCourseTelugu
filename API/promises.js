const URL = "https://ghibliapi.herokuapp.com/people";

const button = document.querySelector("button");
const resultContainer = document.querySelector(".result");

// const fetchData = fetch("./server/personData.json");
const fetchData = fetch("https://ghibliapi.herokuapp.com/people");

const state = {
    data: []
}

fetchData.then((response) => {
    return response.json();
}).then((data) => {
    state.data = [...data];
}).catch((err) => {
    console.log(err);
})

const displayData = (comingData) => {
    {
        const html = comingData.map((eachPerson) => {
            return `<li>${eachPerson.name}</li>`;
        }).join("")
        resultContainer.innerHTML = html;
    }
}

button.addEventListener("click", () => {
    displayData(state.data)
});