import React from 'react';

type Note = {
    noteText: string;

};

export interface NoteProps {
    note: Note;
}
const Note: React.FC<NoteProps> = ({note}) => {
    return (
        <p className="footer-note">{note.noteText}</p>
    );
};

export default Note;