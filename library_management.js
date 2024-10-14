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

