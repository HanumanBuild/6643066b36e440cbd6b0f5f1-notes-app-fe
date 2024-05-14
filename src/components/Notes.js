import React, { useState, useEffect } from 'react';
import api from '../api';

function Notes() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get('/api/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    const response = await api.post('/api/notes', { content: note });
    setNotes([...notes, response.data.note]);
    setNote('');
  };

  return (
    <div className='container mx-auto p-4'>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Add a note' />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleAddNote}>
        Add Note
      </button>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className='list-disc'>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;