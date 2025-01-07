/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllBooksQuery } from './bookSlice';

const BookList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { data: books, isLoading, error} = useGetAllBooksQuery();
  
if(isLoading){
  return <p>Loading....</p>
}
if(error){
  return <p>Error loading books: {error.message}</p>
}

const getBookDetails = (id) => {
  navigate(`/books/${id}`)
}
  const filteredBooks = books.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        label="Search Books"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      <div>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <img src={book.coverimage} />
            <p>{book.available}</p>
            <button onClick={() => getBookDetails(book.id)}>Get details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;