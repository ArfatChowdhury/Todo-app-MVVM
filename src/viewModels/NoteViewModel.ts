import { Note } from "../models/Note";


export class NoteViewModel {
    private notes: Note[] = []

    addNewNote(text: string): void {
        const newNote: Note = {
            id: Date.now().toString(),
            text: text,
            createdAt: new Date()
        }
        this.notes = [newNote, ...this.notes]
        // this.notes.push(newNote)
    }

    // delete note 
    deleteNote(id: string): void {
        this.notes = this.notes.filter(note => note.id !== id)
    }

    // get all notes 

    getNotes(): Note[] {
        return this.notes
    }

}

