import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = ({ allBooks, title, value, bookShelfs }) => {
    const booksInShelf = (shelfName) => {
        const books = allBooks.filter(book => {
            return book.shelf === shelfName
        })
        return books
    }

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{title}</h2>
            <div className='bookshelf-books'>
                <ol className='books-grid'>
                    {booksInShelf(value).map(book => 
                    <Book
                    key={book.id}
                    book={book}
                    id={book.id}
                    imageURL={book.imageLinks.thumbnail}
                    bookTitle={book.title}
                    authors={book.authors}
                    bookShelfs={bookShelfs} />)}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    allBooks: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    bookShelfs: PropTypes.array.isRequired
}

export default BookShelf
