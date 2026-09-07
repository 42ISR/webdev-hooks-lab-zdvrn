const BookItem = ({ book }) => {
  const { id, title, author, read } = book

  const coverPalette = ['#7c5a3c', '#4f6b52', '#7a3b3b', '#3f5566', '#8a6b3f', '#5c4a72']
  
  const coverColor = (id) => {
    return coverPalette[id % coverPalette.length]
  }

  const handleDelete = () => {
    console.log('Delete book:', id)
  }

  const handleComplete = () => {
    console.log('Toggle read status:', id)
  }

  return (
    <div className="book-row" data-id={id}>
      <div 
        className="book-cover" 
        style={{ backgroundColor: coverColor(id) }}
      >
        {title[0] || '?'}
      </div>
      <div className="book-info">
        <p className={`book-title${read ? ' done' : ''}`}>{title}</p>
        <div className="book-author">{author}</div>
      </div>
      <div 
        className={`read-check ${read ? ' checked' : ''}`} 
        data-role="toggle"
        onClick={handleComplete}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button 
        className="delete-btn" 
        data-role="delete" 
        title="Убрать с полки"
        onClick={handleDelete}
      >
        ✕
      </button>
    </div>
  )
}

export default BookItem