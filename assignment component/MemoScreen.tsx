import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {memo} from 'react';

const Child = memo(({text}) => {
  return <Text style={styles.text}>{text}</Text>;
});

function MemoScreen() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  return (
    <View style={styles.center}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type here"
      />
      <Button title="Increment" onPress={() => setCount(c => c + 1)} />
      <Text>Counter: {count}</Text>
      <Child text={text} />
    </View>
  );
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {marginTop: 10, fontSize: 16},
  input: {borderWidth: 1, padding: 10, margin: 10, width: '80%'},
});
export default MemoScreen;
