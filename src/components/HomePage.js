import React, { Component } from 'react'
import * as BookAPI from '../BooksAPI'
import BookShelf from './BookShelf'

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

class HomePage extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BookAPI.getAll().then(books => {
            this.setState({
                books
            })
        }).catch(err => console.log('error', err))
    }

    updateBookShelf =()=>{
        
    }

    render() {
        return (
            <div className='list-books'>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookShelfs.map((bookShelf, i) =>
                            <BookShelf
                                key={i}
                                title={bookShelf.name}
                                value={bookShelf.value}
                                allBooks={this.state.books}
                                bookShelfs={bookShelfs} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage

