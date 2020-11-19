import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        bookShelfs: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
        booksInShelfs: PropTypes.array
    }

    static defaultProps = {
        booksInShelfs: []
    }
    
    state = {
        bookShelf: null
    }

    componentDidMount() {
        if (this.checkBookInShelfAlready()[0]) {
            this.setState({
                bookShelf: this.checkBookInShelfAlready()[0].shelf
            })
        } else {
            this.setState({
                bookShelf: this.props.book.shelf
            })
        }
    }

    checkBookInShelfAlready() {
        const alreadyInShelf = this.props.booksInShelfs.filter(bookInShelf => {
            return bookInShelf.id === this.props.book.id
        })
        return alreadyInShelf
    }

    bookShelfHandler = (e) => {
        const bookShelf = e.target.value
        this.setState({
            bookShelf
        })
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.book.shelf = this.state.bookShelf
        if (prevState.bookShelf !== null && prevState.bookShelf !== this.props.book.shelf) {
            this.props.updateBookShelf(this.props.book)
        }
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.bookShelf ? this.state.bookShelf : 'none'} onChange={this.bookShelfHandler}>
                    <option value="move" disabled>Move to...</option>
                    {this.props.bookShelfs.map((bookShelf, i) =>
                        <option key={i} value={bookShelf.value}>{bookShelf.name}</option>)}
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger
