import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { NoteViewModel } from "../../viewModels/NoteViewModel"
import { Note } from "../../models/Note"



const HomeScreen = () => {
    const [noteViewModel] = useState(() => new NoteViewModel())
    const [notes, setNotes] = useState<Note[]>([])


    useEffect(() => {
        const interval = setInterval(() => {
            setNotes(noteViewModel.getNotes())
        }, 100)
        return () => clearInterval(interval)
    }, [noteViewModel])

    const handleAddNote = (text: string) => {
        noteViewModel.addNewNote(text)
    }

    const handleDeleteNote = (id: string) => {
        noteViewModel.deleteNote(id)
    }

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}