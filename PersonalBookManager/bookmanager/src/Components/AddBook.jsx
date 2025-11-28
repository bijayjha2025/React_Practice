
import React, {useState} from 'react'

const AddBook = ({onAddBook})=> {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [notes, setNotes] = useState("");
    const [coverUrl, setCoverUrl] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert('Title and Author are required!');
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      genre,
      notes,
      isFavorite: false,
      isRead: false,
    };

    onAddBook(newBook);

    setTitle('');
    setAuthor('');
    setGenre('');
    setNotes('');
    setCoverUrl('');
    };

    return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author *"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
    </>
    );
}

export default AddBook