import { StyleSheet, Text, View } from 'react-native';
export default function GoalItem({goal, duration}) {
  return (
    <View style={styles.listHolder}>
    <Text style={styles.listText}>
      {goal} - {duration}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
    listHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: '#2C3E50',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
      listText: {
        color: 'white',
        fontSize: 16,
      },
  });