

// const fruits = ['orange', 'banana', 'lemon'];
// const friends = ['emma', 'harry', 'don', 'hermoine'];


// const orange = fruits[0];
// const banana = fruits[1];
// const lemon = fruits[2];
// console.log(orange, banana, lemon);

// const [ emma, ,don, hello ] = friends;
// console.log(emma, don, hello);


function hello(arr){
    const [emma, harry, don, hermoine] = arr;
    // const emma = arr[0];
    // const harry = arr[1];
    // const don = arr[2];
    // const hermoine = arr[3]
    console.log(emma, harry, don, hermoine);
}
hello(['emma', 'harry', 'don', 'hermoine'])