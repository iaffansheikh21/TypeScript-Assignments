console.log("Before Async Code");
function doSomething() {
    console.log("Lets have some moments to enjoy");
}
setTimeout(() => {
    console.log("Lets have some moments to enjoy/500");
}, 500);
setTimeout(doSomething, 200);
//setInterval(doSomething,100)
function something() {
    console.log("Hello Set Timeout");
}
setTimeout(something, 10);
function PromiseFunction(resolve, reject) {
    if (true) {
        console.log("Successfully code executed");
    }
    else {
        console.log("Something went wrong");
    }
}
let result = new Promise((resolve, reject) => {
    PromiseFunction(resolve, reject);
});
result.then((resolve) => {
    console.log("Success", resolve);
});
result.catch((error) => {
    console.log("Error", error);
});
export {};
