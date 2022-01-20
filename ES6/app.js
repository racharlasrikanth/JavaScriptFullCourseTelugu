// // const text = 'youtube';
// const example = ['hello', 'world'];

// // console.log(example);
// // console.log(example.map);
// // console.log(example.from);
// // console.log(example.of);

// // console.log(Array.from);
// // console.log(Array.of);

// const textArray = Array.of("emma", "watson", true, 2);
// // console.log(textArray);

// const newArray = Array.from(text);
// // console.log(newArray);

// const hello = 'hey how are you';
// // console.log(hello.split(" "));


// const youtube = 'youtube';
// console.log(Array.from(youtube));

// function countTotal(){
//     console.log(arguments);
//     // console.log([...arguments]);
//     console.log(Array.from(arguments));
//     let total = Array.from(arguments).reduce((total, current) => {
//         return total += current;
//     }, 0)
//     console.log(total);
// }
// countTotal(99, 89, 77, 77, 100);


// const p = document.querySelectorAll('p');
const result = document.querySelector('#result');

// console.log([...p]);
// console.log(Array.from(p));

// let newText = Array.from(p);
// newText = newText.map((eachItem) => {
//     return `<span>${eachItem.textContent}</span>`
// }).join(" ")

// result.innerHTML = newText
// console.log(newText);


const text = Array.from(document.querySelectorAll('p'), item => {
    // console.log(item);
    return `<span>${item.textContent}</span>`
}).join(" ")

result.innerHTML = text
console.log(text);