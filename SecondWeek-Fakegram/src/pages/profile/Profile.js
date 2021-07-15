import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Profile;
