import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Flatlist } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={{fontSize: 30}}>Amy's 2020 Goals</Text>
      </View>
      <GoalInput onAddGoal={addGoalHandler} />
      <Flatlist
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  }
});