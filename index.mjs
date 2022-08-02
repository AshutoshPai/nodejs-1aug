import fs from "fs";
import path from "path";

const filePath = "./contents/message.txt";

console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.isAbsolute(filePath));
console.log(path.basename(filePath));

const content = fs.readFile("./contents/message.txt", (err, data) => {
    if (err) {
        console.log("File empty", err);
        return false;
    }
    console.log(data.toString());
});

var buff1 = Buffer.from('123456789');
var buff2 = Buffer.from('Hello');
buff2.copy(buff1, 2);
console.log(buff1.toString());
console.log(Buffer.concat([buff1, buff2]).toString());
console.log(buff1.equals(buff2));
console.log(Buffer.compare(buff1, buff2));