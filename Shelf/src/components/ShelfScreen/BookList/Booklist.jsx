import BookItem from '/BookItem/BookItem.jsx'




const BookList = () => {
    return (
        <div className="book-list" id="bookList">
            {books.map(book) => <BookItem book={...book} />}
        </div>
    )
}

export default BookList