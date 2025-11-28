
import React, {useState} from 'react'
import Addbook from "./Components/AddBook.jsx"
import Booklist from "./Components/BookList.jsx"

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
     <Addbook></Addbook>
     <Booklist></Booklist>
    </>
  )

  };

export default App
