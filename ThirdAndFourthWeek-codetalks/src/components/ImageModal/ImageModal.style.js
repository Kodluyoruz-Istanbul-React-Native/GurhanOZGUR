import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    height: deviceSize.height / 1.4,
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 520,
    resizeMode: 'cover',
  },
  indicator: {
    alignSelf: 'center',
  },
});
