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

// Task 3: Define the Patron Class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    // Method to borrow a book if available
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
    }

    // Method to return a borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true;
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
}

// Task 4: Define the VIPPatron Class with Inheritance
class VIPPatron extends Patron {
    constructor(name, priority = true) {
        super(name);
        this.priority = priority;
    }

    // Overriding the borrowBook method
    borrowBook(book) {
        if (this.priority || book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`VIP ${this.name} borrowed "${book.title}" with priority.`);
        } else {
            console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
    }
}

// Task 5: Method to Calculate Total Available Books in Section
Section.prototype.calculateTotalBooksAvailable = function() {
    return this.books.filter(book => book.isAvailable).length;
};

// Task 6: Set up Library Structure with Sections, Books, and Patrons

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith");

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book with priority
vipPatron.borrowBook(book1); // Since the VIP has priority, they can borrow

// Regular patron returns the book
regularPatron.returnBook(book1);

// List books in sections
console.log("Books in Fiction Section:");
fiction.listBooks();
console.log("Books in Science Section:");
science.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);





