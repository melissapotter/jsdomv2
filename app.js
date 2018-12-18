const wmf = document.querySelector('#book-list li:nth-child(2) .name').innerText;

// console.log(wmf); 

var books = document.querySelector('#book-list li .name').innerText;

// console.log(books);

books = document.querySelectorAll('#book-list li .name');

// console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
})
