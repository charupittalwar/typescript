console.log("this is type script");
//add sub mul division funs
var Add = function () {
    var a = 10;
    var b = 20;
    var add = a + b;
    console.log(add);
};
Add();
//sub
var Sub = function (a, b) { return a - b; };
var Subreturn = Sub(10, 5);
console.log("sub = ", Subreturn);
//mult
var Mult = function (a, b) { return a * b; };
var Multreturn = Mult(10, 40);
console.log("multification is = ", Multreturn);
//division
var Divi = function (a, b) { return a / b; };
var Divreturn = Divi(40, 20);
console.log("dividion", Divreturn);
//string function
var sent = function () {
    var c = 10;
    var d = "20 abcd";
    var Addition = c + d;
    console.log(Addition.toUpperCase());
    console.log(Addition.length);
    return Addition;
};
var returnAdd = sent();
console.log("returnAdd", returnAdd);
