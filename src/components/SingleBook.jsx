import { useGetBookQuery, usePatchBookMutation } from "./bookSlice";
import { useParams } from "react-router-dom";


const SingleBook = () => {
const {bookId} = useParams();
const { data: book, isLoading, error} = useGetBookQuery(bookId);

const [patchBook] = usePatchBookMutation();

if(isLoading){
  return <p>Loading...</p>
}

if(error){
  return <p>Error loading book: {error.message}</p>
}

const checkOut = async(id) => {
  const response = await patchBook({ bookId: id, available: false });
  console.log(response);

}

console.log(book);
  return (
    <>
    
      
      <div key={book.book.id}>
        <img src={book.book.coverimage} />
        <h3>{book.book.title}</h3>
        <h5>{book.book.author}</h5>
        <p>{book.book.description}</p>
        <button onClick={() => checkOut(book.book.id)}>{book.book.available ? "Available" : "Checked Out"}</button>
     
    </div>
    <a href="/">
      <button>Go back</button>
    </a>
    </>
  )
}

export default SingleBook;