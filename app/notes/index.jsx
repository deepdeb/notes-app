import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import { useState } from 'react'

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        { id: '1', text: 'Note One' },
        { id: '2', text: 'Note Two' },
        { id: '3', text: 'Note Three' }
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const [newNote, setNewNote] = useState('')

    // add new note
    const addNote = () => {
        if (newNote.trim() === '') return

        setNotes((prev) => [
            ...prev,
            { id: Date.now.toString(), text: newNote }
        ])

        setNewNote('')
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteText}>{item.text}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Add Note</Text>
            </TouchableOpacity>

            {/* modal */}
            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add a New Note</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Note...'
                            placeholderTextColor='#aaa'
                            value={newNote}
                            onChangeText={setNewNote}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
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
    addButton: {
        position: 'absolute',
        bottom: 35,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#333',
    },
    saveButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        color: '#fff',
    },
})

export default NoteScreen