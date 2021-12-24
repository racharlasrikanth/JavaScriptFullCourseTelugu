// CRUD

// localStorage.setItem("fullname", "Emma Watson");
// localStorage.setItem("fried", "harry");
// localStorage.setItem("job", "actors");
// localStorage.setItem("address", "england");


// const newName = localStorage.getItem("fullname");
// const newFriend = localStorage.getItem("fried");
// console.log(newName, newFriend);

// localStorage.setItem("fried", "harry potter");

// localStorage.removeItem("fried");

// localStorage.clear();



// const friends = ["emma", "watson", "harry"];
// console.log(typeof friends);
// console.log(typeof JSON.stringify(friends));

// localStorage.setItem("friendList", JSON.stringify(friends));

// let values;
// if(localStorage.getItem("friendList")){
//     values = JSON.parse(localStorage.getItem("friendList"));
// }else{
//     values = [];
// }
// values.push("hello new value");
// console.log(values);

// localStorage.setItem("friendList", JSON.stringify(values));

const firstName = document.querySelector("input[type='text']");
const password = document.querySelector("input[type='password']");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function(e){
    console.log(firstName.value);
    console.log(password.value);
    localStorage.setItem("username", firstName.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("userLoggedStatus", true);
})