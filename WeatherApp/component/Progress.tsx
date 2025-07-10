import React from 'react';
import { View, StyleSheet } from 'react-native';

const Skeleton = () => (
  <View style={styles.container}>
    <View style={styles.box} />
    <View style={[styles.box, { width: 150, marginTop: 10 }]} />
    <View style={[styles.box, { width: 180, marginTop: 10 }]} />
  </View>
);

export default Skeleton;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: {
    width: 100,
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});