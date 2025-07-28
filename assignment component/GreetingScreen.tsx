import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function GreetingCard({name, message}) {
  return (
    <View style={styles.card}>
      <Text style={styles.bold}>{name}</Text>
      <Text>{message}</Text>
    </View>
  );
}

function GreetingScreen() {
  return (
    <View style={styles.center}>
      <GreetingCard name="Ashutosh" message="Start React Native!" />
      <GreetingCard name="Name" message="Keep Doing!" />
      <GreetingCard name="Any Name" message="You're doing great!" />
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
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 6,
    width: '80%',
  },
  bold: {fontWeight: 'bold', color: '#1976D2'},
  text: {marginTop: 10, fontSize: 16},
});

export default GreetingScreen;
