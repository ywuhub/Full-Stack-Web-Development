// Project: Small Library App
// Description: A library app that you can add/books to the library and view the books in the library.
// Link: https://www.theodinproject.com/courses/javascript/lessons/library
let myLibrary = [];

// Book Constructor
function Book(title, author, npages) {
    this.title = title
    this.author = author
    this.npages = npages
}

// Add Book Function
function addBookToLibrary(title, author, npages) {
    // make new book object and add to list
    myLibrary.push(new Book(title, author, npages));

    // display newly added book in library
    var newRow = document.getElementById('library').insertRow();
    var cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2);
    
    // append text node to the cells
    var cell1Text = document.createTextNode(title);
    cell1.appendChild(cell1Text);

    var cell2Text = document.createTextNode(author);
    cell2.appendChild(cell2Text);

    var cell3Text = document.createTextNode(npages.toString());
    cell3.appendChild(cell3Text);

}

// Remove Book Function
function removeBookFromLibrary() {

}