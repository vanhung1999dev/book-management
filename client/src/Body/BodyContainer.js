import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ViewBook from './ViewBook';

function BodyContainer(props) {

    const [books, setBooks] = useState([]);
    const { selectedItem, setSelectedItem, filter, setFilter } = props;

    const filterBooks = async () => {
        const { data } = await Axios.get(`http://localhost:3001/books?name=${selectedItem}&&title=${filter}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('jwt')}`
            }
        });
        setBooks(data);
        console.log('Book :', data);
    }

    useEffect(() => {
        filterBooks();
    }, [selectedItem, filter]);

    if (books.length === 0)
        return (
            <div><h1 style = {{padding:"200"}}>No Book</h1></div>
        )
    else
        return (
            <div>
                {books.map(book => <ViewBook key = {book.id} book={book} />)}
            </div>
        )
}

export default BodyContainer
