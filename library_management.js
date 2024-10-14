// Task 1: Define the Book Class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; // Private property for availability status
    }

    // Method to get book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }

    // Getter for availability status
    get isAvailable() {
        return this._isAvailable;
    }

    // Setter for availability status
    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Task 2: Define the Section Class
class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Method to add a book to the section
    addBook(book) {
        this.books.push(book);
    }

    // Method to get the count of available books in the section
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    // Method to list all books in the section
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.getDetails()} - Available: ${book.isAvailable}`);
        });
    }
}

