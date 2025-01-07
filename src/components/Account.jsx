/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React from 'react';
import { useGetReservationsQuery, useRemoveReservationMutation } from './userSlice';
import { usePatchBookMutation } from './bookSlice';


const AccountPage = () => {
 
  const { data: reservations, isLoading, error} = useGetReservationsQuery();

  const [removeBook] = useRemoveReservationMutation();
  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>error loading: {error.message}</p>
  }

  const returnBook = async(id) => {
    const response = await removeBook({reservationId: id});
    console.log(response);
  }
  console.log(reservations);
  
  return (
    <>
    <div>
      <h1>Checked Out Books:</h1>
    </div>
    {reservations.reservation.length ? (
      reservations.reservation.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <img src={book.coverimage} />
          <h5>{book.author}</h5>
          <p>{book.description}</p>
          <button onClick={() => returnBook(book.id)}>Return Book</button>
        </div>
      ))
    ) : (<div>
      <h3>No reservations</h3>
    </div>)}
    
    </>
  );
};

export default AccountPage;