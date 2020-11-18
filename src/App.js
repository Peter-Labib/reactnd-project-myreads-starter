import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/Search/SearchPage'
import './App.css'

const bookShelfs = [
  {
    name: 'Currently Reading',
    value: 'currentlyReading'
  },
  {
    name: 'Want to Read',
    value: 'wantToRead'
  },
  {
    name: 'Read',
    value: 'read'
  }
]

class BooksApp extends Component {
  state = {
    books: [],
    bookList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    }).catch(err => console.log('error', err))
  }

  bookShelfHandler = (book) => {
    const booksStateWithoutEditedOne = this.state.books.filter(edited => {
      return edited.id !== book.id
    })
    BooksAPI.update(book, book.shelf)
      .then(() => {
        this.setState({
          books: booksStateWithoutEditedOne.concat(book)
        })
      })
      .catch(err => console.log(err))
  }

  bookListHandler(query) {
    BooksAPI.search(query).then(books => {
      this.setState({
        bookList: books
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <Route path='/' exact render={() => (
          <HomePage
            bookShelfs={bookShelfs}
            updateBookShelf={this.bookShelfHandler}
            books={this.state.books}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchPage
            bookShelfs={bookShelfs}
            addNewBook={this.bookShelfHandler}
            booksList={this.state.bookList}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
