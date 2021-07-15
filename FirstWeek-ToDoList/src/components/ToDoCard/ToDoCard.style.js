import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#7da453',
    margin: 10,
    borderRadius: 10,
  },
  isDoneContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: '#37474f',
    margin: 10,
    borderRadius: 10,
  },
  defaultStyle: {
    color: 'white',
    textDecorationLine: 'none',
  },
  isDoneStyle: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
