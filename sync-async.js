const fs = require("fs");

// Async
console.log("Async reading file");
fs.readFile("./phonebook.json", (err, data)=>{
    console.log(`Async File content - ${data}`);
})
console.log("Async ending file");

// Sync
console.log("Sync starting read file");
const content = fs.readFileSync("./phonebook.json");
console.log(`Sync File content - ${content}`);
console.log("Sync Ending read file");
console.log("-------------------------------------------------");
// console.log("starting read file");
// const content1 = fs.readFileSync("./LICENSE");
// console.log(`File content - ${content1}`);
// console.log("Ending read file");
// console.log("-------------------------------------------------");
// console.log("starting read file");
// const content2 = fs.readFileSync("./README.md");
// console.log(`File content - ${content2}`);
// console.log("Ending read file");
// console.log("-------------------------------------------------");