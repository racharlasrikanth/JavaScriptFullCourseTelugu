// const newArr = []
// function newGreet(){

// }
// const newGreet = function(){
//     console.log("HELLO");
// }
// fun
// ana
// fun ex
// fun ar
// fun param
// arrow fun
// fun retu

const person = {
    firstName: "emma watson",
    age: 27,
    siblings: ["emma", "watson"],
    greet: function(){
        console.log("HELLO");
    },
    address: {
        colony: "some colony",
        pinCode: 345442,
        state: "TG",
        steet: {
            helo: "some data",
            hello: "some more data"
        }
    },
    random: "I am random text",
}

console.log(person);
// console.log(person.firstName);
// console.log(person.address);
// console.log(person["age"]);

let randomText = "random";

console.log(person.randomText);  // person.randomText
console.log(person[randomText]); // person["random"]
console.log(person["random"]);
console.log(randomText);
console.log(person.address.steet.hello);