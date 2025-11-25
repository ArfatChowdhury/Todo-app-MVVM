import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Note } from "../../models/Note"
import Ionicons from "@expo/vector-icons/Ionicons"

interface NoteItemProps {
    note: Note,
    onDelete: (id: string) => void
}

const NoteItem = ({ note, onDelete }: NoteItemProps) => {
    return (
        <TouchableOpacity style={styles.noteItem}>
            <View style={styles.noteContent}>
                <View style={styles.textContainer}>
                    <Text style={styles.noteText}>{note.text}</Text>
                    <Text style={styles.noteDate}>{note.createdAt.toLocaleString()}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(note.id)}>
                    <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    noteItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    noteContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    noteText: {
        fontSize: 16,
        fontWeight: '500',
    },
    noteDate: {
        fontSize: 12,
        color: '#666',
        marginTop: 4
    }
})

export default NoteItem;