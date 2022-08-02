console.log("Welcome to Calculator");

const number1 = Number(process.argv[2]);
const operation = process.argv[3];
const number2 = Number(process.argv[4]);

console.log(`you have entered - ${number1}, ${number2} for the ${operation}`);

switch (operation) {
    case "+":
        console.log(`The result is: ${number1 + number2}`);
        break;

    case "-":
        console.log(`The result is: ${number1 - number2}`);
        break;

    case "x":
        console.log(`The result is: ${number1 * number2}`);
        break;

    case "/":
        console.log(`The result is: ${number1 / number2}`);
        break;

    default:
        console.log(`${operation} - Not a valid operation`);
        break;
}