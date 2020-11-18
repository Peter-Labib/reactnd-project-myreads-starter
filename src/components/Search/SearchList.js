import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

const SearchList = ({ bookShelfs, updateBookShelf, searchResult }) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {searchResult.map(book => (
                    <React.Fragment key={book.id}>
                        <Book
                            book={book}
                            id={book.id}
                            imageURL={book.imageLinks.thumbnail}
                            authors={book.authors}
                            bookTitle={book.title}
                            bookShelfs={bookShelfs}
                            updateBookShelf={(book) => updateBookShelf(book)}
                        />
                    </React.Fragment>
                ))}
            </ol>
        </div>
    )
}

SearchList.propTypes = {
    bookShelfs: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    searchResult: PropTypes.array
}

export default SearchList
