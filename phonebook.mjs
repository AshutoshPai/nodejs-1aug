import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import fs from "fs";

const argv = yargs(hideBin(process.argv)).argv;


const { operation, name, email, mobile } = argv;

// console.log(operation, name, email, mobile);

const filePath = "./phonebook.json";

switch (operation) {
    case "list":
        {
            fs.readFile(filePath, "utf-8", (err, data) => {
                if (err) {
                    throw ("File read error occured");
                }
                const content = JSON.parse(data);

                content.forEach((person) => {
                    console.log("------------------------------------------------------");
                    console.log(`Name: ${person.name}`);
                    console.log(`Name: ${person.email}`);
                    console.log(`Name: ${person.mobile}`);
                })
            })
        }

        break;

    case "add":
        {
            fs.readFile(filePath, "utf-8", (err, data) => {
                if (err) {
                    throw ("File read error occured");
                }
                const content = JSON.parse(data);

                content.push({ name, email, mobile });

                fs.writeFile(filePath, JSON.stringify(content), () => {
                    console.log("New user added to Phonebook");
                });
            })
        }

        break;

    // case "delete":
    //     {
    //         fs.readFile(filePath, "utf-8", (err, data) => {
    //             if (err) {
    //                 throw ("File read error occured");
    //             }
    //             const content = JSON.parse(data);

    //             content.push({ name, email, mobile });

    //             fs.writeFile(filePath, JSON.stringify(content), () => {
    //                 console.log("New user added to Phonebook");
    //             });
    //         })
    //     }

    //     break;

    default:
        break;
}

/* // Search
    - Name
// add
    - Name
    - Phone
    - Email
// Delete
    - Name */