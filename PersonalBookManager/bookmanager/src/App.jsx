
import React, {useState} from 'react'
import AddBook from "./Components/AddBook.jsx"
import BookList from "./Components/BookList.jsx"

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([book, ...books]);
  };

  const handleToggleRead = (id) =>{
    setBooks(
      books.map((b) =>
      b.id === id ? {...b, isRead: !b.isRead }: b
    )
    );
  }

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  }

    const handleToggleFavorite = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, isFavorite: !b.isFavorite } : b
      )
    );
  };


   return (
    <>
    <div>
      <h1>My Book Collection</h1>
      <AddBook onAddBook = {handleAddBook}/>
      <BookList
      books = {books}
      onToggleFavorite = {handleToggleFavorite}
      onToggleRead = {handleToggleRead}
      onDelete = {handleDeleteBook}/>
    </div>
    
    </>
  );

  };

export default App
