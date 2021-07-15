import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Platform,
} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import toDoData from './todo-data.json';

let dataInput = '';

const App = () => {
  const [finalData, changeData] = useState(toDoData);
  const [idx, increment] = useState(finalData.length);
  const renderToDo = ({item}) => (
    <ToDoCard todo={item} onLongPress={() => handleDeleteById(item.id)} />
  );
  const [toDoCounter, changeCounter] = useState(finalData.length);
  const [buttonColor, changeButtonColor] = useState({backgroundColor: 'gray'});
  const configuringToDo = text => {
    text.length > 0
      ? changeButtonColor({backgroundColor: '#ffa500'})
      : changeButtonColor({backgroundColor: 'gray'});
    dataInput = text;
  };

  const handleSubmit = () => {
    if (dataInput !== '') {
      finalData.push({
        id: idx,
        toDoText: dataInput,
        isDone: false,
        deleted: false,
      });
      increment(idx + 1);
      changeData(finalData);
      changeCounter(finalData.length);
    }
  };

  const handleDeleteById = songId => {
    const deletedDataArray = finalData.filter(item => item.id !== songId);
    changeData(deletedDataArray);
    changeCounter(deletedDataArray.length);
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>Yapılacaklar</Text>
            <Text style={styles.counterText}>{toDoCounter}</Text>
          </View>
          <FlatList
            keyExtractor={item => item.id}
            data={finalData}
            renderItem={renderToDo}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Yapılacak...'}
              placeholderTextColor="gray"
              onChangeText={configuringToDo}
            />
            <TouchableOpacity
              style={[styles.buttonStyle, buttonColor]}
              onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  counterContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterText: {
    color: '#ed9b03',
    fontSize: 40,
  },
  inputContainer: {
    backgroundColor: '#37474f',
    borderRadius: 15,
    margin: 15,
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  inputStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#566a74',
    color: 'white',
  },
});
