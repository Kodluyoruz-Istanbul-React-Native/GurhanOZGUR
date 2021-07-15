import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Home({navigation}) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Go To Messages"
        onPress={() => navigation.navigate('HomeMessagesScreen')}
      />
      <View style={styles.seperator} />
      <Button
        title="Go To New Post"
        onPress={() => navigation.navigate('HomeNewPostScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    margin: 5,
  },
});

export default Home;
