var a = 0;
var b = 3;
var c = 15;

const d = 1;
const e = 53;
const f = 68;
const g = 59;

/// exerccício 01 ///

res1 = a + b;
res2 = a - b;
res3 = a * b;
res4 = a / b;
res5 = a % b;

/// exercício 02 ///

if (a > b){
    console.log(a);
}
else if (a < b){
    console.log(b);
}
else{
    console.log("a = b")
}

/// exercício 03 ///

if (a > b && b > c){
    console.log(a);
}
else if (a < b && b > c){
    console.log(b);
}
else if (a < b && b < c){
    console.log(c);
}
else{
    console.log("a = b = c")
}

/// exercício 04 ///

if (d > 0){
    console.log("d é positivo");
}
else if (d < 0){
    console.log("d é negativo");
}
else{
    console.log("d = 0")
}

/// exercício 05 ///

if (e < 0 || e > 180 || f < 0 || f > 180 || g < 0 || g > 180){
    console.log("todos os ângulos tem de estar entre 0 e 180º.")
}
if (e + f + g == 180){
    console.log(true);
}
else if (e + f + g != 180){
    console.log(false);
}

/// exercício 06 ///

let peca = "Queen";

peca = peca.toLowerCase();

if (peca == "king"){
    console.log("uma casa em todas as direções.")
}
else if (peca == "queen"){
    console.log("todas as casas em todas as direções.")
}
else if (peca == "root"){
    console.log("todas as casas somente reto.")
}
else if (peca == "bishop"){
    console.log("todas as casas somente na diagonal.")
}
else if (peca == "knight"){
    console.log("três casas em formanto de L em todas as direções.")
}
else if (peca == "pean"){
    console.log("uma casa em todas as direções.")
}
else {
    console.log("isso não existe no xsdrex.")
}

/// exercício 07 ///

let nota = 75;

if (nota <0 || nota > 100){
    console.log("valor inválido.")
}
else if (nota >= 90){
    console.log("nota A")
}
else if (nota >= 80){
    console.log("nota B.")
}
else if (nota >= 70){
    console.log("nota C.")
}
else if (nota >= 60){
    console.log("nota D.")
}
else if (nota >= 50){
    console.log("nota E.")
}
else {
    console.log("nota F.")
}

/// exercício 08 e 09///

const num1 = 7;
const num2 = 15;
const num3 = 13;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    console.log("true");
}
else {
    console.log("false");
}

/// exercicio extra ///

let numbers = [5, 9, 2, 77, 11, 97, 46, 18, 28, 29, 37]

for (i = 0; i < numbers.length - 1; i += 1){
    for (j = i + 1; j < numbers.length; j += 1){
        if (numbers[i] > numbers[j]){
            let aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}
console.log(numbers);

/// exercício 10 ///

const custo = 50;
const preco = 200;

let lucroUnitario = preco - (1.2 * custo);
let lucroTotal = 1000 * lucroUnitario;

console.log(lucroUnitario);
console.log(lucroTotal);

/// exercicio 11 ///

let salarioBruto = [3000.00, 1500.10, 2100.50, 5300.00, 4200.90];
let salarioLiquido = [];

for (i = 0; i < salarioBruto.length; i ++) {
    if (salarioBruto[i] < 1556.94){
        salarioLiquido.push(salarioBruto[i] * 0.92);
    }
    else if (salarioBruto[i] >= 1556.94 && salarioBruto[i] < 2594.92){
        salarioLiquido.push(salarioBruto[i] * 0.91);
    }
    else if (salarioBruto[i] >= 2594.92 && salarioBruto[i] < 5189.82){
        salarioLiquido.push(salarioBruto[i] * 0.89);
    }
    else if (salarioBruto[i] > 5189.82){
        salarioLiquido.push(salarioBruto[i] - 570.88);
    }
}
for (i = 0; i < salarioLiquido.length; i ++) {
    if (salarioLiquido[i] >= 1903.99 && salarioLiquido[i] < 2826.66 ){
        salarioLiquido[i] = salarioLiquido[i] - (salarioLiquido[i] * 0.075 - 142.8);
    }
    else if (salarioLiquido[i] >= 2826.66 && salarioLiquido[i] < 3751.06 ){
        salarioLiquido[i] = salarioLiquido[i] - (salarioLiquido[i] * 0.15 - 354.8);
    }
    else if (salarioLiquido[i] >= 3751.06 && salarioLiquido[i] < 4664.68 ){
        salarioLiquido[i] = salarioLiquido[i] - (salarioLiquido[i] * 0.225 - 636.13);
    }
    else if (salarioBruto[i] > 4664.68){
        salarioLiquido[i] = salarioLiquido[i] - (salarioLiquido[i] * 0.275 - 869.36);
    }
}
console.log(salarioBruto);
console.log(salarioLiquido);
