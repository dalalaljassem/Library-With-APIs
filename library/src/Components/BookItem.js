import BookDetailModal from "./BookDetailModal";

function BookItem({ book }) {

  return (
    <div>
      <BookDetailModal book={book}/>
      <div className="book" >
     <p> Title : {book.title}</p> 
     <p>Author : {book.author}</p>
      </div>
    </div>
  );
}

export default BookItem;
