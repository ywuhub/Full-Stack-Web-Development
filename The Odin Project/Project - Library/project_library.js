// Project: Small Library App
// Description: A library app that you can add/books to the library and view the books in the library.
// Link: https://www.theodinproject.com/courses/javascript/lessons/library
let myLibrary = []; // Not important?

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
    var newRow = document.getElementById('library').getElementsByTagName('tbody')[0].insertRow();
    var cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3);
    
    // append text node to the cells
    var cell1Text = document.createTextNode(title);
    cell1.appendChild(cell1Text);

    var cell2Text = document.createTextNode(author);
    cell2.appendChild(cell2Text);

    var cell3Text = document.createTextNode(npages.toString());
    cell3.appendChild(cell3Text);

    // add delete book button to last cell
    var btn = document.createElement("button");
    var cell4Text = document.createTextNode("Delete");
    btn.appendChild(cell4Text);
    btn.setAttribute("id", "del-btn");
    btn.setAttribute("onclick", "removeBookFromLibrary()");
    cell4.appendChild(btn);

    // reset form
    document.getElementById('add-form').reset();
}

// Remove Book Function
function removeBookFromLibrary() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}