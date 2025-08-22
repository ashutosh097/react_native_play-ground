import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="+" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={() => setCount(count - 1)} />
        </View>
      </View>
      <Text style={styles.text}>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  counter: {
    fontSize: 64,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBlock:10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal:24,
  },
  text: {
    color: 'red',
    fontSize: 18,
  },
});

export default Counter;

