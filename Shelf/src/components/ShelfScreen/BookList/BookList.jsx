import BookItem from './BookItem/BookItem.jsx'

const BookList = ({ books }) => {
  return (
    <div className="book-list" id="bookList">
      {books.map(book => (<BookItem key={book.id} book={book} />))}
    </div>
  )
}

export default BookList