

import React from "react";

const BookCard =({book, onToggleFavorite, onToggleRead, onDelete}) =>{
    const {id, title, author, genre, notes, coverUrl, isFavorite, isRead} = book;

    return(
        <>
        <div>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            {genre && <p>Genre: {genre}</p>}
            {coverUrl && <img src={coverUrl} alt={title} width="100" />}
            {notes && <p>Notes: {notes}</p>}
            
            <div>
                <button onClick={() => onToggleRead(id)}>
                    {isRead ? '✓ Read' : 'Mark as Read'}
                </button>
                <button onClick={() => onToggleFavorite(id)}>
                    {isFavorite ? '★ Favorite' : '☆ Favorite'}
                </button>
                <button onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
            <hr />
        </div>
        
        </>
    );
}


export default BookCard