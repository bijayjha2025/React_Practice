import React from "react";

const genreColors = {
  Fiction: "rgba(79, 70, 229, 1)",
  Romance: "rgba(236, 72, 153, 1)",
  Fantasy: "rgba(245, 158, 11, 1)",
  SciFi: "rgba(16, 185, 129, 1)",
  Mystery: "rgba(139, 92, 246, 1)",
  Biography: "rgba(249, 115, 22, 1)",
  Finance: "rgba(134, 159, 240, 1)",
  Productivity: "rgba(195, 232, 31, 1)",
  Default: "rgba(107, 114, 128, 1)"
};

const BookCard =({book, onToggleFavorite, onToggleRead, onDelete}) =>{
    const {id, title, author, genre, notes, isFavorite, isRead} = book;

    const badgeColor = genreColors[genre] || genreColors.Default;

    return(
        <>
        <div className="bookCard">
            <h3>{title}</h3>
            <p><strong>Author: </strong> {author}</p>
            {genre && <span className="genreBadge" style={{ backgroundColor: badgeColor }}>{genre}</span>}
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
        </div>
        </>
    );
}


export default BookCard