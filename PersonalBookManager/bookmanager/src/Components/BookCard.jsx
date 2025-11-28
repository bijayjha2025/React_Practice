

import React from "react";

const BookCard =({book, onToggleFavorite, onToggleRead, onDelete}) =>{
    const {id, title, author, genre, notes, coverUrl, isFavorite, isRead} = book;

    return(
        <>
        <div className="bookCard">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            {genre && <p>Genre: {genre}</p>}
            {coverUrl && <img src={coverUrl} alt={title} width="100" />}
            {notes && <p>Notes: {notes}</p>}
            
            <div className="bookCardControls">
                <button onClick={() => onToggleRead(id)} className="toggleReadButton">
                    {isRead ? '✓ Read' : 'Mark as Read'}
                </button>
                <button onClick={() => onToggleFavorite(id)} className="toggleFavoriteButton">
                    {isFavorite ? '★ Favorite' : '☆ Favorite'}
                </button>
                <button onClick={() => onDelete(id)} className="deleteButton">
                    Delete
                </button>
            </div>
            <hr />
        </div>
        
        </>
    );
}


export default BookCard