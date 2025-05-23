import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useState, useRef } from 'react'

const NoteItem = ({ note, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(note.text)
    const inputRef = useRef(null)

    const handleSave = () => {
        if (editedText.trim() === '') return
        onEdit(note.$id, editedText)
        setIsEditing(false) 
    }

    return (
        <View style={styles.noteItem}>
            {isEditing ? (
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    value={editedText}
                    onChangeText={setEditedText}
                    autoFocus
                    onSubmitEditing={handleSave}
                    returnKeyType='done'
                />
            ) : (
                <Text style={styles.noteText}>{note.text}</Text>
            )}

            <View style={styles.actions}>
                {isEditing ? (
                    <TouchableOpacity onPress={() => {
                        handleSave()
                        inputRef.current?.blur()
                    }}>
                        <MaterialIcons name="save" size={24} color="#3399ff" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => setIsEditing(true)}>
                        <MaterialIcons name="edit" size={24} color="#3399ff" />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => onDelete(note.$id)}>
                    <MaterialIcons name="delete" size={24} color="#ff3333" />
                </TouchableOpacity>
            </View>
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
    actions: {
        flexDirection: 'row',
        gap: 5
    },
})