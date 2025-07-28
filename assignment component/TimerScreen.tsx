import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Timer() {
  const [seconds, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(oldValue => oldValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello MR. Ashutosh, It is Timer</Text>
      <Text style={styles.text}>{seconds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 16,
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
    marginBlock: 10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 24,
  },
  text: {
    color: 'grey',
    fontSize: 18,
  },
});

export default Timer;
