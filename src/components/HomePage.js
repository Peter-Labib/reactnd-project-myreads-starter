import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const HomePage = ({ bookShelfs, updateBookShelf, books }) => {
    return (
        <div className='list-books'>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {bookShelfs.map((bookShelf, i) =>
                        <BookShelf
                            key={i}
                            title={bookShelf.name}
                            value={bookShelf.value}
                            bookShelfs={bookShelfs}
                            updateBookShelf={(book) => updateBookShelf(book)}
                            allBooks={books}
                        />)}
                </div>
            </div>
            <Link to='/search' className="open-search">
                <button >Add a book</button>
            </Link>
        </div>
    )
}

HomePage.propTypes = {
    bookShelfs: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default HomePage

