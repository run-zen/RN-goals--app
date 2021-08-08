import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = ({ handleSubmit, openInput, toggleModal }) => {
    const [input, setInput] = useState('');

    const submit = () => {
        handleSubmit(input);
        setInput('');
        toggleModal();
    };

    return (
        <Modal visible={openInput} animationType="slide">
            <View style={styles.container}>
                <TextInput
                    value={input}
                    placeholder="Enter Goal"
                    style={styles.input}
                    onChangeText={(text) => setInput(text)}
                    onSubmitEditing={submit}
                />
                <Button title="ADD" onPress={submit} />
            </View>
            <View style={styles.cancelBtn}>
                <Button title="Cancel" onPress={toggleModal} color="red" />
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,

        // borderColor: 'black',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    cancelBtn: {
        padding: 20,
    },
});
