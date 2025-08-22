import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

function InputHandlingScreen() {
  const [textName, setTextName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <View style={styles.center}>
      <Text style={styles.text}>Hello MR. Ashutosh, It is Input handling</Text>
      <TextInput
        style={styles.input}
        value={textName}
        onChangeText={setTextName}
        placeholder="Please enter your name"
      />
      <Button title="Submit" onPress={() => setSubmitted(true)} />
      {submitted && <Text style={styles.text}>Hello, {textName}</Text>}
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
});

export default InputHandlingScreen;
