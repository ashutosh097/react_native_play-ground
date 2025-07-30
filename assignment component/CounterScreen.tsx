import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function CounterScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [seconds, setTimer] = useState(60);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(oldValue => oldValue - 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    const time = seconds

  return (
    <View style={styles.center}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.container}>
        <View style={styles.plusButtonContainer}>
          <Button title="+{Plus}" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.minusButtonContainer}>
          <Button
            title="- Minus"
            onPress={() => navigation.goBack()}
            color="red"
          />
        </View>
      </View>

      <View style={styles.progressWrapper}>
        <Text style={styles.timerText}>{time} seconds remaining</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { flex: time/60 }]} />
          <View style={{ flex: 1 - time/60 }} />
        </View>
      </View>
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
  count: { fontSize: 50, margin: 20 },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    flex: 1,
  },
  plusButtonContainer: {
    width: '40%', // Wider, but not hardcoded in px
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 12,
  },
  minusButtonContainer: {
    width: '40%', // Wider, but not hardcoded in px
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
  },
  progressWrapper: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  progressBarBackground: {
    flexDirection: 'row',
    width: '80%',
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    backgroundColor: '#4caf50',
  },
});
export default CounterScreen;
