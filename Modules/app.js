import { random, people } from "./utils/data.js";
import show from "./utils/showPeople.js";
import get from "./utils/getElement.js";

const container = get(".container");
const button = get("button");
// const container1 = get(".container1");

button.addEventListener("click", ()=>{
    const htmldata = show(people);
    container.innerHTML = htmldata;
})