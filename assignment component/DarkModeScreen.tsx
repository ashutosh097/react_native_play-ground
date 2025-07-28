import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

function DarkModeScreen() {
  const [dark, setDark] = useState(false);
  return (
    <View style={[styles.center, {backgroundColor: dark ? '#333' : '#fff'}]}>
      <Text style={{color: dark ? '#fff' : '#000'}}>
        Dark Mode is {dark ? 'On' : 'Off'}
      </Text>
      <Switch value={dark} onValueChange={setDark} />
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
});
export default DarkModeScreen;
