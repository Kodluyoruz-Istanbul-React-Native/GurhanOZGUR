import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.style';

const ToDoCard = props => {
  const [defaultStyle, changeStyle] = useState(props.todo.isDone);
  return (
    <TouchableOpacity
      style={defaultStyle ? styles.isDoneContainer : styles.container}
      onPress={() => changeStyle(!defaultStyle)}
      onLongPress={props.onLongPress}>
      <Text style={defaultStyle ? styles.isDoneStyle : styles.defaultStyle}>
        {props.todo.toDoText}
      </Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
