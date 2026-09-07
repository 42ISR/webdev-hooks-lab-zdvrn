const BookItem = ({...book}) => {
    
    const handleDelete = () => {}
    const handleComplete = () => {}
    
    
    return (
        <div className="book-row" data-id="">
        <div className="book-cover">{id}</div>
        <div className="book-info">
          <p className={`book-title${read ? ' done' : ''}`}>{title}</p>
          <div className="book-author">{author}</div>
        </div>
        <div className={`read-check ${read ? ' checked' : ''}`} data-role="toggle">
          <span className="check-circle">✓</span>
          <span className="read-label">Прочитано</span>
        </div>
        <button className="delete-btn" data-role="delete" title="Убрать с полки">✕</button>
      </div>
    )
}

export default BookItem