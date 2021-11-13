const book={
    bookName: 'Learn JavaScript',
    authorName:'Iyal',
    publishingYeary: 2021,
    price: 'Free'
};
function bookDetails(){
console.log("The book "+book.bookName+" was written by "+book.authorName+" in the year "+book.publishingYeary);
}
bookDetails()