import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const ToogleVisibility = () => {
  const [isVisible, setVisibility] = useState(true);

  return (
    <View style={styles.container}>
      {isVisible && <Text style={styles.text}>Hello MR. Ashutosh I'm avaiable or visible </Text>}
      <Button title={isVisible?'visible':'sorry no visible'}
       onPress={()=>setVisibility(!isVisible)}/>
    </View>
  );
};

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
    color: 'grey',
    fontSize: 18,
  },
});

export default ToogleVisibility;

