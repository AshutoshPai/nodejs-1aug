// var a = "abc";
// let nameUsingLet = "asdfghjkl" 
// const nameWithUsingConst = "qaswedfrtghy"; // const value cant be changes after declaration
// a = "def";
// console.log(a);

// if (1== 1) {
//     nameUsingLet = "qwsaerfdtyhg";
//     // nameWithUsingConst = "wsaqrfdeyhgt";
//     // const nameWithUsingConstInsideALoop = "qaswedfrtghy"; // const cant be accessed outside loops if declared inside loop similar to let
// }

// console.log(nameUsingLet)


// if (true) {
//     var b = "ghi"; // This can be globally accessed
//     let bInsideIfCondition = "qwertyuio"; // This can't be globally accessed
// }

// for (var index = 0; index < 10; index++) { // Here, as index is declared as var, the for loop runs then the console is printed. So the setTimout prints the last index value which is 10 
//     setTimeout(()=>{
//         console.log(index)
//     }, 0)
// }

// for (let index = 0; index < 10; index++) { // ES6 introduced let
//     setTimeout(()=>{
//         console.log(index)
//     }, 0)
// }

// function c() {
//     var name = "ashutosh"; // accessable only inside the function
// }
// c();


// console.log(b);
// // console.log(name);
// console.log(nameUsingLet);
// // console.log(bInsideIfCondition);