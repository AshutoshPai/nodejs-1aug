// Spread operator
const person = {
    name: "Ashutosh",
    location: "Bangalore"
}

const job = {
    title: "Engineer",
    exp: "2.5"
}

// const personAndJob = {
//     name: person.name,
//     location: person.location,
//     title: job.title,
//     exp: job.exp
// }

// const personAndJob = Object.assign({}, person, job)

const personAndJob = {...person, ...job}

console.log(personAndJob);

//-------------------------------------------------------------------------------------------------------------------------------------
// // Template literals
// const firstName = "Ashutosh";

// const message = `Hello ${firstName}. The time is ${new Date().toLocaleDateString()}`;

// console.log(message);
//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------
// // // This Keyword
// // // w/o Arrow function
// // // class Car {
// // //     name = "Tesla";
// // //     drive() {
// // //         // console.log(this, "class");
// // //         const _this = this
// // //         setTimeout(function(){
// // //             // console.log(this.name)
// // //             // console.log(this, "setTimeout");
// // //             console.log(_this.name);   
// // //         })
// // //     }
// // // }

// // // w Arrow function
// // class Car {
// //     name = "Tesla";
// //     drive() {
// //         setTimeout(()=>{
// //             console.log(this.name)
// //         })
// //     }
// // }

// // const tesla = new Car();
// // tesla.drive();
//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------
// // // // Arrow function are optimized function code but similar to normal function
// // // // w/o arrow function
// // // // setTimeout(function(){
// // // //     console.log("1sec");
// // // // }, 1000)

// // // // function currentTimestamp(){
// // // //     return new Date().toISOString();
// // // // }

// // // // function createRandomNumber(limit){
// // // //     return Math.round(Math.random() * limit);
// // // // }

// // // // function add(a, b) {
// // // //     return a+b;
// // // // }

// // // // w arrow function
// // // setTimeout(()=>{
// // //     console.log("1sec");
// // // }, 1000)

// // // const currentTimestamp = () => new Date().toISOString();

// // // const createRandomNumber = limit => Math.round(Math.random() * limit);

// // // const add = (a, b) => a + b;

// // // // console
// // // console.log(currentTimestamp())

// // // console.log(createRandomNumber(100));

// // // console.log(add(1, 5))
//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------
// // // // var a = "abc";
// // // // let nameUsingLet = "asdfghjkl"
// // // // const nameWithUsingConst = "qaswedfrtghy"; // const value cant be changes after declaration
// // // // a = "def";
// // // // console.log(a);

// // // // if (1== 1) {
// // // //     nameUsingLet = "qwsaerfdtyhg";
// // // //     // nameWithUsingConst = "wsaqrfdeyhgt";
// // // //     // const nameWithUsingConstInsideALoop = "qaswedfrtghy"; // const cant be accessed outside loops if declared inside loop similar to let
// // // // }

// // // // console.log(nameUsingLet)

// // // // if (true) {
// // // //     var b = "ghi"; // This can be globally accessed
// // // //     let bInsideIfCondition = "qwertyuio"; // This can't be globally accessed
// // // // }

// // // // for (var index = 0; index < 10; index++) { // Here, as index is declared as var, the for loop runs then the console is printed. So the setTimout prints the last index value which is 10
// // // //     setTimeout(()=>{
// // // //         console.log(index)
// // // //     }, 0)
// // // // }

// // // // for (let index = 0; index < 10; index++) { // ES6 introduced let
// // // //     setTimeout(()=>{
// // // //         console.log(index)
// // // //     }, 0)
// // // // }

// // // // function c() {
// // // //     var name = "ashutosh"; // accessable only inside the function
// // // // }
// // // // c();

// // // // console.log(b);
// // // // // console.log(name);
// // // // console.log(nameUsingLet);
// // // // // console.log(bInsideIfCondition);
//-------------------------------------------------------------------------------------------------------------------------------------