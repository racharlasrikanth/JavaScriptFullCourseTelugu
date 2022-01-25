// const URL = "https://ghibliapi.herokuapp.com/people";
const URL = "https://jsonplaceholder.typicode.com/todos";

const button = document.querySelector("button");
const resultContainer = document.querySelector(".result");

// const fetchData = fetch("./server/personData.json");
// const fetchData = fetch("https://ghibliapi.herokuapp.com/people");

const state = {
    data: []
}

const getFetchData = async (url) => {
    try {
        resultContainer.innerHTML = "<li>Loading...</li>"
        const response = await fetch(url);
        const data = await response.json();
        state.data = [...data];
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

const displayData = (comingData) => {
    {
        const html = comingData.map((eachPerson) => {
            return `<li class="${eachPerson.completed ? "green" : "red"}">${eachPerson.title}</li>`;
        }).join("")
        resultContainer.innerHTML = html;
    }
}

button.addEventListener("click", () => {
    getFetchData(URL)
});