import React, { Component } from 'react'

class BookShelfChanger extends Component {
    state = {
        bookShelf: null
    }

    componentDidMount() {
        this.setState({
            bookShelf: this.props.book.shelf
        })
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
