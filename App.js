import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [openInput, setOpenInput] = useState(false);

    const handleSubmit = (input) => {
        const newGoal = {
            id: uuidv4(),
            title: input,
        };
        setGoals((prev) => {
            return [...prev, newGoal];
        });
    };

    const deleteGoal = (id) => {
        const result = goals.filter((item) => item.id !== id);
        setGoals(result);
    };

    const toggleModal = () => {
        setOpenInput((prev) => !prev);
    };

    const renderItem = ({ item, index }) => {
        return <GoalItem item={item} index={index} deleteGoal={deleteGoal} />;
    };

    return (
        <View style={styles.Screen}>
            <Button
                title="Add New Goal"
                style={styles.addGoalBtn}
                onPress={toggleModal}
            />
            <GoalInput
                handleSubmit={handleSubmit}
                openInput={openInput}
                toggleModal={toggleModal}
            />

            <View style={styles.Goals}>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    data={goals}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Screen: {
        marginTop: '15%',
    },
    Goals: {
        padding: 20,
        height: '70%',
    },
    addGoalBtn: {},
});
