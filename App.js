import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (formData) => {
    if (!formData.goal.trim() || !formData.goalDuration.trim()) {
      return; // Prevent adding empty or whitespace-only goals
    }

    setCourseGoals((prev) => [
      ...prev,
      { id: Math.random().toString(), ...formData }, // Add goal with unique ID
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsText}>List of goals...</Text>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id} // Ensure unique keys for each item
          renderItem={({ item }) => (
            <GoalItem goal={item.goal} duration={item.goalDuration} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    height: '100%',
  },
  goalsContainer: {
    flex: 5,
  },
  goalsText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
