// let titles = document.getElementsByClassName('title');
// let titlesArray = Array.from(titles);

// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(titlesArray));

// titlesArray.forEach(function(item){
//     console.log(item)
// })

// const wmf= document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

let books = document.querySelectorAll('#book-list li .name');
// console.log(books);

books.forEach(function(book){
    book.textContent += (" Book Title");
}); 

const bookList = document.querySelector('#book-list');

// bookList.innerHTML='<h2>Books and more books..</h2>';
bookList.innerHTML+='<p>This is how you append a paragraph</p>';


//nodes
const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);

console.log('#page-banner node has child nodes', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
//made true if you also want to clone the children

// console.log(clonedBanner);

//
//const bookList = document.querySelector('#bookList');
console.log('the parent node is:', bookList.parentNode);

//travers even higher up the dom
console.log('the parent element is:', bookList.parentElement.parentElement);

//childNodes will also give us the text linebreaks, so use children insteead
//console.log(bookList.childNodes);

console.log(bookList.children);

//siblings
console.log('Booklist next sibling is:', bookList.nextSibling);
console.log('Booklist next element sibling is:', bookList.nextElementSibling);

console.log('Booklist previous element sibling is:', bookList.previousElementSibling);

//add a paragraph to the previous div
bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else';

