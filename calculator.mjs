export default function calculator(num1, op, num2) {
    console.log("Welcome to Calculator");

    const number1 = Number(num1);
    const operation = op;
    const number2 = Number(num2);

    console.log(`you have entered - ${number1}, ${number2} for the ${operation}`);

    switch (operation) {
        case "+":
            return number1 + number2;

        case "-":
            return number1 - number2;

        case "x":
            return number1 * number2;

        case "/":
            return number1 / number2;

        default:
            return null
    }
}