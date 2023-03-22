//varialbe 1
const greetings = prompt("Hello! What is your name?");
const ansver = alert(`Nice to see you ${greetings} on this page!`);
//console.log(ansver);

//varialbe 2
let a = 5;
let b = 8;
console.log(a + b);
console.log(a * b);

//varialbe 3
let x = Math.random();
let y = x * 5;
console.log(y);

//varialbe 4
let bookGenre = [
  "Novel",
  "Fiction",
  "Fantasy",
  "Adventure",
  "Dystopian",
  "Horror",
];
bookGenre.splice(3, 0, "Thriller", "Essays", "Childrens");
console.log(bookGenre);
bookGenre.splice(0, 3);
console.log(bookGenre);

//varialbe 5
const myArr = ["Alisa", "Marta", "Kate", "Donna"];
console.log(myArr.join("").split(""));
console.log(myArr.join());
console.log(myArr.join(" "));
console.log(myArr.join(" and "));

//varialbe 6
let prise = 53.8;
console.log(Math.round(prise));
console.log(Math.floor(prise));

//function 1

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const newBook = "alise in wonderland";
const capitalizedBook = capitalizeFirstLetter(newBook);
console.log(capitalizedBook);

//function 2 (destructuring)
const books = [
  "Alise in wonderland",
  "Games of Thrones",
  "Hobbit",
  "It",
  "Harry Potter",
];

const [first, second, ...rest] = books;
console.log(first);
console.log(second);
console.log(rest);

const book = {
  name: "Harry Potter",
  part: "Philosopher's Stone",
  year: 1997,
  author: "J. K. Rowling",
  country: "United Kingdom",
  genre: "Fantasy",
};

showBook(book);

function showBook({ name, part, year, author, country, genre }) {
  const message =
    "The book " +
    name +
    ": " +
    part +
    " was written by " +
    author +
    " in the year " +
    year +
    ".";
  console.log(message);
}

// function 3 forEach
books.forEach(myFunction);
function myFunction(value) {
  console.log(value);
}

//function 4 (battery API)
navigator
  .getBattery()
  .then(function (battery) {
    console.log("Charge level: " + battery.level * 100 + "%");
    console.log(
      "Battery status: " + battery.charging ? "charging" : "not charging"
    );
  })
  .catch(function (error) {
    console.log("Not found", error);
  });

//function 5 (loops)
const user = {
  name: "Elsa",
  eftername: "Broun",
  age: 35,
};

//show value
for (let a in user) {
  console.log(user[a]);
}

Object.defineProperty(user, "age", { enumerable: false });
for (let a in user) {
  console.log(user[a]);
}

//change value
const user2 = {
  name: "Lora",
  eftername: "Green",
  age: 35,
};

Object.defineProperty(user2, "age", { value: 25 });
for (let b in user2) {
  console.log(user2[b]);
}

//add value
const user3 = {
  name: "Kate",
  eftername: "Red",
  age: 35,
};
//user3.job = "teacher";

Object.defineProperty(user3, "job", {
  value: "teacher",
  writable: true,
  enumerable: true,
  configurable: true,
});
for (let c in user3) {
  console.log(user3[c]);
}
