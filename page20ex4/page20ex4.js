
console.log("***********Page-20 ex-4***********")
console.log("בתוך הקלט שלם בין 1 לבין .9,999 הצג את מספר ספרותיו")

var num = Number(prompt("Enter number between 1-9,999 "));
if (num < 10) {
    console.log("The number has 1 digit")
}
if (num >= 10 && num <= 99) {
    console.log("The number has 2 digits")
}
if (num >= 100 && num <= 999) {
    console.log("The number has 3 digits")
}
if (num >= 1000 && num <= 9999) {
    console.log("The number has 4 digits")
}