function getElement (selection) {
    const element = document.querySelector(selection);
    if(element){
        console.log(element, "selected");
        return element;
    }
    throw Error("Element Not Selected");
}

export default getElement;