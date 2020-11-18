import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = ({ title, value, bookShelfs, updateBookShelf, allBooks }) => {
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
                            id={book.id}
                            book={book}
                            imageURL={book.imageLinks.thumbnail}
                            authors={book.authors}
                            bookTitle={book.title}
                            bookShelfs={bookShelfs}
                            updateBookShelf={(book) => updateBookShelf(book)}
                        />)}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    bookShelfs: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired
}

export default BookShelf
