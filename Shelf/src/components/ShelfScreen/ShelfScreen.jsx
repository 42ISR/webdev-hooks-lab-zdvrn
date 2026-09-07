import { useState } from 'react'
import BookList from "/BookList/BookList.jsx"

const books = [
      { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
      { id: 2, title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
      { id: 3, title: 'Пиранези', author: 'Сюзанна Кларк', read: false },
    ]

const ShelfScreen = () => {
    
    const [book, setBook] = useState(books)
    
    return (
        <>
        <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <p className="greeting-sub" id="shelfSubtitle">
        На полке пока пусто
      </p>
      <div className="add-book-row">
        <input
          className="input"
          id="bookInput"
          placeholder="Название книги..."
        />
        <button className="btn" id="addBtn">
          Добавить на полку
        </button>
      </div>
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <div className="filter-chip">
          <input type="checkbox" id="filterCheckbox" />
          <label htmlFor="filterCheckbox">
            <span className="dot" />
            Только непрочитанные
          </label>
        </div>
      </div>
      <BookList book = {book}/>
    </section>
    </>
    )
}

export default ShelfScreen