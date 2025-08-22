import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

function TodoListScreen() {
  const [task, setTask] = useState('');
  const [list, setList] = useState<String>([]);

  const addTask = () => {
    if (task) setList([...list, task]);
    setTask('');
  };
  const removeTask = index => setList(list.filter((_, i) => i !== index));
  return (
    <View style={styles.center}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Todo" onPress={addTask} />
      {list.map((item, index) => (
        <View key={index} style={styles.todoItem}>
          <Text>{item}</Text>
          <Button title="Delete" onPress={() => removeTask(index)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {marginTop: 10, fontSize: 16},
  input: {borderWidth: 1, padding: 10, margin: 10, width: '80%'},
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5,
  },
});

export default TodoListScreen;
