let num1 = 5;
let num2 = 2;
let operacao = "+";

switch (operacao) {
    case "+": 
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*" || "x":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 * num2);
        break;
    default:
        console.log("Operação incorreta digitada.");
}