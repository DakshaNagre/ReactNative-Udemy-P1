import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    };
    
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible = {props.visible} animationType = "slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goals"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                
                <View style={styles.buttonContainer}>
                    
                    <View style = {styles.button}>
                        <Button title="Add"
                            // We can use either of the 2 syntaxs to pass parameters from child to parent when button is clicked.
                            // onPress = {() => props.onAddGoal(enteredGoal)}
                            // onPress = {props.onAddGoal.bind(this, enteredGoal)}
                            onPress = {addGoalHandler}/>
                    </View>
                    <View style = {styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;