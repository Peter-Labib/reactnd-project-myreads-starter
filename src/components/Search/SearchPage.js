import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../BooksAPI'
import SearchInput from './SearchInput'
import SearchList from './SearchList'

class SearchPage extends Component {
    static propTypes = {
        bookShelfs: PropTypes.array.isRequired,
        addNewBook: PropTypes.func.isRequired,
        booksList: PropTypes.array.isRequired
    }

    state = {
        booksList: []
    }

    bookListHandler(query) {
        BooksAPI.search(query.trim()).then(books => {
            this.setState({
                booksList: books
            })
        }).catch(err => {
            console.log(err)
        })
    }
    componentWillUnmount() {
        this.setState = () => {
            return;
        };
    }
    render() {
        return (
            <div className="search-books">
                <SearchInput searchValue={(q) => this.bookListHandler(q)} />
                <SearchList
                    bookShelfs={this.props.bookShelfs}
                    updateBookShelf={(book) => this.props.addNewBook(book)}
                    searchResult={this.state.booksList}
                />
            </div>
        )
    }
}


export default SearchPage
