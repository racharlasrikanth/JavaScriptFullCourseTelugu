// Callback hell, Promise, Async/Await

// Synchronous Javascirpt

// soup
// water boil 10min
// chop carrots
// add carrots boil 5min
// chop onions
// add oining 5min boil

// setTimeout, fetchData, getGeoLocation, setTimer

boilWater();
console.log("Chop Carrots");


function boilWater(){
    console.log("Boiling Water");
    setTimeout(() => {
        console.log('Water boiling Completed');
        console.log("Adding Carrots");
        setTimeout(() => {
            console.log("Carrots Completed");
            console.log("ADding Onions");
            setTimeout(() => {
                console.log("Onions Done....");
                console.log("***SOUP READY***");
            }, 5000)
        }, 5000);
        console.log("Chop Onions...");
    }, 10000)
}