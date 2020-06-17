import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function BodyContainer(props) {

    const [books, setBooks] = useState([]);
    const { selectedItem, setSelectedItem, filter, setFilter } = props;

    const getBooks = async () => {
        const { data } = await Axios.get(`http://localhost:3001/books?name=${selectedItem}&&title=${filter}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('jwt')}`
            }
        });
        setBooks(data);
        console.log('name catalog:',selectedItem);
        console.log('filter',filter);
        console.log('Book :', data);
    }

    useEffect(() => {
        getBooks();
    }, [selectedItem, filter]);

    if (books.length === 0)
        return (
            <div>No</div>
        )
    else
        return (
            <div>
                {books.map(book => <h1 key={book.isbn}>{book.title}  {book.description}</h1>)}
            </div>
        )
}

export default BodyContainer
