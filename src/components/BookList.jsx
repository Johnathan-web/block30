
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