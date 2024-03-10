
console.log("***********Page-27 ex-2***********")
console.log(" קלוט שני שלמים והצג את כל השלמים ביניהם - כולל בסדר עולה. לא מובטח שהנתון השני גדול מהראשון")

var num1 = Number(prompt("please enter the first number"))
var num2 = Number(prompt("please enter the second number"))
while (num1 <= num2) {
    console.log(num1);
    num1++
}
while (num1 >= num2) {
    console.log(num2);
    num2++
}