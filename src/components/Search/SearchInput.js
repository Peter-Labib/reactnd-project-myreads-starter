import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export class SearchInput extends Component {
    static propTypes = {
        searchValue: PropTypes.func.isRequired
    }

    state = {
        bookTitle: ''
    }

    inputHandler(e) {
        this.setState({
            bookTitle: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.bookTitle !== this.state.bookTitle) {
            this.props.searchValue(this.state.bookTitle)
        }
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.bookTitle}
                        onChange={(e) => this.inputHandler(e)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchInput
