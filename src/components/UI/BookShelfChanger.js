import React from 'react'

const BookShelfChanger = ({ book, bookShelfs }) => {
    const bookShelfHandler = (e) => {

    }
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} onChange={(e)=>bookShelfHandler(e)}>
                <option value="move" disabled>Move to...</option>
                {bookShelfs.map((bookShelf, i) => 
                <option key={i} value={bookShelf.value}>{bookShelf.name}</option>)}
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger
