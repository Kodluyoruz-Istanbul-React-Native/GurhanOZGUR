import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 3,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  input_container: {
    flex: 1,
  },
  text_input: {
    color: 'black',
  },
  photo_title: {
    color: '#ff6f00',
  },
  photo_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
});
