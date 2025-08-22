import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function CounterScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.center}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.container}>
        <View style={styles.plusButtonContainer}>
          <Button title="+{Plus}" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.minusButtonContainer}>
          <Button
            title="- (Minus)"
            onPress={() => setCount(count - 1)}
            color="red"
          />
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
  count: {fontSize: 50, margin: 20},
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
});
export default CounterScreen;
