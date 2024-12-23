var display = document.getElementById("display");
var addBtn = document.getElementById("addBtn");
var bookName = document.getElementById("tittle");
var bookAuthor = document.getElementById("author");
var bookPages = document.getElementById("pages");
var bookRead = document.getElementById("status");


const myLibrary = [];

function Book(tittle, author, pages, read){
  this.tittle = tittle;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.display = function(){
    display.innerHTML = ;
  }
}

function addBookToLibrary(){
  
}

// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function(){
//         console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
//     }
// }

// book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
// book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");


// book1.info();
// book2.info();

// Basically Inheritance
// function Players(name,score){
//     this.name = name;
//     this.score = score;

//     Players.prototype.sayHello = function(){
//         console.log(`Hello I'm a player.`)
//     }
// }

// player1 = new Players()
// player2 = new Players()

// player1.sayHello();
// player2.sayHello();


// Example
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayName = function () {
//     console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// Player.prototype.getMarker = function () {
//     console.log(`My marker is '${this.marker}'`);
// };

// Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// // Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype); // returns Person.prototype

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');

// player1.sayName(); // Hello, I'm steve!
// player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
// player2.getMarker(); // My marker is 'O'

