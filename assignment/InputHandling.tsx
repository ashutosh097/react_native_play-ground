import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

const InputHandling = () => {
 const [textName, setTextName] = useState('') 

  return (
    <View style={styles.container}>

    <Text style={styles.text}>Hello MR. Ashutosh, It is Timer</Text>
     <TextInput 
     style={styles.input}
     value={textName} 
     onChangeText={setTextName}
     placeholder='Please enter your name'
     />
      <View style={styles.button}>
    <Button 
    title={'Submit'}
    onPress={()=>{}}/>
     </View>
    {textName!='' && <Text style={styles.text}>Hello, {textName}</Text>}
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
   input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  text: {
    color: 'grey',
    fontSize: 18,
  },
});

export default InputHandling;

