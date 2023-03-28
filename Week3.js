//Assignment

let x = 16;
let y = x + 8;
console.log(y)

let smth = 67;
let moreSmth = smth >= 67;
let lessSmth = smth < 67;

console.log(moreSmth);
console.log(lessSmth);

//If Else Statements

let books = [
    {name: "Alise in wonderland", id: 1},
    { name: "Games of Thrones", id: 2 },
    { name: "Hobbit", id: 3 },
    { name: "It", id: 4 },
    { name: "Harry Potter", id: 5 },
];

let choose = prompt("Please, enter the number from 1 to 5");

if (choose == books[0].id) {
    console.log(books[0].name)
} else if
(choose == books[1].id) {
    console.log(books[1].name)
} else if 
(choose == books[2].id) {
    console.log(books[2].name)
} else if 
(choose == books[3].id) {
    console.log(books[3].name)
} else if 
(choose == books[4].id) {
    console.log(books[4].name)
}
else if (choose >= 6 || choose == 0) {
    console.log("You have written wrong number")
} else {
    console.log("Please, write a number")
}

//Ternary expression

choose <= 5 ? (console.log("True")) : (console.log("False"));

let allLessons = 24;
let doneLessons = 14
leftLessons = () => {
 let lessons = allLessons - doneLessons;
    console.log(lessons)
} 
leftLessons() > 12 ? (console.log("You have done more then half course")) : (console.log("You have done less then half course"));





