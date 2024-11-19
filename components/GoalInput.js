import { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal }) {
  const [formData, setFormData] = useState({ goal: '', goalDuration: '' });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    onAddGoal(formData); // Pass formData to the parent component
    setFormData({ goal: '', goalDuration: '' }); // Clear inputs after submission
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        value={formData.goal}
        onChangeText={(text) => handleChange('goal', text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal duration"
        value={formData.goalDuration}
        onChangeText={(text) => handleChange('goalDuration', text)}
      />
      <Button title="Add Goal" onPress={submitHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 10,
    marginBottom: 10,
  },
});
