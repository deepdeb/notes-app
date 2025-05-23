import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const NoteItem = ({ note, onDelete }) => {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.noteText}>{note.text}</Text>
            <TouchableOpacity onPress={() => onDelete(note.$id)}>
                <MaterialIcons name="delete" size={24} color="#ff3333" />
            </TouchableOpacity>
        </View>
    )
}

export default NoteItem

const styles = StyleSheet.create({
    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    noteText: {
        fontSize: 18,
    },
})