import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

class SearchList extends Component {
    state = {
        searchListtBooks: []
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchResult !== this.props.searchResult) {

            if (this.props.searchResult.length) {
                this.setState({
                    searchListtBooks: this.props.searchResult
                })
            } else {
                this.setState({
                    searchListtBooks: []
                })
            }
        }
    }

    render() {
        const { bookShelfs, updateBookShelf, booksInShelfs } = this.props
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.searchListtBooks.map(book => {
                        if (book.imageLinks) {
                            return (<React.Fragment key={book.id}>
                                <Book
                                    book={book}
                                    id={book.id}
                                    imageURL={book.imageLinks.thumbnail}
                                    authors={book.authors}
                                    bookTitle={book.title}
                                    bookShelfs={bookShelfs}
                                    updateBookShelf={(book) => updateBookShelf(book)}
                                    booksInShelfs={booksInShelfs}
                                />
                            </React.Fragment>)
                        } else {
                            return false
                        }
                    })}
                </ol>
            </div>
        )
    }
}

SearchList.propTypes = {
    bookShelfs: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    searchResult: PropTypes.array
}

export default SearchList
