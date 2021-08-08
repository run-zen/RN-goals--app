import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const GoalItem = ({ item, index, deleteGoal }) => {
    return (
        <TouchableOpacity>
            <View key={item.id} style={styles.goal}>
                <Text style={styles.goalTitle}>
                    {index + 1} . {item.title}
                </Text>
                <Button title="delete" onPress={() => deleteGoal(item.id)} />
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goal: {
        backgroundColor: 'white',
        height: 60,
        padding: 0,
        margin: 20,
        elevation: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    goalTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        padding: 5,
    },
});
