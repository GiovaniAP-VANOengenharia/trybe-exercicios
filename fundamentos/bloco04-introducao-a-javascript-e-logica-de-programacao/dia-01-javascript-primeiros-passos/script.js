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
    console.log("algum ângulo é um valor inválido.")
}
if (e + f + g == 180){
    console.log(true);
}
else if (e + f + g != 180){
    console.log(false);
}