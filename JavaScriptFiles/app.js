// nextSibling
// previousSibling
// return white space;

// nextElementSibling
// previousElementSibling

// nodeValue
// textContent


const value = document.getElementById("main-heading");
console.log(value.childNodes[0].nodeValue);
console.log(value.firstChild.nodeValue);

const easyValue = value.textContent;
value.textContent = "Welcome to JS COurse";


// const value = document.querySelector("#first");
// console.log(value);

// const second = value.nextSibling.nextSibling;
// console.log(second);

// const last = document.getElementById("last");
// console.log(last);

// const third = last.previousSibling.previousSibling;
// console.log(third);


// const first = document.querySelector("#first");
// console.log(first.nextElementSibling);

// const last = document.getElementById("last");
// console.log(last.previousElementSibling);


// childNodes
// firstChild
// lastChild
// children
// parentElement

// const value = document.querySelector("#main-heading");
// const button = document.querySelector("button");

// function updateValue(){
//     value.textContent = "Welcome to Javascript Course";
// }

// button.addEventListener("click", updateValue);

// console.log(value);
// console.log(button);


// const ulParent = document.querySelector("ul");
// const list = document.querySelectorAll("li");
// console.log(ulParent);
// console.log(list);

// console.log(ulParent.childNodes);
// console.log(ulParent.children);
// console.log(ulParent.firstChild);
// console.log(ulParent.lastChild);


// const newItem = document.querySelector(".div-parent .sub-heading");
// console.log(newItem);
// console.log(newItem.parentElement);
// console.log(newItem.parentElement.parentElement);
// console.log(newItem.parentElement.parentElement.parentElement);


// const listTag = document.querySelector("li:nth-child(3)");
// listTag.style.color = "blue";
// listTag.style.background = "yellow";
// console.log(listTag);


// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()


// const values = document.getElementById("main-heading");
// values.style.color = "red"
// console.log(values);

// const list = document.getElementsByTagName("li");
// console.log([...list]);

// const newList = document.querySelectorAll("li");
// console.log([...newList]);

// newList.forEach(element => {
//     console.log(element);
// });

// const newValue = document.querySelector("li");
// console.log(newValue);

// document.querySelector("#main-heading");
// document.querySelector(".heading");
// document.querySelector("h1");

// const value = document.getElementById("main-heading");
// console.log(value);

// const classValue = document.getElementsByClassName("heading");
// console.log(...classValue);

// const list = document.getElementsByTagName("li");
// console.log(list);
// console.log([...list]);
// const betterItems = [...list]

// betterItems.forEach(element => {
//     element.style.color = "red"
// });


// const newItem1 = document.querySelector("#main-heading");
// console.log(newItem1);

// const newItem2 = document.querySelectorAll(".heading");
// console.log([...newItem2]);

// // const newListItems = document.querySelector("li");
// const newListItems = document.querySelectorAll("li");
// console.log([...newListItems]);


// const newStyles = document.querySelector("li:nth-child(3)")
// newStyles.style.color = "blue";
// newStyles.style.fontSize = "40px";
// newStyles.style.background = "red";


// const btn = document.querySelector("button");
// console.log(btn);

// const inputText = document.querySelector("input");
// console.log(inputText);