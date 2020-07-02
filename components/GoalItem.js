import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = Stylesheet.create({
  listItem: {
    padding: 10,
    // marginVertical is spacing top and bottom only
    marginVertical: 10,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem;