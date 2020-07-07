import React from 'react';
import { View, Text, Stylesheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
    
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
});

export default GoalItem;