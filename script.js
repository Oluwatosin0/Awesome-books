//Create a collection that keeps a list of books
class listOfBooks {
    constructor () {
        this.bookCollection = []
    }}

if (localStorage.getItem("bookCollection")) {
    bookCollection = JSON.parse(localStorage.getItem("bookCollection"));
  }

//Create a function to add a new book to the collection, with title and author
addBook (author, title){
    const book ={
        author: 'author',
        title:'title'
    };
    bookCollection.push(book)
}

//Create a function to remove a book from the collection (hint: you can use the array filter() method)
removeBook (author, title){
    const initialLength = bookCollection.length;
    bookCollection = bookCollection.filter(book => !book.author.title.toLowerCase().includes(author.title.toLowerCase()));
    if (bookCollection.length === initialLength){
        console.log(`No books with the title "${title}" author "${author}" were found in the collection.`)
    }else {
        console.log(`Book(s) with the title "${title}" author "${author}" have been removed from the collection`)
    }
}

//Display all books saved in the collection in the top part of the page
listOfBooks() {
    console.log("List of Books:");
    bookCollection.forEach((book, index) => {
        console.log(`${index + 1}. Title:${book.title}. Author:${book.author}`);
    })
}

//Make sure that when a user clicks the "Add" button: A new book is added to the collection.
document.getElementById('add-button').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    addBook(title, author);

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
});


displayBookList();

localStorage.setItem("bookCollection", JSON.stringify(bookCollection));

