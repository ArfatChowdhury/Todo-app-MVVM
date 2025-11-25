import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"



interface AddNoteFormProps {
    onAddNote: (text: string) => void
}

const AddNoteForm = ({ onAddNote }: AddNoteFormProps) => {
    const [noteText, setNoteText] = useState('')

    const handleAddNote = () => {
        if (noteText.trim()) {
            onAddNote(noteText.trim())
            setNoteText('')
        }
    }
    return (
        <View>
            <TextInput
                value={noteText}
                onChangeText={setNoteText}
                placeholder="Enter your note"
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    padding: 10,
                    marginBottom: 10
                }}
            />
            <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5 }} onPress={handleAddNote}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#fff' }} >Add Note</Text>
            </TouchableOpacity>
        </View>
    )


}

export default AddNoteForm