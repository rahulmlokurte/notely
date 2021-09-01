import { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </>
  );
};

export default Notes;
