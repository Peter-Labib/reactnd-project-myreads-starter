import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './UI/BookShelfChanger'

const Book = ({ book, imageURL, authors, bookTitle, bookShelfs, updateBookShelf }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
                    <BookShelfChanger
                        book={book}
                        bookShelfs={bookShelfs}
                        updateBookShelf={(book) => updateBookShelf(book)}
                    />
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{authors && authors.join(', ')}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    imageURL: PropTypes.string,
    authors: PropTypes.array,
    bookTitle: PropTypes.string,
    bookShelfs: PropTypes.array
}

export default Book
