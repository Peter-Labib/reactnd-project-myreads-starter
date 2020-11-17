import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './UI/BookShelfChanger'

const Book = ({ imageURL, bookTitle, authors, book, bookShelfs }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
                    <BookShelfChanger book={book} bookShelfs={bookShelfs} />
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        </li>
    )
}

Book.propTypes= {
    imageURL: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    bookShelfs: PropTypes.array.isRequired
}

export default Book
