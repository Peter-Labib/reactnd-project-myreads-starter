import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../BooksAPI'
import SearchInput from './SearchInput'
import SearchList from './SearchList'

class SearchPage extends Component {
    static propTypes = {
        bookShelfs: PropTypes.array.isRequired,
        addNewBook: PropTypes.func.isRequired,
        booksInShelfs: PropTypes.array.isRequired
    }

    state = {
        booksList: []
    }

    bookListHandler(query) {
        if (query.trim()) {
            BooksAPI.search(query).then(books => {
                this.setState({
                    booksList: books
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                booksList: []
            })
        }

        // }
        // componentWillUnmount() {
        //     this.setState = () => {
        //         return;
        //     };
    }
    render() {
        return (
            <div className="search-books">
                <SearchInput searchValue={(q) => this.bookListHandler(q)} />
                <SearchList
                    bookShelfs={this.props.bookShelfs}
                    updateBookShelf={(book) => this.props.addNewBook(book)}
                    searchResult={this.state.booksList}
                    booksInShelfs={this.props.booksInShelfs}
                />
            </div>
        )
    }
}


export default SearchPage
