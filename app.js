let booksContainer = document.getElementById('books');

//These are variables which would store the users inputs.
let title = '';
let author = '';
let pages;
let bookStatus;

//This is the constructor.
function Book(title, author, pages, bookStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookStatus = bookStatus;
}

const library = [];

const newBook = (title,author,pages,bookStatus) => {
    let newBook = new Book(title, author, pages, bookStatus);
    library.push(newBook);
}

const displayBook = () => {
    document.getElementById('books').innerHTML = '';
    library.forEach((book, index)=>{
        let card = document.createElement('div');
        let titleText = document.createElement('h3');
        titleText.innerHTML = book.title;
        card.appendChild(titleText);
        let authorText = document.createElement('h4');
        authorText.innerHTML = book.author;
        card.appendChild(authorText);
        let pagesNumber = document.createElement('p');
        pagesNumber.innerHTML = book.pages;
        card.appendChild(pagesNumber);
        let statusLabel = document.createElement('span'); 
        statusLabel.innerHTML = book.bookStatus;
        card.appendChild(statusLabel);
        let deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
        card.appendChild(deleteButton);
        card.dataset.index = index;
        deleteButton.addEventListener('click',(e)=>{
            let index = e.currentTarget.dataset.index;
            library.splice(index,1);
            card.remove();
        })
        document.getElementById('books').appendChild(card);
    })
}

document.querySelector('form').addEventListener('submit',()=>{
    event.preventDefault();
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    bookStatus = document.getElementById('status').value;
    newBook(title,author,pages,bookStatus);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('status').value = 'Not-Read';
    displayBook();
    console.log(library);
})

document.getElementById('delete-button').addEventListener('click',(e)=>{
    
    displayBook();
})

