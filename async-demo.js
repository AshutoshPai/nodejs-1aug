const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

// Custom read and write
function customReadfile(name, encoding) {
    return new Promise(function(resolve, reject) {
        readFile(name, encoding, (err, data)=>{
            if (err) {
                return reject(err);
            }
            resolve(data);
        })
    })
}

function customWritefile(name, data) {
    return new Promise(function(resolve, reject) {
        writeFile(name, data, ()=>{
            resolve(data);
        });
    })
}

async function main() {
    try {
        const content = await customReadfile("./phonebook.json", "utf-8")
        await customWritefile("./phonebook-promise.json", content);
        const content2 = await customReadfile("./phonebook-promise.json", "utf-8");
        console.log("Content: " + content2);
    } catch (error) {
        console.log(error);
    }
}

main();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Async await
// const promisifyReadfile = promisify(readFile);
// const promisifyWritefile = promisify(writeFile);

// async function main() {
//     try {
//         const content = await promisifyReadfile("./phonebook.json", "utf-8")
//         await promisifyWritefile("./phonebook-promise.json", content);
//         const content2 = await promisifyReadfile("./phonebook-promise.json", "utf-8");
//         console.log(content2);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// W Promise
// const promisifyReadfile = promisify(readFile);
// const promisifyWritefile = promisify(writeFile);

// promisifyReadfile("./phonebook.json", "utf-8").then((content)=>{
//     return promisifyWritefile("./phonebook-promise.json", content).catch(()=>{});
// })
// .then(()=>{
//     return promisifyReadfile("./phonebook-promise.json", "utf-8").catch(()=>{});
// })
// .then((contentCopy)=>{
//     console.log(contentCopy);
// })
// .catch(()=>{
//     console.log("error occured")
// })

// W/O Promise
// readFile("./phonebook.json", "utf-8", (err, content)=>{
//     if (err) {
//         console.log("error occured");
//     }
//     writeFile("./phonebook-callback.json", content, ()=>{
//         readFile("./phonebook-callback.json", "utf-8", (errCopy, contentCopy)=>{
//             if (errCopy) {
//                 console.log("errorCopy occured");
//             }
//             console.log(contentCopy);
//         })
//     })
// })
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Callback chaining
// function add(a, b, callback) {
//     setTimeout(()=>{
//         callback(a + b)
//     }, 0);
// }

// add(1, 1, (result)=>{
//     add(result, 5, (result2)=>{
//         add(result2, 7, (result3)=>{
//             add(result3, 20, (result4)=>{
//                 console.log(result4);
//             })
//         })
//     })
// })
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// function add(a, b, callback) {
//     setTimeout(()=>{
//         callback(a + b)
//     }, 0);
// }

// const result = add(1, 2, (result)=>{
//     console.log(result);
// });
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// //sync
// console.log(1);
// //sync
// console.log(2);
// //async
// setTimeout(()=> {console.log(3)}, 1000);
// //async
// setTimeout(()=> {console.log(4)}, 500);
// //sync
// console.log(5);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------