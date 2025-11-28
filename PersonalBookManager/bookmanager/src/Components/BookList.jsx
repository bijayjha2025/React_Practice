
import React from "react";
import BookCard from "./BookCard";


const BookList = ({books, onToggleFavorite, onToggleRead, onDelete}) =>{
    if(books.length === 0){
        return <p>No books added yet!</p>
    }

    return(
        <>
        <div className="bookList">{
            books.map((book) => (
                <BookCard
                key={book.id}
                book={book}
                onToggleFavorite={onToggleFavorite}
                onToggleRead={onToggleRead}
                onDelete={onDelete}/>
            ))}
        </div>
        </>
    );
}

export default BookList