import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { NoteViewModel } from "../../viewModels/NoteViewModel"
import { Note } from "../../models/Note"
import AddNoteForm from "../components/AddNoteForm"
import NoteItem from "../components/NoteItem"



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
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>My Todo App</Text>
            <AddNoteForm onAddNote={handleAddNote} />

            <FlatList
                data={notes}
                renderItem={({ item }) => (
                    <NoteItem note={item} onDelete={handleDeleteNote} />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 16 }}
            />


        </View>
    )
}

export default HomeScreen
