class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        // Add implementation
    }

    removeBook(index) {
        // Add implementation
    }

    toggleReadStatus(index) {
        // Add implementation
    }
}

// DOM Elements
const addBookBtn = document.getElementById('addBookBtn');
const bookFormModal = document.getElementById('bookFormModal');
const bookForm = document.getElementById('bookForm');
const libraryDisplay = document.getElementById('libraryDisplay');

// Event Listeners
addBookBtn.addEventListener('click', () => {
    // Show modal implementation
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form handling implementation
});

// Function to create and display book cards
function displayBooks() {
    // Display implementation
}

// Function to create a single book card
function createBookCard(book, index) {
    // Card creation implementation
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

