import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
} from 'react-native';

export default function App() {
    const [input, setInput] = useState('');
    const [goals, setGoals] = useState([]);

    const handleSubmit = () => {
        const newGoal = {
            id: uuidv4(),
            title: input,
        };
        setGoals((prev) => {
            return [...prev, newGoal];
        });
        setInput('');
    };

    const deleteGoal = (id) => {
        const result = goals.filter((item) => item.id !== id);
        setGoals(result);
    };

    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.goal}>
                <Text style={styles.goalTitle}>{item.title}</Text>
                <Button title="delete" onPress={() => deleteGoal(item.id)} />
            </View>
        );
    };

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    value={input}
                    placeholder="Enter Goal"
                    style={styles.input}
                    onChangeText={(text) => setInput(text)}
                    onSubmitEditing={handleSubmit}
                />
                <Button title="ADD" onPress={handleSubmit} />
            </View>
            {/* <View style={styles.Goals}>
                {goals.map((goal, index) => (
                    <View key={goal.id} style={styles.goal}>
                        <Text style={styles.goalTitle}>
                            {index + 1} . {goal.title}
                        </Text>
                        <Button
                            title="delete"
                            onPress={() => deleteGoal(goal.id)}
                        />
                    </View>
                ))}
            </View> */}
            <View style={styles.Goals}>
                <FlatList
                    data={goals}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        // borderColor: 'black',
        // borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        padding: 20,
        height: '25%',
    },
    input: {
        height: 40,
        width: '70%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
    },
    Goals: {
        padding: 20,
        height: '70%',
    },
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
